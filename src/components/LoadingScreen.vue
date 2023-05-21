<template>
  <div class="loading-screen">
    <v-progress-circular
      indeterminate
      size="80"
      color="brown"
    ></v-progress-circular>
    <div>
      <div
        class="wedding-invitation text-center mt-4"
        style="
          font-size: 1.4rem;
          color: #784705;
          text-align: center;
          font-weight: 400;
        "
      >
        WEDDING INVITATION
      </div>

      <div
        class="wedding-date"
        style="
          font-size: 1rem;
          color: #784705;
          text-align: center;
          font-weight: 900;
          display: flex;
          align-items: center;
        "
      >
        <v-divider :thickness="6" color="#784705"></v-divider>
        <span style="width: 100%; white-space: nowrap; margin: 8px 8px"
          >2023・12・16</span
        >
        <v-divider :thickness="6" color="#784705"></v-divider>
      </div>

      <div
        class="wedding-invitation text-center txt-cn"
        style="
          font-size: 1.4rem;
          color: #784705;
          text-align: center;
          font-weight: 400;
        "
      >
        婚禮邀請函
      </div>

      <div
        class="invite-intro-container mt-5"
        style="
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 24px;

          max-width: 400px;
          margin: auto;
        "
      >
        <div
          class="invite-intro-content"
          style="
            line-height: 100%;
            font-weight: 300;
            font-size: 12px;
            color: #784705;
          "
        >
          Keng Hong
          <span
            class="txt-cn"
            style="
              font-size: 24px;
              /* padding-left: 12px; */
              display: block;
              padding-top: 10px;
              font-style: normal;
              font-weight: 400;
            "
            >景航</span
          >
          <div class="invite-intro-details">
            <!-- <div class="txt-cn">新浪：呵呵呵</div> -->
          </div>
        </div>
        <div
          class="invite-intro-content"
          style="
            line-height: 100%;
            font-weight: 300;
            font-size: 12px;
            color: #784705;
          "
        >
          <span
            class="amp"
            style="font-size: 36px; line-height: 100%; font-weight: 200"
            >&amp;</span
          >
        </div>
        <div
          class="invite-intro-content"
          style="
            line-height: 100%;
            font-weight: 300;
            font-size: 12px;
            color: #784705;
          "
        >
          Joey
          <span
            class="txt-cn"
            style="
              font-size: 24px;
              display: block;
              padding-top: 10px;
              font-style: normal;
              font-weight: 400;
            "
            >祖儿</span
          >
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
