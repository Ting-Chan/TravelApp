<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        loop: true,
      },
      swiperList: [
        {
          id: "001",
          imgUrl:
            "https://b3-q.mafengwo.net/s13/M00/71/D6/wKgEaVyd7i6AFjCjAADni5x-vvY89.jpeg",
        },
        {
          id: "002",
          imgUrl:
            "https://n3-q.mafengwo.net/s13/M00/FD/07/wKgEaVycp3-AVimPAADWiqvk6ek72.jpeg",
        },
      ],
    };
  },
};
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
  background #fff !important
.wrapper
  width 100%
  height 0
  padding-bottom 53.87%
  overflow hidden
  background-color #ccc
  .swiper-img
    width 100%
</style>