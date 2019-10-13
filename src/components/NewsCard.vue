<template>
    <div class="news-card">
        <div class="news-card__head">
            <img class="news-card__head__image" v-bind:style="{ 'background-image': `url(${article.urlToImage})` }"/>
            <div class="news-card__head__title">
                {{ article.title }}
            </div>
        </div>
        <div class="news-card__footer"></div>
    </div>
</template>

<script>
export default {
  name: 'NewsCard',
  props: {
    article: Object
  }
}
</script>


<style lang="scss" scoped>
.news-card {
    margin: 10px 0;
    background-color: #f6f5f3;

    &__head {
        &__image {
            width: 100%;
            height: 133px;
            background-size: cover;
        }

        &__title {
            margin: 10px 0 10px 10px;
            font-size: 11px;
            font-family: 'Avenir', Helvetica, Arial, sans-serif;
            text-align: left;
            height: 32px;
        }
    }

    &__footer {
        padding: 10px 0;
    }
}
</style>
