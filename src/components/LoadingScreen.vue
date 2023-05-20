<template>
  <div class="loading-screen">
    <v-progress-circular
      indeterminate
      size="80"
      color="brown"
    ></v-progress-circular>

    <div>
      <div class="wedding-invitation text-center mt-4">WEDDING INVITATION</div>

      <div class="wedding-date">
        <v-divider :thickness="6" color="#784705"></v-divider>
        <span>2023・12・16</span>
        <v-divider :thickness="6" color="#784705"></v-divider>
      </div>

      <div class="wedding-invitation text-center txt-cn">婚禮邀請函</div>

      <div class="invite-intro-container mt-5">
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
    </div>
  </div>
</template>

<style scoped>
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  /* background-color: #784704; */
  /* background: linear-gradient(rgba(255, 255, 255, 1) 60%, rgba(175, 117, 79, 0.8)); */
  z-index: 9999;

  flex-direction: column;
}
</style>
