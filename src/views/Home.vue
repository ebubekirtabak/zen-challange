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
import ApiService from '@/services/api.service'

export default {
  name: 'home',
  components: {
    Carousel,
    NewsSection,
    WhatsAppInfo,
    GridSection
  },
  mounted() {
    ApiService.getAllNewsByJson(this.url)
    .then(response => {
      this.articles = response[0] && response[0].data.articles || []
      this.moneynewsArticles = response[1] && response[1].data.articles || []
      this.gridSectionArticles = response[2] && response[2].data.articles ||  []
      this.highligthArticle = this.gridSectionArticles[0]
      this.gridSectionArticles = this.gridSectionArticles.slice(1, this.gridSectionArticles.length)
    })
    .catch(error => this.error = error)
  },
  data() {
    return {
      url: process.env.VUE_APP_NEWS_API_URL,
      error: '',
      articles: [],
      moneynewsArticles: [],
      gridSectionArticles: [],
      highligthArticle: {}
    }
  }
}
</script>
