<template>
    <div class="news-section">
        <b-row>
            <b-col cols="3" md="3" v-for="article in articles" v-bind:key="article.id">
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
    articles: Array
  }
}
</script>


<style lang="scss" scoped>
.news-section {

}
</style>
