<template>
  <loading-screen v-if="isLoading"></loading-screen>
  <router-view />
</template>

<script>
import LoadingScreen from "@/components/LoadingScreen.vue";

export default {
  components: {
    LoadingScreen,
  },
  data() {
    return {
      isLoading: true,
    };
  },
  mounted() {
    window.addEventListener("load", () => {
      setTimeout(() => {
        this.isLoading = false;
        console.log("loaded");
      }, 2000);
    });
  },
};
</script>
