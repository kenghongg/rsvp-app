<template>
  <!-- table group -->
  <div
    style="
      display: flex;
      flex-wrap: wrap;
      gap: 30px;
      padding: 20px;
      margin-bottom: 60px;
    "
  >
    <v-card
      v-for="(group, index) in groupedSubmissions"
      :key="index"
      style="width: 250px"
    >
      <v-card-item>
        <v-card-title>
          Table {{ group[0].tableNo || "Unassigned" }}
        </v-card-title>
        <ol style="margin-left: 20px">
          <li
            v-for="(submission, idx) in group"
            :key="idx"
            class="attendee-info"
          >
            {{ submission.name }}
            <span style="font-size: 70%; color: #cccccc"
              >&nbsp;- {{ submission.registeredBy }}</span
            >
          </li>
        </ol>
      </v-card-item>
    </v-card>
  </div>

  <div style="padding: 20px">
    <v-table>
      <thead>
        <tr>
          <th>No.</th>
          <th>Name</th>
          <th><small>Registered&nbsp;By</small></th>
          <th>Phone</th>
          <th>Attending</th>
          <th>Table No.</th>
          <th>Submit Time</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(submission, index) in displayedSubmissions"
          :key="submission.id"
          class="guest-data"
        >
          <td>{{ index + 1 }}</td>
          <td>{{ submission.name }}</td>
          <td>
            <small>{{ submission.registeredBy }}</small>
          </td>
          <td>{{ submission.phone }}</td>
          <td>{{ submission.radioAttend }}</td>
          <td>
            <div class="table-no-detail">
              <template v-if="!isEditingTableNo">
                <v-text-field
                  v-model="submission.tableNo"
                  variant="outlined"
                  class="small-text-field"
                  disabled
                ></v-text-field>
              </template>
              <template v-else>
                <v-text-field
                  v-model="submission.newTableNo"
                  variant="outlined"
                  class="small-text-field"
                ></v-text-field>
              </template>
            </div>
          </td>
          <td>{{ formatDate(submission.submissionTime) }}</td>
          <td>
            <v-btn
              icon="mdi-delete"
              size="x-small"
              color="black"
              @click="deleteSubmission(index)"
              v-if="isEditingTableNo"
            ></v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>

    <div>
      <v-select
        v-model="rowsPerPage"
        :items="rowCounts"
        label="Rows per page"
        @change="changeRowCount"
      ></v-select>
    </div>

    <!-- Pagination controls -->
    <v-pagination
      v-model="currentPage"
      :length="Math.ceil(submissions.length / rowsPerPage)"
    ></v-pagination>

    <!-- Add the following checkbox to toggle attending submissions -->
    <v-checkbox
      v-model="showAttending"
      label="Show Attending Submissions"
    ></v-checkbox>

    <!-- <div>
      <template v-if="!isEditingTableNo">
        <v-btn @click="startEditingTableNo">Edit Table No.</v-btn>
      </template>
      <template v-else>
        <v-btn @click="confirmTableNoEdit">Confirm</v-btn>
      </template>
    </div> -->

    <!-- Add the following button to change rows per page -->

    <div>
      <template v-if="!isEditingTableNo">
        <v-btn @click="startEditingTableNo">Edit Table No.</v-btn>
      </template>
      <template v-else>
        <v-btn @click="confirmTableNoEdit">Confirm</v-btn>
      </template>
    </div>
  </div>

  <!-- <v-card width="400">
    <v-card-item>
      <v-card-title>This is a title</v-card-title>

      <v-card-subtitle>This is a subtitle</v-card-subtitle>
    </v-card-item>

    <v-card-text> This is content </v-card-text>
  </v-card> -->

  <v-dialog v-model="deleteConfirmationDialog" max-width="400">
    <v-card>
      <v-card-title class="headline">Confirmation</v-card-title>
      <v-card-text>
        Are you sure you want to delete this submission?
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="deleteSubmissionConfirmed">
          Confirm
        </v-btn>
        <v-btn color="primary" text @click="deleteConfirmationDialog = false">
          Cancel
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import db from "@/firebase";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

