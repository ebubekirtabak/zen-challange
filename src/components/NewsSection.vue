<template>
  <div class="news-section">
    <div class="news-section__header">
      {{ title }}
    </div>
    <b-row>
      <b-col cols="12" sm="6" md="3" v-for="article in articles" v-bind:key="article.id">
        <NewsCard v-bind:article="article" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import NewsCard from '@/components/NewsCard.vue'

export default {
  name: 'NewsSection',
  components: {
    NewsCard
  },
  props: {
    articles: Array,
    title: String
  }
}
</script>


<style lang="scss" scoped>
.news-section {
  &__header {
    text-align: left;
    margin: 15px 0;
    font-size: 18px;
    font-weight: bold;
    padding-bottom: 15px;
    border-bottom: 2px solid orangered;
  }
}
</style>
