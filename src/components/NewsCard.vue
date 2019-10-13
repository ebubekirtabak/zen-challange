<template>
    <div class="news-card">
        <div class="news-card__head">
            <img class="news-card__head__image" src="https://4.bp.blogspot.com/-TBYj-oM-Stk/WyRR5b6JerI/AAAAAAAAojQ/yhKWgTVQFQQHuHbkS3MPmWde8yrItooygCLcBGAs/s1600/playerunknowns-battlegrounds-kasma-sorunu-troubleshooter01blogspot.jpg"/>
            <div class="news-card__head__title">
                League of Legends: Riot Point
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'NewsCard',
  props: {
    msg: String
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
            height: auto;
        }

        &__title {
            margin: 10px 0;
            font-size: 13px;
            font-family: 'Avenir', Helvetica, Arial, sans-serif;
            text-align: left;
        }
    }

    &__footer {
        
    }
}
</style>
