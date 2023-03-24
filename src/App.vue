<template>
  <router-view />
</template>

<!-- <script setup>
  //
</script> -->

<script>
export default {
  metaInfo: {
    title: 'Wedding Invitation - Keng Hong & Joey',
    meta: [
      { property: 'og:title', content: 'Wedding Invitation - Keng Hong & Joey' },
      { property: 'og:image', content: `${process.env.BASE_URL}/assets/img/cover-img-01.jpg` },
      { property: 'og:description', content: 'Join us for a night of celebration at our wedding dinner! RSVP on this page to let us know you\'ll be there. We can\'t wait to share this special moment with you and honor our families and heritage!' },
      { property: 'twitter:title', content: 'Wedding Invitation - Keng Hong & Joey' },
      { property: 'twitter:image', content:  `${process.env.BASE_URL}/assets/img/cover-img-01.jpg` },
      { property: 'twitter:description', content: 'Join us for a night of celebration at our wedding dinner! RSVP on this page to let us know you\'ll be there. We can\'t wait to share this special moment with you and honor our families and heritage!' },
    ]
  },
}
</script>
