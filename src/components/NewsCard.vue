<template>
    <div class="news-card" v-bind:class="{ 'big': isBigView } ">
      <div class="news-card__head">
        <img class="news-card__head__image hidden-sm" v-if="!isBigView" v-bind:style="{ 'background-image': `url(${article.urlToImage})` }"/>
        <img class="news-card__head__image visible-sm" v-if="!isBigView" v-bind:src="article.urlToImage"/>
        <img class="news-card__head__image news-card__head__image--big" v-if="isBigView" v-bind:src="article.urlToImage" />
        <div class="news-card__head__title">
          {{ article.title }}
        </div>
      </div>
      <div class="news-card__footer">
        <div class="news-card__footer__description" v-if="isBigView">
          {{ article.content }}
        </div>
        <div class="news-card__footer__description" v-if="!isBigView">
          {{ article.description }}
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'NewsCard',
  props: {
    article: Object,
    isBigView: Boolean
  }
}
</script>


<style lang="scss" scoped>
.news-card {
  margin: 10px 0;
  background-color: #f6f5f3;
  $news-card: &;
  &.big {
    height: 100%;
    #{$news-card} {
      &__head {
        &__title {
          font-size: 17px;
          font-weight: bold;
        }
      }

      &__footer {
        &__description {
          font-size: 14px;
        }
      }
    }
  }

  &__head {
    &__image {
      width: 100%;
      height: 133px;
      background-size: cover;

      &.hidden-sm {
        @include up-small {
          display: inline;
        }

        @include on-small {
          display: none;
        }
      }

      &.visible-sm {
        @include up-small {
          display: none;
          height: auto;
        }

        @include on-small {
          height: auto;
        }
      }


      &--big {
        height: auto;
      }
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
    padding: 10px 10px;

    &__description {
      font-size: 10px;
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      text-align: left;
      height: 60px;
      overflow: hidden;
    }
  }
}
</style>
