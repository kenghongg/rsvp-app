<template>
  <div
    class="restaurant-img-bg"
    :width="'100%'"
    aspect-ratio="16/9"
    cover
  ></div>

  <v-container class="restaurant-info-container">
    <p class="text-center">
      2nd Floor The Market Place,
      <br />2, Jalan Hujan Rahmat, Taman Overseas Union, <br />58200 Kuala
      Lumpur, Malaysia
    </p>

    <div class="nav-btn-container">
      <div class="nav-btn">
        <a href="#"><img :src="appBtnWazeSrc" alt="" /></a>
        <span>Waze</span>
      </div>
      <div class="nav-btn">
        <a href="#"><img :src="appBtnGMapSrc" alt="" /></a>
        <span>Google Maps</span>
      </div>
    </div>
  </v-container>

  <!-- <div>
    <v-btn href="https://www.waze.com/ul?ll={{latitude}},{{longitude}}">
      <v-icon left>mdi-map-marker</v-icon>
      Open in Waze
    </v-btn>
    <v-btn href="https://www.google.com/maps?q={{latitude}},{{longitude}}">
      <v-icon left>mdi-map-marker</v-icon>
      Open in Google Maps
    </v-btn>
    <v-btn href="http://maps.apple.com/?ll={{latitude}},{{longitude}}">
      <v-icon left>mdi-map-marker</v-icon>
      Open in Apple Maps
    </v-btn>
  </div> -->
</template>

<script>
import restaurantMap from "../assets/img/restaurantMap.gif";
import appBtnWaze from "../assets/img/app-btn-waze.png";
import appBtnGMap from "../assets/img/app-btn-gmap.png";

export default {
  data() {
    return {
      restaurantMapSrc: restaurantMap,
      appBtnWazeSrc: appBtnWaze,
      appBtnGMapSrc: appBtnGMap,
    };
  },
};
</script>

<style lang="scss">
.restaurant-img {
  display: block;
  width: 100%;
}

.restaurant-img-bg {
  margin-top:40px;
  width: 100%;
  height: 300px;
  background: url("../assets/img/restaurantMap.gif") center center;
  background-size: 120%;
  // background-attachment: fixed;
  transition: 0.3s all;

  animation: animatedBackground 20s ease-out infinite;
}

@keyframes animatedBackground {
  0% {
    background-position: right center;
  }
  50% {
    background-position: left center;
  }
  100% {
    background-position: right center;
  }
}

.restaurant-info-container {
  // background: salmon;
  // box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  // margin-top: -24px;
  background: #ffffff;
  border-radius: 16px;
  // margin-top: -40px;
}

.nav-btn-container {
  display: flex;
  justify-content: center;
  margin-top: 24px;
  gap: 24px;
  // margin-bottom: 40px;

  .nav-btn {
    display: flex;
    flex-direction: column;
    align-items: center;

    a {
      width: 72px;
      display: flex;
      box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),
        0 1px 3px 1px rgba(60, 64, 67, 0.15);
      border-radius: 22%;
    }
    span {
      margin-top: 4px;
      font-size: 80%;
    }
  }

  img {
    display: block;
    width: 100%;
  }
}
</style>
