<template>
    <div>
        <tab-bar>
      <tab-bar-item path="/home">
         <img slot="item-icon" src="~assets/img/tabbar/home1.png" alt="">
         <img slot="item-icon-active" src="~assets/img/tabbar/home2.png" alt="">
          <div slot="item-text">我的</div>
      </tab-bar-item>
        <tab-bar-item path="/message">
         <img slot="item-icon" src="~assets/img/tabbar/message1.png" alt="">
          <img slot="item-icon-active" src="~assets/img/tabbar/message2.png" alt="">
          <div slot="item-text">消息</div>
      </tab-bar-item>
        <tab-bar-item path="/time">
         <img slot="item-icon" src="~assets/img/tabbar/time1.png" alt="">
         <img slot="item-icon-active" src="~assets/img/tabbar/time2.png" alt="">
          <div slot="item-text">时间</div>
      </tab-bar-item>
        <tab-bar-item path="/user"> 
         <img slot="item-icon" src="~assets/img/tabbar/user1.png" alt="">
         <img slot="item-icon-active" src="~assets/img/tabbar/user2.png" alt="">
        <div slot="item-text">用户</div>
      </tab-bar-item>
     
    </tab-bar>
    </div>
</template>
<script>
import TabBar from 'components/common/tabbar/TabBar.vue'
import TabBarItem from 'components/common/tabbar/TabBarItem.vue'
export default {
  name:'MainTabBar',
  components:{
    TabBar,
    TabBarItem
  }
}
</script>
<style>

</style>