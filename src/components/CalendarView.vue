<template>
  <v-container>
    <vue-cal
      selected-date="2023-12-16"
      xsmall
      :time-from="10 * 60"
      :disable-views="['day']"
      events-count-on-year-view
      active-view="month"
      :events="events"
    >
    </vue-cal>

    <div class="mt-4 text-center"><v-btn> Add to Calendar </v-btn></div>
  </v-container>
</template>

<script>
import VueCal from "vue-cal";
import "vue-cal/dist/vuecal.css";

export default {
  components: {
    VueCal,
  },
  // other component options here
  // data: () => ({
  //   // Default to next new year eve.
  //   selectedDate: new Date(new Date().getFullYear(), 11, 31),
  // }),
};
</script>

<style lang="scss">
/* Default indicator is count, but you can override it with one of the following rules. */

/* Dash indicator */
.vuecal__cell-events-count {
  width: 18px;
  height: 2px;
  color: transparent;
}

/* Dot indicator */
.vuecal__cell-events-count {
  width: 4px;
  min-width: 0;
  height: 4px;
  padding: 0;
  color: transparent;
}

/* Cell background indicator */
.vuecal__cell--has-events {
  background-color: #fffacd;
}
.vuecal__cell-events-count {
  display: none;
}
.vuecal__cell:before {
  border: 0;
}

.vuecal__cell {
  // height: 30px;
}

.vuecal__cell--selected {
  .vuecal__cell-content {
    // background: salmon;
    background:#ffffff;
    color: #ffffff;
  }
}

.vuecal__flex {
  &[column] {
    flex-grow: initial !important;
  }
  border-radius: 8px;

  pointer-events: none;
}

.vuecal__arrow {
  display: none;
}
.vuecal__view-btn {
  display: none;
}

.vuecal--month-view {
  border-radius: 8px;
}

.vuecal__title-bar {
  // border-radius: 8px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
}

.vuecal__cell--out-of-scope {
  // display:none;
  opacity: 0.3;
}

.vuecal__cell-content {
  border-radius: 50%;
  // background: teal;
  height: 30px;
  width: 30px;
  color: #777777;
}
</style>
