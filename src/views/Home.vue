<template>
  <div class="home">
    <b-container>
      <Carousel/>
      <NewsSection v-bind:articles="articles"/>
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
    axios
    .get(this.url)
    .then(response => (this.articles = response.data.articles))
    .catch(error => this.error = error)
  },
  data() {
    return {
      url: process.env.VUE_APP_NEWS_API_URL,
      error: '',
      articles: []
    }
  }
}
</script>
