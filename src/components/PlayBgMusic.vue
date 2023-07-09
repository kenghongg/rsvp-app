<template>
  <div
    class="deactive-layer"
    v-if="isLayerVisible"
    @touchstart="handleLayerChange"
    @click="handleLayerChange"
  ></div>

  <div v-if="isFirstTimer" @click="handleLayerChange" class="first-timer">
    <!-- <div>Tap anywhere to start</div> -->
    <div>
      <div
        class="wedding-invitation text-center"
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

    <div class="access-btn-container mt-5 pt-5">
      <v-btn
        rounded="pill"
        color="#b0764f"
        append-icon="mdi-chevron-right"
        style="color: white"
        size="large"
        >/ 进入 | PROCEED</v-btn
      >
    </div>

    <!-- <div>
      <div v-if="isAndroid">Android</div>
      <div v-if="isiOS">iOS</div>
    </div> -->
  </div>

  <div class="music-btn-wrap">
    <!-- <v-btn @click="toggleMusic">{{ musicOn ? "Off" : "On" }}</v-btn> -->
    <!-- <v-btn icon="mdi-music" @click="toggleMusic"></v-btn> -->
    <v-btn
      :icon="musicOn ? 'mdi-music' : 'mdi-music-off'"
      @click="toggleMusic"
      :class="{ spin: musicOn }"
      size="small"
      class="music-btn"
    ></v-btn>

    <audio ref="music" :src="musicSrc" preload="auto" loop></audio>
  </div>
</template>

<script>
import music01 from "../assets/music/music-01.mp3";
import music02 from "../assets/music/music-02.mp3";
// import music03 from "../assets/music/music-03.mp3";
import music04 from "../assets/music/music-04.mp3";
import music05 from "../assets/music/music-05.mp3";

export default {
  data() {
    return {
      musicOn: false,
      musicSrc: "",
      isLayerVisible: true,
      musicSources: [music01, music02, music04, music05],
      // musicSources: [music02],
      isFirstTimer: false,
      isAndroid: false,
      isiOS: false,
    };
  },
  created() {
    const lastVisit = localStorage.getItem("lastVisit");
    const currentTime = Date.now();

    if (lastVisit) {
      if (currentTime - lastVisit >= 2 * 60 * 60 * 1000) {
        this.isFirstTimer = true;
        document.body.style.overflow = "hidden";
      }
    } else {
      this.isFirstTimer = true;
      document.body.style.overflow = "hidden";
      localStorage.setItem("lastVisit", currentTime);
    }
  },
  methods: {
    playRandomMusic() {
      const randomIndex = Math.floor(Math.random() * this.musicSources.length);
      this.musicSrc = this.musicSources[randomIndex];
    },
    toggleMusic() {
      this.musicOn = !this.musicOn;
      if (this.musicOn) {
        this.$refs.music.play();
      } else {
        this.$refs.music.pause();
      }
    },
    handleVisibilityChange() {
      if (document.hidden) {
        this.$refs.music.pause();
      } else {
        if (this.musicOn) {
          this.$refs.music.play();
        }
      }
    },
    handleLayerChange() {
      this.isLayerVisible = false;
      this.musicOn = true;
      // this.musicOn = false;
      this.$refs.music.play();
      this.isFirstTimer = false;
      document.body.style.overflow = "auto";
    },
    // scrollToBottom() {
    //   // Set the scroll position to the bottom of the page
    //   window.scroll(0,0);

    //   // console.log(document.body.scrollHeight);

    //   // Slowly scroll the page to the top
    //   let scrollInterval = setInterval(() => {
    //     window.scrollBy(0, 5);

    //     // Stop scrolling when the bottom of the page is reached
    //     if (
    //       window.innerHeight + window.pageYOffset >=
    //       document.body.offsetHeight
    //     ) {
    //       clearInterval(scrollInterval);
    //     }
    //   }, 10);
    // },
  },
  mounted() {
    this.playRandomMusic();

    // Pause music when the user switches to another tab
    document.addEventListener("visibilitychange", this.handleVisibilityChange);
    // this.musicOn = true;
    // this.$refs.music.play();
    // Play music if the user interacts with the document
    // document.addEventListener("click", () => {
    //   if (!this.musicOn) {
    //     this.musicOn = true;
    //     this.$refs.music.play();
    //   }
    // });

    // Scroll the page to the bottom on load
    // this.scrollToBottom();

    const userAgent = navigator.userAgent.toLowerCase();

    if (/android/.test(userAgent)) {
      this.isAndroid = true;
    } else if (/iphone|ipad|ipod/.test(userAgent)) {
      this.isiOS = true;
      this.isFirstTimer = false;
      document.body.style.overflow = "auto";
    } else {
      this.isFirstTimer = false;
      document.body.style.overflow = "auto";
    }
  },
  beforeUnmount() {
    // Remove event listener when component is unmounted
    document.removeEventListener(
      "visibilitychange",
      this.handleVisibilityChange
    );
  },
};
</script>

<style lang="scss">
.music-btn-wrap {
  position: fixed;
  top: 16px;
  right: 16px;
  z-index: 998;
  .music-btn {
    background: rgba(95, 2, 2, 0.3);
    backdrop-filter: blur(12px);
    color: #ffffff;
  }
}

.deactive-layer {
  background: salmon;
  opacity: 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 998;
}

.first-timer {
  /* background: teal; */
  /* background:linear-gradient(#cd9473, #461e07); */
  background: rgba(255, 255, 255, 0.3);
  /* background: linear-gradient(rgba(205, 148, 115, 0.3), rgba(70, 30, 7, 0.2)); */
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  /* background: #ffffff; */
  opacity: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1002;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.spin {
  animation-name: spin;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
