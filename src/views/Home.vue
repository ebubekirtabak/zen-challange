<template>
  <div class="home">
    <b-container>
      <Carousel/>
      <NewsSection/>
      <WhatsAppInfo/>
    </b-container>
    {{ url }}
  </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue'
import NewsSection from "@/components/NewsSection.vue"
import WhatsAppInfo from '@/components/WhatsAppInfo.vue'

export default {
  name: 'home',
  components: {
    Carousel,
    NewsSection,
    WhatsAppInfo
  },
  mounted() {
  },
  data() {
    return {
      url: process.env.NEWS_API_URL
    }
  }
}
</script>
