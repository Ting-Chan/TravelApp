<template>
  <div>
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
import { mapState } from "vuex";
import HomeHeader from "../components/Home/Header";
import HomeSwiper from "../components/Home/Swiper";
import HomeIcons from "../components/Home/Icons";
import HomeRecommend from "../components/Home/Recommend";
import HomeWeekend from "../components/Home/Weekend";
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      lastCity: "",
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: [],
    };
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend,
  },
  computed: {
    ...mapState(["city"]),
  },
  methods: {
    getHomeInfo() {
      axios.get("/api/index.json?city=" + this.city).then(this.getHomeInfoSucc);
    },
    getHomeInfoSucc(res) {
      console.log(res);
      res = res.data;
      if (res.return && res.data) {
        const data = res.data;
        this.city = data.city;
        this.swiperList = data.swiperList;
        this.iconList = data.iconList;
        this.recommendList = data.recommendList;
        this.weekendList = data.weekendList;
      }
    },
  },
  mounted() {
    this.lastCity = this.city;
    this.getHomeInfo();
    console.log("mounted");
  },
  activated() {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city;
      this.getHomeInfo();
    }
    console.log("activited");
  },
};
</script>

<style scoped>
</style>