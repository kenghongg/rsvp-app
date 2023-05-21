<template>
  <loading-screen v-if="isLoading"></loading-screen>
  <div v-else><router-view /></div>
</template>

<script>
import LoadingScreen from "@/components/LoadingScreen.vue";

export default {
  components: {
    LoadingScreen,
  },
  data() {
    return {
      isLoading: false,
    };
  },
  mounted() {
    this.isLoading = true;
    window.addEventListener("load", () => {
      console.log("loaded");
      this.isLoading = false;
    });
  },
};
</script>
