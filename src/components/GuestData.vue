<template>
  <!-- table group -->
  <div class="card-wrapper">
    <v-card
      v-for="(group, index) in groupedSubmissions"
      :key="index"
      class="card-container"
    >
      <v-card-item>
        <v-card-title
          :class="
            group[0].relationship
              ? `card-cat-${group[0].relationship} card-cat`
              : ''
          "
        >
          Table {{ group[0].tableNo || "Unassigned" }}
          <span style="font-size: 60%; opacity: 0.6">{{
            group[0].relationship
          }}</span>
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
          <th>Relationship</th>
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
          <td>
            <div class="table-no-detail">
              <template v-if="!isEditingTableNo">
                <v-select
                  v-model="submission.relationship"
                  :items="[
                    'hodad',
                    'homum',
                    'ngdad',
                    'kimmum',
                    'tongleong',
                    'joey',
                    'kenghong',
                  ]"
                  underlined
                  disabled
                  class="medium-text-field"
                ></v-select>
              </template>
              <template v-else>
                <v-select
                  v-model="submission.newRelationship"
                  :items="[
                    'hodad',
                    'homum',
                    'ngdad',
                    'kimmum',
                    'tongleong',
                    'joey',
                    'kenghong',
                  ]"
                  underlined
                  dense
                  class="medium-text-field"
                ></v-select>
              </template>
            </div>

            <!-- <div class="table-no-detail">
              <template v-if="!isEditingTableNo">
                <v-text-field
                  v-model="submission.relationship"
                  variant="outlined"
                  class="medium-text-field"
                  disabled
                ></v-text-field>
              </template>
              <template v-else>
                <v-text-field
                  v-model="submission.newRelationship"
                  variant="outlined"
                  class="medium-text-field"
                ></v-text-field>
              </template>
            </div> -->
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
        <v-btn @click="startEditingTableNo">Edit Table</v-btn>
      </template>
      <template v-else>
        <v-btn @click="confirmTableNoEdit">Confirm</v-btn>
      </template>
    </div>
  </div>

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
  addDoc,
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
      relationshipOptions: [
        { text: "何爸", value: "hodad" },
        { text: "何妈", value: "homum" },
        { text: "黄爸", value: "ngdad" },
        { text: "金妈", value: "kimmum" },
        { text: "栋梁", value: "tongleong" },
        { text: "Joey", value: "joey" },
        { text: "KengHong", value: "kenghong" },
        // Add more options as needed
      ],
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
        submission.newRelationship = submission.relationship;
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
          (submission) =>
            submission.newTableNo !== submission.tableNo ||
            submission.newRelationship !== submission.relationship
        );
        const updatePromises = updatedSubmissions.map((submission) => {
          submission.tableNo = submission.newTableNo;
          submission.relationship = submission.newRelationship;
          const submissionRef = doc(db, "submissions", submission.id);
          return updateDoc(submissionRef, {
            tableNo: submission.tableNo,
            relationship: submission.relationship,
          });
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
        // First, sort by submissionTime in descending order
        return new Date(b.submissionTime) - new Date(a.submissionTime);
      });

      // After the first sorting, you can perform the second sorting by tableNo in ascending order
      this.submissions.sort((a, b) => {
        return a.tableNo - b.tableNo;
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
.card-container {
  width: 100%;
}

.card-wrapper {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 30px;
  padding: 20px;
  margin-bottom: 60px;

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
}

.v-main {
  background: #f5f5f5;
}

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
  .medium-text-field {
    height: 30px;
  }
  .medium-text-field .v-select__selection-text {
    margin-top: -25px;
  }
  .medium-text-field .v-input__control {
    height: 30px; /* Adjust the height as needed */
    width: 140px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px !important;
  }
  .medium-text-field .v-label {
    font-size: 12px !important; /* Adjust the font size as needed */
    line-height: 1;
    padding: 0;
  }

  .medium-text-field .v-field.v-field {
    height: 30px;
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

.card-cat {
  display: flex !important;
  justify-content: space-between !important;
  width: 100%;
  padding: 6px 12px !important;
  color: #fff;
  margin-bottom: 10px;
  border-radius: 5px;
}
.card-cat-hodad {
  background: #3498db;
}

.card-cat-homum {
  background: #e74c3c;
}

.card-cat-ngdad {
  background: #009688;
}

.card-cat-kimmum {
  background: #f39c12;
}

.card-cat-tongleong {
  background: #2ecc71;
}

.card-cat-joey {
  background: #9b59b6;
}

.card-cat-kenghong {
  background: #607d8b;
}
</style>
