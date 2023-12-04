<template>
  <PlayBgMusic />
  <HeaderStart />
  <ImageSet />
  <InviteIntro />
  <ContentIntro />
  <ContentPreWed />
  <CoupleDetails />
  <CalendarShow />
  <MapAnimation />

  <!-- <RsvpForm /> -->
  <!-- <BottomNavigation /> -->
</template>

<script>
// import BottomNavigation from "@/components/BottomNavigation.vue";
import ContentPreWed from "@/components/ContentPreWed.vue";
import InviteIntro from "@/components/InviteIntro.vue";
import ContentIntro from "@/components/ContentIntro.vue";
import ImageSet from "@/components/ImageSet.vue";
// import RsvpForm from "@/components/RsvpForm.vue";
import PlayBgMusic from "@/components/PlayBgMusic.vue";
import MapAnimation from "@/components/MapAnimation.vue";
import CalendarShow from "@/components/CalendarShow.vue";
import HeaderStart from "@/components/HeaderStart.vue";
import CoupleDetails from "@/components/CoupleDetails.vue";


export default {
  components: {
    // BottomNavigation,
    ContentPreWed,
    InviteIntro,
    ContentIntro,
    ImageSet,
    // RsvpForm,
    PlayBgMusic,
    MapAnimation,
    CalendarShow,
    HeaderStart,
    CoupleDetails,
  },
};
</script>
