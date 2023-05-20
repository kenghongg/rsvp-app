<template class="header-start">
  <v-container>
    <!-- <div class="d-flex w-100">
      <div class="top-text text-center">2023 . 12 . 16</div>
      <div class="mx-auto">
        <v-img
          class="letter-xi"
          :width="'100%'"
          src="../assets/img/letter-xi.png"
        ></v-img>
        <div class="wedding-invitation">Wedding Invitation</div>
        <div></div>
      </div>
      <div class="top-text text-right">12 / 16</div>
    </div> -->

    <div class="wedding-invitation text-center">WEDDING INVITATION</div>

    <div class="wedding-date">
      <v-divider :thickness="6" color="#784705"></v-divider>
      <span>2023・12・16</span>
      <v-divider :thickness="6" color="#784705"></v-divider>
    </div>

    <div class="wedding-invitation text-center txt-cn">婚禮邀請函</div>

    <!-- <v-img
      class="letter-quote-invitation"
      :width="'100%'"
      src="../assets/img/letter-quote-invitation.png"
    >
    </v-img> -->

    <!-- <div class="couple-names">
      <div>
        <span class="txt-cn">何景航</span><span class="eng-name">KH</span>
      </div>
      <span class="txt-cn amp">&</span>
      <div>
        <span class="txt-cn">黄祖儿</span><span class="eng-name">JN</span>
      </div>
    </div> -->
  </v-container>

  <!-- <div class="venue-details mt-4 txt-cn text-center">
    席设：华联斐翠酒家
  </div> -->
</template>

<script setup>
//
</script>

<style lang="scss">
// .header-start {
//   font-family: "Noto Serif TC", serif;
// }

.letter-xi {
  position: relative;
  max-width: 100px;
  margin: auto;
}

.wedding-invitation {
  font-size: 1.4rem;
  color: #784705;
  text-align: center;
  // margin-top: 8px;
  font-weight: 400;
}

.wedding-date {
  font-size: 1rem;
  color: #784705;
  text-align: center;
  font-weight: 900;
  display: flex;
  align-items: center;

  span {
    width: 100%;
    white-space: nowrap;
    margin: 8px 8px;
  }
}

.letter-quote-invitation {
  position: relative;
  max-width: 300px;
  margin: 16px auto 0;
}

.top-text {
  font-size: 1rem;
  // font-weight: 600;
  color: #2f2f2f;
  // width: 50px;
}

.couple-names {
  font-size: 1.4rem;
  text-align: center;
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 16px;
  line-height: 100%;
  justify-content: center;
  margin-top: 16px;
  // margin-bottom: 16px;

  .eng-name {
    font-size: 1rem;
    display: block;
    margin-top: 4px;
  }

  .amp {
    font-size: 1rem;
  }
}
</style>
