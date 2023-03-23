<template>
  <v-container>
    <div class="couple-container">
      <div class="couple-content">
        <div class="couple-img">
          <img
            src="../assets/img/wedding-top.png"
            style="background: #2d2d2d; border-radius: 50%"
          />
        </div>
        <div class="couple-details">
          <!-- <div class="txt-cn">新浪：呵呵呵</div> -->
        </div>
        <div class="couple-contact">
          <v-btn
            rounded="pill"
            color="#24d366"
            prepend-icon="mdi-whatsapp"
            style="color: white"
            href="https://wa.me/6582275922"
            target="_blank"
            size="small"
            >Keng Hong</v-btn
          >
        </div>
      </div>
      <div class="couple-content">
        <div class="couple-img">
          <img
            src="../assets/img/wedding-top.png"
            style="background: #2d2d2d; border-radius: 50%"
          />
        </div>
        <div class="couple-details"></div>
        <div class="couple-contact">
          <v-btn
            rounded="pill"
            color="#24d366"
            prepend-icon="mdi-whatsapp"
            style="color: white"
            href="https://wa.me/6582275922"
            target="_blank"
            size="small"
            >Joey</v-btn
          >
        </div>
      </div>
    </div>
  </v-container>
</template>

<style lang="scss">
.couple-container {
  display: flex;
  justify-content: center;
  gap: 24px;
}

.couple-contact {
  margin-top: 16px;
}

.couple-img {
  img {
    display: block;
    width: 100%;
  }
}
</style>
