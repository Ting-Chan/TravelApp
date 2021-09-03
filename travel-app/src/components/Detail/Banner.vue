<template>
  <div>
    <div class="banner">
      <img
        src="https://imgs.qunarzz.com/p/p14/201302/28/218ac6605f1d637f93835fbb.jpg_256x160_bfee6c2d.jpg"
        alt=""
        class="banner-img"
        @click="handleBannerClicked"
      />
      <div class="banner-info">
        <div class="banner-title">大连海洋世界（AAAA景区）</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe600;</span>
          39
        </div>
      </div>
      <common-gallary
        :imgs="imgs"
        v-show="showGallary"
        @close="handleGallaryClose"
      ></common-gallary>
    </div>
  </div>
</template>

<script>
import CommonGallary from "../Common/Gallary/Gallary.vue";
export default {
  name: "DetailBanner",
  data() {
    return {
      showGallary: false,
      imgs: [
        "https://imgs.qunarzz.com/p/p90/201308/23/5ce590745204c90193835fbb.jpg_256x160_04bdc5bd.jpg",
        "https://imgs.qunarzz.com/p/p90/201308/23/5ce590745204c90193835fbb.jpg_256x160_04bdc5bd.jpg",
      ],
    };
  },
  components: {
    CommonGallary,
  },
  methods: {
    handleBannerClicked() {
      this.showGallary = true;
      console.log(this.showGallary);
    },
    handleGallaryClose() {
      console.log("画廊关闭");
      this.showGallary = false;
    },
  },
};
</script>

<style lang="stylus" scoped>
.banner
  position relative
  overflow hidden
  height 0
  padding-bottom 55%
  .banner-img
    width 100%
  .banner-info
    position absolute
    display flex
    left 0
    right 0
    bottom 0
    line-height 0.6rem
    color #fff
    background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
    .banner-title
      padding-left 0.2rem
      flex 1
      font-size 0.24rem
    .banner-number
      padding 0 0.4rem
      height 0.32rem
      line-height 0.4rem
      margin-top 0.14rem
      border-radius 0.2rem
      background rgba(0, 0, 0, 0)
      font-size 0.24rem
      .banner-icon
        font-size 0.24rem
</style>