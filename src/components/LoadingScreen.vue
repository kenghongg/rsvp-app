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
