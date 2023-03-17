<template>
  <v-container>
    <div class="calendar-wrap">
      <div class="cal-header">
        <div class="cal-month">December</div>
        <div class="cal-year">2023</div>
      </div>
      <div class="cal-week">
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
        <div>Sun</div>
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

      <vue3-flip-countdown
    deadline="2023-12-16 19:00:00"
    mainFlipBackgroundColor="#043b85"
    secondFlipBackgroundColor="#1c58ab"
    mainColor="#ffffff"
    secondFlipColor="#ffffff"
    labelSize="12px"
    labelColor="#888888"
  ></vue3-flip-countdown>
    </div>
  </v-container>
  

 
</template>

<style lang="scss" scoped>
.flip-clock__slot {
  // font-size: 12px !important;
}
.calendar-wrap {
  padding: 16px 24px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 8px;
  width: 100%;
  margin: auto;
  max-width: 600px;
}

.cal-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  position: relative;

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
  padding: 6px 12px;
  justify-content: space-between;
  margin-top: 8px;
  background: linear-gradient(91.61deg, #2b6dc7 0%, #043b85 100%);
  color: #ffffff;
  // box-shadow: inset 12px 12px 24px rgba(219, 225, 231, 0.25),
  //   inset -24px -24px 43px #bfe0ff;
  // font-size: 14px;
  font-weight: 400;

  div {
    width: 14%;
    // background: purple;
    text-align: center;
  }
}

.cal-days {
  display: flex;
  flex-wrap: wrap;
  padding: 6px 12px;
  justify-content: space-between;
  margin-bottom:8px;

  div {
    width: 14%;
    text-align: center;
    padding: 6px 2px;
    // background: purple;
    position: relative;
    font-size: 14px;

    &.not-this-month {
      opacity: 0.3;
    }

    .the-day {
      color: #ffffff;
      z-index: 2;
      // font-size: 50px;
      position: relative;
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
