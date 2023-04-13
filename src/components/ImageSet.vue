<template>
  <v-container>
    <div class="wedding-top-container">
      <img src="../assets/img/wedding-top3.png" />
    </div>

    <!-- <div class="wedding-top-img">
      <div class="wedding-top-quotes">
        <span
          >I want to spend the rest of the life <br />trying to make your
          happy</span
        >
      </div>
    </div> -->
  </v-container>
</template>

<script setup>
//
</script>

<style lang="scss">
.wedding-top-img {
  background: salmon;
  /* padding: 12px; */

  span {
    font-style: italic;
    font-size: 10px;
    line-height: 100%;
  }
}

.wedding-top-container {
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  margin-bottom: -80px;
  margin-top: -32px;
  /* margin-top: -48px; */

  img {
    width: 100%;
    max-width: 400px;
    display: block;
    text-align: center;
    // max-width: 420px;
    margin: auto;
  }
}
</style>
