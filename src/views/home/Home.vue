<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <HomeSwiper :banner="banner"></HomeSwiper>
    <RecommendView :recommend="recommend"></RecommendView>
    <week-favorite></week-favorite>
    <tab-control class="control_control" :titles="['流行','新款','精选']"></tab-control>
    <home-goods :goods = "goods['pop'].list"></home-goods>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>1</li>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>1</li>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>1</li>
    <li>1</li>

    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>1</li>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>1</li>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>1</li>
    <li>1</li>

    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>1</li>
    <li>1</li>

    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>1</li>
    <li>1</li>

    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>1</li>
    <li>1</li>

    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>1</li>
    <li>1</li>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import TabControl from "components/content/TabControl.vue";
import HomeGoods from "components/content/homegoods/HomeGoods.vue";
import HomeSwiper from "./childComps/HomeSwiper.vue";
import RecommendView from "./childComps/RecommendView.vue";
import WeekFavorite from "./childComps/WeekFavorite.vue";


// import Banner from 'components/common/banner/Banner.vue'
import { getHomeMultidata, getHomeGoods } from "network/home.js";

export default {
  name: "home",
  data() {
    return {
      banner: [],
      recommend: [],
      goods:{
        'pop':{ page:0, list:[] },
        'new':{ page:0, list:[] },
        'sell':{ page:0, list:[] }
      }
    };
  },
  components: {
    NavBar,
    TabControl,
    HomeGoods,
    HomeSwiper,
    RecommendView,
    WeekFavorite
  },
  created() {
    //请求多个数据
    this.getHomeMultidata()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  methods: {
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        // console.log(res);
        this.banner = res.data.banner.list;
        this.recommend = res.data.recommend.list;
        // console.log(this.res)
      });
    },
    getHomeGoods(type){
      const page = this.goods[type].page + 1
      getHomeGoods(type,1).then(res =>{
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page = + 1
        // console.log(res)
      })
    }
  }
};
</script>

<style>
.home-nav {
  background-color: var(--color-tint);
  color: white;
  position: fixed;
  width: 100%;
  z-index: 9;
}
.control_control {
  position: sticky;
  top: 44px;
}
</style>