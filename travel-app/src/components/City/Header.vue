<template>
  <div class="header">
    <span class="iconfont icon-back" @click="backToHome">&#xe624;</span>
    城市选择
  </div>
</template>

<script>
export default {
  name: "CityHeader",
  methods: {
    backToHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/style/varibels.styl'
.header
  position relative
  overflow hidden
  height $headerHeight
  line-height $headerHeight
  text-align center
  color #fff
  background-color $bgColor
  .icon-back
    position absolute
    top 0
    left 0
    width 0.64rem
</style>