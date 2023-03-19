<template>
  <div
    class="deactive-layer"
    v-if="isLayerVisible"
    @touchstart="handleLayerChange"
    @click="handleLayerChange"
  ></div>
  <div class="music-btn-wrap">
    <!-- <v-btn @click="toggleMusic">{{ musicOn ? "Off" : "On" }}</v-btn> -->
    <!-- <v-btn icon="mdi-music" @click="toggleMusic"></v-btn> -->
    <v-btn
      :icon="musicOn ? 'mdi-music-note' : 'mdi-music-note-off'"
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

export default {
  data() {
    return {
      musicOn: false,
      musicSrc: music02,
      isLayerVisible: true,
    };
  },
  methods: {
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
    // Pause music when the user switches to another tab
    document.addEventListener("visibilitychange", this.handleVisibilityChange);
    // this.musicOn = true;
    this.$refs.music.play();
    // Play music if the user interacts with the document
    // document.addEventListener("click", () => {
    //   if (!this.musicOn) {
    //     this.musicOn = true;
    //     this.$refs.music.play();
    //   }
    // });

    // Scroll the page to the bottom on load
    // this.scrollToBottom();
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
  .music-btn {
    // background: salmon;
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
