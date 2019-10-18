<template>
  <div class="banner_home">
    <swiper>
      <swiper-item v-for="item in banner" :key="item.link">
        <a :href="item.link">
          <img :src="item.image" />
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>
<script>
import { Swiper, SwiperItem } from "components/common/swiper/index.js";
export default {
  props:{
      banner:{
          type:Array,
          default(){
              return []
          }
      }
  },
  components: {
    Swiper,
    SwiperItem
  }
};
</script>
<style>
.banner_home{
  padding-top: 44px;
}
</style>