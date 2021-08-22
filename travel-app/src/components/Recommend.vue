<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li
        class="item border-bottom"
        v-for="item in recommendList"
        :key="item.id"
      >
        <img :src="item.imgUrl" alt="" class="item-img" />
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
          <button class="item-button">项目按钮</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  data() {
    return {
      recommendList: [
        {
          id: "0001",
          imgUrl:
            "https://img1.qunarzz.com/sight/p0/1705/68/681e2de923399fc3a3.water.jpg_256x160_65cde9ae.jpg",
          title: "大连圣亚海洋世界",
          desc: "浪漫大连站，浪漫的海洋主题乐园",
        },
        {
          id: "0001",
          imgUrl:
            "https://img1.qunarzz.com/sight/p0/1705/68/681e2de923399fc3a3.water.jpg_256x160_65cde9ae.jpg",
          title: "大连圣亚海洋世界",
          desc: "浪漫大连站，浪漫的海洋主题乐园",
        },
        {
          id: "0002",
          imgUrl:
            "https://img1.qunarzz.com/sight/p0/1705/68/681e2de923399fc3a3.water.jpg_256x160_65cde9ae.jpg",
          title: "大连圣亚海洋世界",
          desc: "浪漫大连站，浪漫的海洋主题乐园",
        },
        {
          id: "0003",
          imgUrl:
            "https://img1.qunarzz.com/sight/p0/1705/68/681e2de923399fc3a3.water.jpg_256x160_65cde9ae.jpg",
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
.item
  display flex
  overflow hidden
  height 1.9rem
  .item-img
    width 1.7rem
    height 1.7rem
    padding 0.1rem
  .item-info
    flex 1
    padding 0.1rem
    min-width 0
    .item-title
      line-height 0.54rem
      font-size 0.32rem
      ellipsis()
    .item-desc
      line-height 0.4rem
      color #ccc
      ellipsis()
    .item-button
      line-height 0.44rem
      margin-top 0.16rem
      background-color #ff9300
      padding 0 0.2rem
      border-radius 0.06rem
      color #fff
</style>