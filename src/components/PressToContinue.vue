<template>
  <div
    v-if="showPressToContinue"
    class="press-to-continue"
    @click="handlePressToContinue"
  >
    Press anywhere to continue
  </div>
</template>

<script>
export default {
  data() {
    return {
      showPressToContinue: false,
    };
  },
  mounted() {
    const visitedBefore = localStorage.getItem("visitedBefore");
    if (!visitedBefore) {
      this.showPressToContinue = true;
      localStorage.setItem("visitedBefore", true);
      setTimeout(() => {
        localStorage.removeItem("visitedBefore");
        this.showPressToContinue = false;
      }, 2 * 60 * 60 * 1000); // 2 hours in milliseconds
    }
  },
  methods: {
    handlePressToContinue() {
      this.showPressToContinue = false;
    },
  },
};
</script>

<style scoped>
.press-to-continue {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  font-size: 24px;
  z-index: 9999;
  cursor: pointer;
}
</style>
