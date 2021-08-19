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
      城市
      <span class="iconfont">&#xe62d;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeHeader",
};
</script>

<style lang="stylus" scoped>
.header
  display flex
  height 0.86rem
  line-height 0.86rem
  background-color #00bcd4
  color white
.header-left
  width 0.64rem
.header-input
  flex 1
  margin-top 0.12rem
  height 0.64rem
  line-height 0.64rem
  background-color white
  border-width 0px
  border-radius 0.1rem
.header-right
  width 1.24rem
  float right
  text-align center
</style>

