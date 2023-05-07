<template>
  <div>
    <!-- <h1>Submitted Data</h1> -->
    <!-- <ul>
      <li v-for="submission in submissions" :key="submission.id" style="margin-bottom:20px;">
        <div><strong>Name:</strong> {{ submission.name }}</div>
        <div><strong>Phone:</strong> {{ submission.phone }}</div>
        <div><strong>Attending:</strong> {{ submission.radioAttend ? 'Yes' : 'No' }}</div>
        <div v-if="submission.guestList.length > 0">
          <strong>Guests:</strong>
          <ul>
            <li>{{ submission.guestList }}</li>
          </ul>
        </div>
      </li>
    </ul> -->

    <v-table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Registered By</th>
          <th>Phone</th>
          <th>Attending</th>
          <th>Guest</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="submission in submissions" :key="submission.id">
          <td>{{ submission.name }}</td>
          <td>{{ submission.name }}</td>
          <td>{{ submission.phone }}</td>
          <td>{{ submission.radioAttend ? 'Yes' : 'No' }}</td>
          <td>{{ submission.guestList }}</td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script>
import db from "@/firebase";
import { collection, getDocs } from 'firebase/firestore'

export default {
  data() {
    return {
      submissions: []
    }
  },
  async mounted() {
    const submissionsRef = collection(db, "submissions");
    const submissionsSnapshot = await getDocs(submissionsRef);
    this.submissions = submissionsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));
  }
};
</script>
