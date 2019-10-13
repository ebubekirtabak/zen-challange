<template>
  <div class="news-section">
    <b-row>
      <b-col cols="12" md="6" >
        <NewsCard v-if="highlightNews != null" v-bind:article="highlightNews" />
      </b-col>
      <b-col cols="12" md="6">
        <b-row>
          <b-col cols="12" md="6" v-for="article in articles" v-bind:key="article.id">
            <NewsCard v-bind:article="article" />
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import NewsCard from '@/components/NewsCard.vue'

export default {
  name: 'GridSection',
  data() {
    return {
      highlightNews: null
    }
  },
  components: {
    NewsCard
  },
  props: {
    articles: Array
  },
  mounted() {
    this.highlightNews = this.articles[0]
    this.articles = this.articles.slice(1, this.articles.length)
  }
}
</script>


<style lang="scss" scoped>

</style>
