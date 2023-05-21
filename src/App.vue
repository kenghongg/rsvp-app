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
      }, 20000);
    });
  },
};
</script>
