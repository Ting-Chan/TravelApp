<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont icon-back">&#xe624;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市景点/游玩主题
    </div>
    <div class="header-right">
      {{ this.city }}
      <span class="iconfont icon-arrow">&#xe62d;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeHeader",
  props: {
    city: String,
  },
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/style/varibels.styl'
.header
  display flex
  height 0.86rem
  line-height 0.86rem
  background-color $bgColor
  color white
  .header-left
    width 0.64rem
    text-align center
    font-size 0.4rem
  .header-input
    flex 1
    margin-top 0.12rem
    margin-left 0.2rem
    padding-left 0.2rem
    height 0.64rem
    line-height 0.64rem
    background-color white
    border-width 0px
    border-radius 0.1rem
    color #ccc
  .header-right
    width 1.24rem
    float right
    text-align center
    .icon-arrow
      margin-left -0.04rem
</style>

