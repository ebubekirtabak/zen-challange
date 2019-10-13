<template>
    <div class="news-section">
        <b-row>
            <b-col cols="3" md="3">
                <NewsCard />
            </b-col>
            <b-col cols="3" md="3">
                <NewsCard />
            </b-col>
            <b-col cols="3" md="3">
                <NewsCard />
            </b-col>
            <b-col cols="3" md="3">
                <NewsCard />
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
    msg: String
  }
}
</script>


<style lang="scss" scoped>
.news-section {

}
</style>
