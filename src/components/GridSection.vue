<template>
  <div class="news-section">
    <b-row>
      <b-col cols="12" md="6" >
        <NewsCard v-bind:article="highlight" v-bind:isBigView="true"/>
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
    articles: Array,
    highlight: Object
  }
}
</script>


<style lang="scss" scoped>

</style>
