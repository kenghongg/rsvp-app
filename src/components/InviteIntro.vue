<template>
  <v-container>
    <div class="invite-intro-container">
      <div class="invite-intro-content">
        Keng Hong
        <span class="txt-cn">景航</span>
        <div class="invite-intro-details">
          <!-- <div class="txt-cn">新浪：呵呵呵</div> -->
        </div>
      </div>
      <div class="invite-intro-content"><span class="amp">&amp;</span></div>
      <div class="invite-intro-content">
        Joey
        <span class="txt-cn">祖儿</span>
        <div class="invite-intro-details"></div>
      </div>
    </div>
    <div class="invite-intro-container">
      <div class="invite-txt mt-3 text-center">
        <div class="txt-cn mb-2">
          我们将携双方父母真诚地邀请重要的亲人朋友 <br />到我们的婚禮慶典上
          一起见证和分享喜悅
        </div>
        Together with our families, we joyfully invite you to join our wedding
      </div>
    </div>
    <div class="invite-intro-bottom-img">
      <div><img src="../assets/img/wedding-img-bg.png" alt="" /></div>
    </div>
  </v-container>
</template>

<style lang="scss">
.invite-intro-bottom-img {
  display: flex;
  justify-content: flex-end;
  /* margin-top: -20px; */
  margin-bottom: -120px;
  width: 100%;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
}

.invite-intro-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;

  max-width: 400px;
  margin: auto;
}

.invite-txt {
  /* font-weight: 200; */
  padding-top: 20px;
  letter-spacing: 1px;
  font-size: 14px;
  font-style: italic;
  color: #784705;
}

.invite-intro-content {
  /* text-align: center; */
  /* align-items: center; */
  line-height: 100%;
  font-weight: 300;
  /* font-style: italic; */
  font-size: 12px;
  color: #784705;
  /* width: 50%; */

  &:first-child {
    text-align: right;
  }

  &:last-child {
    text-align: left;
  }

  .txt-cn {
    font-size: 24px;
    /* padding-left: 12px; */
    display: block;
    padding-top: 10px;
    font-style: normal;
    font-weight: 400;
  }

  .amp {
    font-size: 36px;
    line-height: 100%;
    font-weight: 200;
  }
}

.invite-intro-contact {
  margin-top: 16px;
}

.invite-intro-img {
  img {
    display: block;
    width: 100%;
  }
}
</style>
