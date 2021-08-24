<template>
  <div class="city-list" ref="wrapper">
    <div>
      <div class="area border-topbottom">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{ this.city }}</div>
          </div>
        </div>
      </div>
      <div class="area border-topbottom">
        <div class="title">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item in hotCities" :key="item.id">
            <div class="button" @click="handleClickCity(item.name)">
              {{ item.name }}
            </div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{ key }}</div>
        <div class="item-list">
          <div
            class="item border-bottom"
            v-for="innerItem of item"
            :key="innerItem.id"
            @click="handleClickCity(innerItem.name)"
          >
            {{ innerItem.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import BScroll from "better-scroll";
import axios from "axios";
export default {
  name: "CityList",
  props: {
    hotCities: Array,
    letter: String,
  },
  data() {
    return {
      cities: {},
    };
  },
  computed: {
    ...mapState(["city"]),
  },
  methods: {
    handleGetCityListSucc(res) {
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.cities = data.cities;
        this.$nextTick(() => {
          this.scroll = new BScroll(this.$refs.wrapper);
        });
      }
    },
    getCityList() {
      axios.get("/api/city.json").then(this.handleGetCityListSucc);
    },
    handleClickCity(city) {
      this.$store.dispatch("changeCity", city);
      this.$router.push("/");
    },
    ...mapMutations(["changeCity"]),
  },
  created() {
    this.getCityList();
  },
  watch: {
    // 监听letter
    letter() {
      if (this.letter) {
        const element = this.$refs[this.letter][0];
        console.log(element);
        this.scroll.scrollToElement(element);
      }
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/style/varibels.styl'
.border-topbottom
  &:before
    border-color #ccc
  &:after
    border-color #ccc
.border-bottom
  &:before
    border-color #ccc
.city-list
  overflow hidden
  position absolute
  top 1.58rem
  left 0
  right 0
  bottom 0
  .title
    line-height 0.54rem
    background-color #eee
    padding-left 0.2rem
    color #666
    font-size 0.26rem
  .button-list
    overflow hidden
    padding 0.1rem 0.6rem 0.1rem 0.1rem
  .button-wrapper
    float left
    width 33.33%
    .button
      margin 0.1rem
      padding 0.1rem 0
      text-align center
      border 0.02rem solid #ccc
      border-radius 0.06rem
  .item-list
    .item
      line-height 0.76rem
      padding-left 0.2rem
</style>