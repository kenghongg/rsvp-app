<template>
  <v-container>
    <vue-countdown
      :time="time"
      :interval="100"
      v-slot="{ days, hours, minutes, seconds, milliseconds }"
    >
      <div class="countdown-row">
        <div class="countdown-col">
          <span class="count-num">{{ days }}</span>
          <span class="count-txt">days</span>
        </div>
        <div class="countdown-col">
          <span class="count-num">{{ hours }}</span>
          <span class="count-txt">hours</span>
        </div>
        <div class="countdown-col">
          <span class="count-num">{{ minutes }}</span>
          <span class="count-txt">minutes</span>
        </div>

        <div class="countdown-col">
          <span class="count-num sec"
            >{{ seconds }}.{{ Math.floor(milliseconds / 100) }}</span
          >
          <span class="count-txt">seconds</span>
        </div>
      </div>
    </vue-countdown>
  </v-container>

  <!-- <vue3-flip-countdown></vue3-flip-countdown> -->
</template>

<script>
export default {
  data() {
    const endTime = new Date("2023-12-16T19:00:00");
    const now = new Date();
    const timeLeft = endTime - now;

    return {
      time: timeLeft,
    };
  },
};
</script>

<style lang="scss">
.countdown-row {
  display: flex;
  gap: 16px;
  align-items: flex-end;

  .countdown-col {
    text-align: center;
  }

  span.count-num {
    font-size: 300%;

    &.sec {
      font-size: 150%;
    }
  }

  span.count-txt {
    display: block;
  }
}
</style>
