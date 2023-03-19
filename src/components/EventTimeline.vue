<template>
  <div class="event-timeline-wrap">
    <v-timeline side="end" align="start" class="event-timeline">
      <v-timeline-item dot-color="#784705" size="x-small">
        <div class="d-flex">
          <div class="timeline-time">
            <div>6.00pm</div>
          </div>
          <div>
            <strong>賓客簽到</strong>
            <div class="text-caption">Guest Arrival</div>
          </div>
        </div>
      </v-timeline-item>
      <v-timeline-item dot-color="#784705" size="x-small">
        <div class="d-flex align-items-center">
          <div class="timeline-time">7.00pm</div>
          <div>
            <strong>婚禮儀式</strong>
            <div class="text-caption">Ceremony</div>
          </div>
        </div>
      </v-timeline-item>
      <v-timeline-item dot-color="#784705" size="x-small">
        <div class="d-flex">
          <div class="timeline-time">7.15pm</div>
          <div>
            <strong>婚禮晚宴</strong>
            <div class="text-caption">Dinner</div>
          </div>
        </div>
      </v-timeline-item>
      <v-timeline-item dot-color="#784705" size="x-small">
        <div class="d-flex">
          <div class="timeline-time">9.00pm</div>
          <div>
            <strong>賓客合影</strong>
            <div class="text-caption">Photo Session</div>
          </div>
        </div>
      </v-timeline-item>

      <!-- <v-timeline-item dot-color="teal-lighten-3" size="small">
      <div class="d-flex">
        <strong class="me-4">3-4pm</strong>
        <div>
          <strong>Design Stand Up</strong>
          <div class="text-caption mb-2">Hangouts</div>
        </div>
      </div>
    </v-timeline-item>

    <v-timeline-item dot-color="pink" size="small">
      <div class="d-flex">
        <strong class="me-4">12pm</strong>
        <div>
          <strong>Lunch break</strong>
        </div>
      </div>
    </v-timeline-item>

    <v-timeline-item dot-color="teal-lighten-3" size="small">
      <div class="d-flex">
        <strong class="me-4">9-11am</strong>
        <div>
          <strong>Finish Home Screen</strong>
          <div class="text-caption">Web App</div>
        </div>
      </div>
    </v-timeline-item> -->
    </v-timeline>
  </div>
</template>

<script setup>
//
</script>

<style lang="scss">
.event-timeline-wrap {
  width: 300px;
  margin: auto;
  color: #2d2d2d;
}
.event-timeline.v-timeline--vertical.v-timeline {
  height: 280px;
}

.v-timeline-divider {
  // opacity: 0;
}

.timeline-time {
  font-size: 14px;
  width: 70px;
}
</style>