export default {
  data() {
    return {
      showAttending: false, // Toggle to show attending submissions only
      submissions: [],
      isEditingTableNo: false,
      deleteConfirmationDialog: false,
      submissionToDeleteIndex: null,
      rowCount: 10, // Default row count
      rowCounts: [10, 25, 50, 100], // Available row count options
      currentPage: 1, // Current page number
      rowsPerPage: 10, // Number of rows per page
    };
  },

  computed: {
    // displayedSubmissions() {
    //   const startIndex = (this.currentPage - 1) * this.rowsPerPage;
    //   const endIndex = startIndex + this.rowsPerPage;
    //   return this.submissions.slice(startIndex, endIndex);
    // },
    displayedSubmissions() {
      const startIndex = (this.currentPage - 1) * this.rowsPerPage;
      const endIndex = startIndex + this.rowsPerPage;
      return this.filteredSubmissions.slice(startIndex, endIndex);
    },
    filteredSubmissions() {
      // Filter the submissions based on the showAttending toggle
      if (this.showAttending) {
        return this.submissions.filter(
          (submission) => submission.radioAttend === "yes"
        );
      } else {
        return this.submissions;
      }
    },

    groupedSubmissions() {
      const groupedSubmissions = {};
      this.submissions.forEach((submission) => {
        const tableNo = submission.tableNo || "Unassigned";
        if (!groupedSubmissions[tableNo]) {
          groupedSubmissions[tableNo] = [];
        }
        groupedSubmissions[tableNo].push(submission);
      });

      // Sort submissions by tableNo
      const sortedGroups = Object.values(groupedSubmissions).sort(
        (groupA, groupB) => {
          const tableNoA = groupA[0].tableNo || "Unassigned";
          const tableNoB = groupB[0].tableNo || "Unassigned";
          return tableNoA.localeCompare(tableNoB, undefined, {
            numeric: true,
            sensitivity: "base",
          });
        }
      );

      // Filter out groups where all submissions have radioAttend === 'no'
      const filteredGroups = sortedGroups.filter((group) =>
        group.some((submission) => submission.radioAttend === "yes")
      );

      return filteredGroups;
    },

    // groupedSubmissions() {
    //   const groupedSubmissions = {};
    //   this.submissions.forEach((submission) => {
    //     const tableNo = submission.tableNo || "Unassigned";
    //     if (!groupedSubmissions[tableNo]) {
    //       groupedSubmissions[tableNo] = [];
    //     }
    //     groupedSubmissions[tableNo].push(submission);
    //   });

    //   // Sort submissions by tableNo
    //   const sortedGroups = Object.values(groupedSubmissions).sort(
    //     (groupA, groupB) => {
    //       const tableNoA = groupA[0].tableNo || "Unassigned";
    //       const tableNoB = groupB[0].tableNo || "Unassigned";
    //       return tableNoA.localeCompare(tableNoB, undefined, {
    //         numeric: true,
    //         sensitivity: "base",
    //       });
    //     }
    //   );

    //   return sortedGroups;
    // },
  },
  async mounted() {
    await this.fetchSubmissions();
  },
  methods: {
    startEditingTableNo() {
      this.isEditingTableNo = true;
      // Create a copy of table numbers for editing
      this.submissions.forEach((submission) => {
        submission.newTableNo = submission.tableNo;
      });
    },

    changeRowCount() {
      // Optionally, you can fetch the submissions again if needed.
      // await this.fetchSubmissions();
      this.currentPage = 1; // Reset to the first page after changing the rows per page.
    },

    confirmTableNoEdit() {
      if (this.isEditingTableNo) {
        const updatedSubmissions = this.submissions.filter(
          (submission) => submission.newTableNo !== submission.tableNo
        );
        const updatePromises = updatedSubmissions.map((submission) => {
          submission.tableNo = submission.newTableNo;
          const submissionRef = doc(db, "submissions", submission.id);
          return updateDoc(submissionRef, { tableNo: submission.tableNo });
        });

        Promise.all(updatePromises)
          .then(() => {
            console.log("Table numbers updated successfully.");
          })
          .catch((error) => {
            console.error("Error updating table numbers:", error);
          })
          .finally(() => {
            this.isEditingTableNo = false;
          });
      }
    },
    async fetchSubmissions() {
      const submissionsRef = collection(db, "submissions");
      const submissionsSnapshot = await getDocs(submissionsRef);
      this.submissions = submissionsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      this.submissions.sort((a, b) => {
        return new Date(b.submissionTime) - new Date(a.submissionTime);
      });
    },
    formatDate(dateString) {
      const date = new Date(dateString);
      const options = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      return date.toLocaleString("en-GB", options).replace(",", " |");
    },
    async deleteSubmission(index) {
      this.submissionToDeleteIndex = index;
      this.deleteConfirmationDialog = true;
    },

    async deleteSubmissionConfirmed() {
      const index = this.submissionToDeleteIndex;
      if (index === null) {
        return; // Abort deletion
      }

      try {
        const submission = this.submissions[index];
        const submissionRef = doc(db, "submissions", submission.id);
        await deleteDoc(submissionRef);
        this.submissions.splice(index, 1);
      } catch (error) {
        console.error("Error deleting submission:", error);
      } finally {
        this.submissionToDeleteIndex = null;
        this.deleteConfirmationDialog = false;
      }
    },
  },
};
</script>

<style lang="scss">
.guest-data {
  .table-no-detail {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  .small-text-field .v-input__control {
    height: 40px; /* Adjust the height as needed */
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px !important;
  }
  .small-text-field .v-label {
    font-size: 12px !important; /* Adjust the font size as needed */
    line-height: 1;
    padding: 0;
  }
  .v-input--density-default {
    --v-input-control-height: 0;
    --v-input-padding-top: 0;
  }

  .v-input__details {
    padding-inline-start: 0 !important;
    padding-inline-end: 0 !important;
  }

  .v-field__input {
    padding: 4px 8px !important;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
