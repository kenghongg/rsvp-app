<template>
  <div style="position: fixed; bottom: 0; left: 0; right: 0; z-index: 999">
    <v-layout class="overflow-visible" style="height: 56px">
      <v-bottom-navigation
        v-model="value"
        style="
          color: #784704;
          background: rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(16px);
        "
      >
        <v-btn>
          <v-icon>mdi-account</v-icon>
          <span style="letter-spacing: 0.6px; display: block">Guest</span>
        </v-btn>

        <v-btn
          href="https://ul.waze.com/ul?place=ChIJ-bneHlhKzDERDNbrsWJ-gdI&ll=3.07394490%2C101.67284230&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
          target="_blank"
        >
          <v-icon>mdi-waze</v-icon>
          <span style="letter-spacing: 0.6px; display: block">Venue</span>
        </v-btn>

        <v-btn @click.prevent="addToCalendar">
          <v-icon>mdi-calendar-plus</v-icon>
          <span style="letter-spacing: 0.6px; display: block">Date</span>
        </v-btn>

        <v-btn active>
          <v-icon>mdi-send</v-icon>
          <span style="letter-spacing: 0.6px; display: block">RSVP</span>
        </v-btn>
      </v-bottom-navigation>
    </v-layout>
  </div>
</template>

<script>
export default {
  methods: {
    addToCalendar() {
      const startDate = new Date("2023-04-01T18:00:00"); // Replace with your start date and time
      const endDate = new Date("2023-04-01T22:30:00"); // Replace with your end date and time
      const title = "Keng Hong and Joey | Wedding at OUG Jade Restaurant"; // Replace with your event title
      const description =
        "Join us for a night of celebration at our wedding dinner! We can't wait to share this special moment with you and honor our families and heritage!"; // Replace with your event description
      const location =
        "OUG Jade Restaurant, 2, Jalan Hujan Rahmat, Taman Overseas Union, 58200 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur, Malaysia"; // Replace with your event location
      const calendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&dates=${startDate.toISOString()}/${endDate.toISOString()}&location=${encodeURIComponent(
        location
      )}&text=${encodeURIComponent(title)}&details=${encodeURIComponent(
        description
      )}`;

      // Detect the user's operating system
      const userAgent = window.navigator.userAgent;
      const isMac = /Macintosh/.test(userAgent);
      const isWindows = /Windows/.test(userAgent);

      // Open the appropriate calendar application
      if (isMac) {
        window.location.href = `ical://event?start=${startDate.toISOString()}&end=${endDate.toISOString()}&location=${encodeURIComponent(
          location
        )}&summary=${encodeURIComponent(
          title
        )}&description=${encodeURIComponent(description)}`;
      } else if (isWindows) {
        window.open(
          `outlookcal:${startDate.toISOString()} /${endDate.toISOString()} /${title} /${description} /${location}`
        );
      } else {
        window.open(calendarUrl, "_blank");
      }
    },
  },
};
</script>
