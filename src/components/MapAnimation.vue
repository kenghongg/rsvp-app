<template>
  <v-container class="restaurant-info-container">
    <div class="restaurant-info-bg">
      <div
        class="restaurant-img-bg"
        :width="'100%'"
        aspect-ratio="16/9"
        cover
      ></div>
      <div class="text-center mt-5 mb-2 d-flex align-center w-100">
        <div class="restaurant-name">
          <div class="txt-cn font-weight-bold text-h5">華聯斐翠酒家</div>
          <div class="font-weight-bold">OUG Jade Restaurant</div>
        </div>
      </div>

      <p class="text-center para-address">
        2nd Floor The Market Place,
        <br />2, Jalan Hujan Rahmat, Taman Overseas Union, <br />58200 Kuala
        Lumpur, Malaysia
      </p>
    </div>
    <!-- <div class="nav-btn-container">
      <div class="nav-btn">
        <a href="https://www.waze.com/live-map/directions/my/wilayah-persekutuan-kuala-lumpur/kuala-lumpur/oug-jade-restaurant?to=place.ChIJ-bneHlhKzDERDNbrsWJ-gdI" target="_blank"><img :src="appBtnWazeSrc" alt="" /></a>
        <span>Waze</span>
      </div>
      <div class="nav-btn">
        <a href="https://www.google.com/maps/dir//google+maps+to+oug+jade/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x31cc4a581edeb9f9:0xd2817e62b1ebd60c?sa=X&ved=2ahUKEwidmrS3lvH9AhU0T2wGHaAwBqAQ9Rd6BAgyEAU" target="_blank"><img :src="appBtnGMapSrc" alt="" /></a>
        <span>Google Maps</span>
      </div>
    </div> -->

    <div class="mt-5 pt-5">
      <div class="intro-container">
        <div class="intro-txt">
          <span class="txt-cn">好久不見， 婚禮見</span>
          <div class="intro-sub-txt">
            /&nbsp;&nbsp; Bless us with your presence &nbsp;&nbsp;/
          </div>
          <!-- <div class="intro-sub-txt">
          /&nbsp;&nbsp; A journey to forever begins with a single step, let's
          take it together. &nbsp;&nbsp;/
        </div> -->
          <div class="intro-rounded-icon">
            <v-icon>mdi-circle</v-icon>
          </div>
        </div>
      </div>
    </div>

    <div class="map-action" max-width="sm">
      <v-divider :thickness="6" color="#784705"></v-divider>

      <div style="text-align: center">
        <v-btn
          @click="openGoogleMaps"
          variant="flat"
          color="#efeae6"
          :style="{ color: '#784704', marginBottom: '4px' }"
          size="large"
          icon
        >
          <v-icon>mdi-google-maps</v-icon>
        </v-btn>
        <span>Google&nbsp;Maps</span>
      </div>

      <div style="text-align: center">
        <v-btn
          @click="openWaze"
          variant="flat"
          color="#efeae6"
          :style="{ color: '#784704', marginBottom: '4px' }"
          size="large"
          icon
        >
          <v-icon>mdi-waze</v-icon>
        </v-btn>
        <span>Waze</span>
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
  methods: {
    openWaze() {
      // Create the custom URL scheme for the Waze app
      const url = `https://www.waze.com/ul?place=ChIJ-bneHlhKzDERDNbrsWJ-gdI&ll=3.07394490%2C101.67284230&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location`;

      // Open the URL in a new window or tab
      window.open(url, "_blank");
    },
    openGoogleMaps() {
      // Create the custom URL scheme for the Waze app
      const url = `https://goo.gl/maps/eoRoRv1nTjcdKkKQ7`;

      // Open the URL in a new window or tab
      window.open(url, "_blank");
    },
  },
};
</script>

<style lang="scss">
.restaurant-img {
  display: block;
  width: 100%;
}

.restaurant-img-bg {
  margin-top: 20px;
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
  margin-left: auto;
  margin-right: auto;
  max-width: 400px;
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

.restaurant-info-bg {
  background: linear-gradient(
    180deg,
    rgba(120, 231, 255, 0) 80%,
    rgba(120, 71, 5, 0.2) 101.77%
  );

  padding-top: 16px;
  max-width: 400px;
  margin: auto;
  padding-bottom: 16px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
}

.restaurant-info-container {
  background: #ffffff;
  border-radius: 16px;
  padding-top: 0;
}

.restaurant-logo {
  margin-bottom: 12px;
  margin-top: -60px;

  img {
    display: block;
    width: 100%;
    max-width: 100px;
    margin: auto;
  }
}

.restaurant-name {
  width: 100%;
  flex-shrink: 1;
  min-width: 230px;
  // color: #784705;
  color: #215220;
}

.restaurant-divider {
  // padding: 0 32px;
  // margin-bottom: 24px;
  width: 100%;
  flex-shrink: 1;
}

.para-address {
  font-size: 0.8rem;
  color: #2d2d2d;
}

.wed-car {
  width: 110px;
  position: absolute;
  right: calc(50% - 240px);
  bottom: -30px;
}

.map-action {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #784704;
  // font-weight: 700;
  gap: 16px;
  font-size: 14px;
  margin-top: 24px;

  .action-detail {
    min-width: 160px;
  }
}

.nav-btn-container {
  position: relative;
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
      width: 56px;
      display: flex;

      box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),
        0 1px 3px 1px rgba(60, 64, 67, 0.15);
      border-radius: 22%;
    }

    span {
      margin-top: 4px;
      font-size: 0.7rem;
    }
  }

  img {
    display: block;
    width: 100%;
  }
}
</style>
