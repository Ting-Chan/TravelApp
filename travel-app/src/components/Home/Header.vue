<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont icon-back">&#xe624;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市景点/游玩主题
    </div>
    <div class="header-right" @click="toCityPage">
      {{ this.city }}
      <span class="iconfont icon-arrow">&#xe62d;</span>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "HomeHeader",
  props: {},
  computed: {
    ...mapState(["city"]),
  },
  methods: {
    toCityPage() {
      this.$router.push("/city");
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/style/varibels.styl'
.header
  display flex
  height $headerHeight
  line-height $headerHeight
  background-color $bgColor
  color white
  font-size 0.32rem
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
    min-width 1.04rem
    padding 0 0.1rem
    float right
    text-align center
    .icon-arrow
      margin-left -0.04rem
</style>

