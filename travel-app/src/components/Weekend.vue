<template>
  <div>
    <div class="recommend-title">周末游</div>
    <ul>
      <li
        class="item border-bottom"
        v-for="item in recommendList"
        :key="item.id"
      >
        <div class="item-img-wrapper">
          <img :src="item.imgUrl" alt="" class="item-img" />
        </div>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeWeekend",
  data() {
    return {
      recommendList: [
        {
          id: "0001",
          imgUrl:
            "	https://imgs.qunarzz.com/vs_ceph_vcimg/79faa5a73731e84a7731db49d5baa91e.jpeg",
          title: "大连圣亚海洋世界",
          desc: "浪漫大连站，浪漫的海洋主题乐园",
        },
        {
          id: "0002",
          imgUrl:
            "	https://imgs.qunarzz.com/vs_ceph_vcimg/79faa5a73731e84a7731db49d5baa91e.jpeg",
          title: "大连圣亚海洋世界",
          desc: "浪漫大连站，浪漫的海洋主题乐园",
        },
        {
          id: "0003",
          imgUrl:
            "	https://imgs.qunarzz.com/vs_ceph_vcimg/79faa5a73731e84a7731db49d5baa91e.jpeg",
          title: "大连圣亚海洋世界",
          desc: "浪漫大连站，浪漫的海洋主题乐园",
        },
        {
          id: "0004",
          imgUrl:
            "	https://imgs.qunarzz.com/vs_ceph_vcimg/79faa5a73731e84a7731db49d5baa91e.jpeg",
          title: "大连圣亚海洋世界",
          desc: "浪漫大连站，浪漫的海洋主题乐园",
        },
      ],
    };
  },
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/style/mixins.styl'
.recommend-title
  margin-top 0.2rem
  line-height 0.8rem
  background-color #eee
  text-indent 0.2rem
.item-img-wrapper
  overflow hidden
  height 0
  padding-bottom 30%
  .item-img
    width 100%
.item-info
  padding 0.1rem
.item-title
  line-height 0.54rem
  font-size 0.32rem
  ellipsis()
.item-desc
  line-height 0.4rem
  color #ccc
  ellipsis()
</style>