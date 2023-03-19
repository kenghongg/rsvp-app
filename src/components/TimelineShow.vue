<template>
  <v-container>
    <div class="timeline-route">
      <div class="timeline-content">
        <div class="content-img">
          <img src="../assets/img/wedding-guest3.png" alt="" />
        </div>
        <div class="content-time">6:00pm</div>
        <div class="content-details">
          <div class="txt-cn">賓客簽到</div>
          <div>Guest Arrival</div>
        </div>
      </div>
      <div class="timeline-content">
        <div class="content-img">
          <img src="../assets/img/wedding-ceremony.png" alt="" />
        </div>
        <div class="content-time">7:00pm</div>
        <div class="content-details">
          <div class="txt-cn">婚禮儀式</div>
          <div>Ceremony</div>
        </div>
      </div>
      <div class="timeline-content">
        <div class="content-img">
          <img src="../assets/img/wedding-dinner.png" alt="" />
        </div>
        <div class="content-time">7:15pm</div>
        <div class="content-details">
          <div class="txt-cn">婚禮晚宴</div>
          <div>Dinner</div>
        </div>
      </div>
      <div class="timeline-content">
        <div class="content-img">
          <img src="../assets/img/wedding-photography.png" alt="" />
        </div>
        <div class="content-time">9:00pm</div>
        <div class="content-details">
          <div class="txt-cn">賓客合影</div>
          <div>Photo Session</div>
        </div>
      </div>
      <div class="img-route">
        <img src="../assets/img/timeline-route.png" alt="" />
      </div>
    </div>
  </v-container>
</template>

<script></script>

<style lang="scss">
.timeline-route {
  width: 100%;
  max-width: 400px;
  margin: auto;
  position: relative;
  padding-top: 30px;
  color: #2d2d2d;
  height:440px;

  .img-route {
    width: 100%;
    max-width: 280px;
    margin: auto;
    display: block;

    img {
      margin-left: 40px;
      width: 100%;
      display: block;
    }
  }
}

.timeline-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 120px;
  position: absolute;
  background: #ffffff;


  // background: salmon;
  padding: 8px;

  &:first-child {
    top: 0;
    left: 10px;
  }

  &:nth-child(2) {
    top: 70px;
    right: 0px;
  }

  &:nth-child(3) {
    bottom: 40px;
    left: -20px;
  }

  &:nth-child(4) {
    bottom: -20px;
    right: 0;
  }

  .content-img {
    width: 70px;
    margin: auto;
    img {
      display: block;
      width: 100%;
    }
  }

  .content-time {
    // font-size: 16px;
    margin-top: 8px;
  }

  .content-details {
    font-size: 12px;
    .txt-cn {
      font-size: 18px;
      font-weight: 600;
    }
  }
}
</style>
