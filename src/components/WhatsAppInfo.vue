<template>
    <b-row align-v="center">
        <b-col>
            <div class="whatsapp-info">
                <img class="whatsapp-info__logo" src="../assets/img/whatsapp.png" />
                <span> +90 (216) 916 34 23</span>
            </div>
        </b-col>
    </b-row>
</template>

<script>
export default {
  name: 'WhatsAppInfo',
  props: {
    msg: String
  }
}
</script>

<style lang="scss" scoped>
.whatsapp-info {
    border-top: 1px solid #aba8a8;
    border-bottom: 1px solid #aba8a8;
    padding: 10px 0;
    margin: 20px 0;
    &__logo {
        width: 32px;
    }
}
</style>
