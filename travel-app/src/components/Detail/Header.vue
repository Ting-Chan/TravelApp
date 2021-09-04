<template>
  <div>
    <div class="header-abs" @click="backToHome" v-show="showAbs">
      <span class="iconfont header-abs-back">&#xe624;</span>
    </div>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <span class="iconfont header-fixed-back">&#xe624;</span>
      景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: "DetaliHeader",
  data() {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0,
      },
    };
  },
  methods: {
    backToHome() {
      this.$router.push("/");
    },
    handleScroll() {
      const top = document.documentElement.scrollTop;
      if (top > 60) {
        let opacity = top < 140 ? top / 140 : 1;
        this.opacityStyle = {
          opacity,
        };
        this.showAbs = false;
      } else {
        this.showAbs = true;
      }
    },
  },
  activated() {
    window.addEventListener("scroll", this.handleScroll);
  },
  deactivated() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/style/varibels.styl'
.header-abs
  position absolute
  left 0.2rem
  top 0.2rem
  width 0.8rem
  height 0.8rem
  line-height 0.8rem
  border-radius 0.4rem
  text-align center
  background rgba(0, 0, 0, 0.8)
  .header-abs-back
    color white
    font-size 0.4rem
.header-fixed
  z-index 99
  position fixed
  top 0
  left 0
  right 0
  height $headerHeight
  line-height $headerHeight
  background-color $bgColor
  text-align center
  color white
  font-size 0.32rem
  .header-fixed-back
    position absolute
    top 0
    left 0
    width 0.64rem
    text-align center
    font-size 0.4rem
</style>