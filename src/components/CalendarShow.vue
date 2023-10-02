<template>
  <div class="pt-5 mt-5">
    <div class="intro-container">
      <div class="intro-txt">
        <span class="txt-cn">婚礼已经进入倒计时啦</span>
        <div class="intro-sub-txt">
          /&nbsp;&nbsp; Counting down to wedding  &nbsp;&nbsp;/
        </div>
        <div class="intro-rounded-icon">
          <v-icon>mdi-circle</v-icon>
        </div>
      </div>
    </div>
  </div>

  <v-container class="d-flex align-items-center">
    <div class="calendar-wrap">
      <div class="cal-header">
        <div class="cal-month">Dec</div>
        <div class="cal-divider">
          <v-divider :thickness="6" color="#784705"></v-divider>
        </div>
        <div class="cal-year">2023</div>
      </div>
      <div class="cal-week">
        <div>M</div>
        <div>T</div>
        <div>W</div>
        <div>T</div>
        <div>F</div>
        <div>S</div>
        <div>S</div>
      </div>
      <div class="cal-days">
        <div class="not-this-month">27</div>
        <div class="not-this-month">28</div>
        <div class="not-this-month">29</div>
        <div class="not-this-month">30</div>
        <div>1</div>
        <div>2</div>
        <div>3</div>

        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>10</div>

        <div>11</div>
        <div>12</div>
        <div>13</div>
        <div>14</div>
        <div>15</div>
        <div>
          <span class="the-day">16</span>
          <v-icon icon="mdi-heart" class="mark-the-day"></v-icon>
        </div>
        <div>17</div>

        <div>18</div>
        <div>19</div>
        <div>20</div>
        <div>21</div>
        <div>22</div>
        <div>23</div>
        <div>24</div>

        <div>25</div>
        <div>26</div>
        <div>27</div>
        <div>28</div>
        <div>29</div>
        <div>30</div>
        <div>31</div>
      </div>

      <div class="">
        <vue3-flip-countdown
          deadline="2023-12-16 19:00:00"
          mainFlipBackgroundColor="#784704"
          secondFlipBackgroundColor="#a58664"
          mainColor="#ffffff"
          secondFlipColor="#ffffff"
          countdownSize="32px"
          labelSize="14px"
          labelColor="#784704"
          :labels="{ days: '天', hours: '时', minutes: '分', seconds: '秒' }"
        ></vue3-flip-countdown>
      </div>
    </div>
  </v-container>

  <v-container class="date-calendar" max-width="sm">
    <v-divider :thickness="6" color="#784705"></v-divider>

    <div class="text-right date-detail">
      <div class="txt-cn">農曆冬月初四 (星期六)</div>
      <div>2023・12・16 (Sat) - 6:30pm</div>
    </div>

    <!-- <v-divider vertical :thickness="6" color="#784705"></v-divider> -->

    <v-btn
      @click.prevent="addToCalendar"
      variant="flat"
      color="#efeae6"
      :style="{ color: '#784704' }"
      size="large"
      icon
    >
      <v-icon>mdi-calendar-plus</v-icon>
    </v-btn>
  </v-container>
</template>

<script>
export default {
  methods: {
    addToCalendar() {
      const startDate = new Date("2023-04-01T18:00:00"); // Replace with your start date and time
      const endDate = new Date("2023-04-01T22:30:00"); // Replace with your end date and time
      const title = "Keng Hong and Joey | Wedding at OUG Jade Restaurant"; // Replace with your event title
      const description =
        "The love birds are tying the knot! You are invited to witness our special day. RSVP now to make unforgettable memories together."; // Replace with your event description
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

<style lang="scss" scoped>
.flip-clock__slot {
  // font-size: 12px !important;
}
.calendar-wrap {
  // padding: 16px 24px;
  // box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  // border-radius: 8px;
  width: 100%;
  margin: auto;
  max-width: 320px;
}

.date-calendar {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #784704;
  // font-weight: 700;
  gap: 16px;
  font-size: 14px;

  .date-detail {
    min-width: 230px;
  }

  .txt-cn {
    font-size: 22px;
    font-weight: 600;
  }
}

.flip-count-wrap {
  position: relative;
  width: 0px;
  // width: 10px;
}

.flip-countdown {
  // transform: rotate(270deg);
  // position: absolute;
  // width: 300px;
  // top: 0;
  // left: 0;
}

.cal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-items: flex-end;
  position: relative;
  color: #784704;

  .cal-divider {
    padding: 0 32px;
    margin-bottom: 24px;
    width: 50%;
  }

  .cal-year {
    font-size: 32px;
    font-weight: 700;
  }

  .cal-month {
    // transform: rotate(-30deg);
    position: relative;

    font-size: 48px;
    font-weight: 800;
  }
}

.cal-week {
  display: flex;
  border-radius: 24px;
  // background: rgb(199, 160, 156);
  padding: 4px 12px;
  justify-content: space-between;
  margin-top: 8px;
  // background: linear-gradient(91.61deg, #2b6dc7 0%, #043b85 100%);
  background: linear-gradient(91.61deg, #a58664 0%, #784704 100%);
  color: #ffffff;
  // box-shadow: inset 12px 12px 24px rgba(219, 225, 231, 0.25),
  //   inset -24px -24px 43px #bfe0ff;
  // font-size: 14px;
  font-weight: 400;

  div {
    width: 14%;
    // background: purple;
    text-align: center;
    font-size: 12px;
  }
}

.cal-days {
  display: flex;
  flex-wrap: wrap;
  padding: 6px 12px;
  justify-content: space-between;
  margin-bottom: 8px;

  div {
    width: 14%;
    text-align: center;
    padding: 6px 2px;
    // background: purple;
    position: relative;
    font-size: 11px;

    &.not-this-month {
      opacity: 0.3;
    }

    .the-day {
      color: #ffffff;
      z-index: 2;
      // font-size: 50px;
      position: relative;
      font-weight: 800;
      // position: absolute;
      // top: 50%;
      // left: 50%;
      // transform: translate(-50%, -50%);
    }

    .mark-the-day {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 40px;
      color: #f31514;
      z-index: 1;
      animation-name: heartbeat;
      animation-duration: 2s;
      animation-iteration-count: infinite;
    }

    @keyframes heartbeat {
      0% {
        // transform: scale(1) translate(-50%, -50%);
        transform: rotate(0deg) translate(-50%, -50%);
      }
      50% {
        transform: rotate(5deg) translate(-50%, -50%);

        // transform: scale(0.95) translate(-50%, -50%);
      }
      100% {
        transform: rotate(0deg) translate(-50%, -50%);
        // transform: scale(1) translate(-50%, -50%);
      }
    }
  }
}
</style>
