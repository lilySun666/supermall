<template>
    <div>
        <div class="tabcontrol">
            <div v-for="(item, index) in titles" :key="item.index" 
            class="tab_item" 
            :class="{ active: currentIndex === index }" @click="controlItem(index)">
                <span>{{item}}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            currentIndex:0
        }
    },
    props:{
        titles:{
            type:Array,
            defalut(){
                return []
            }
        }
    },
    methods:{
        controlItem(index){
            this.currentIndex = index;
        }
    }
}
</script>
<style>
  .tabcontrol{
      display: flex;
      text-align: center;
      line-height: 44px;
      height: 44px;
      font-size: 16px;
      background-color: white; 
      z-index: 10;
  }
  .tab_item{ 
      flex:1;
  }
  .active{
      color:rgb(27, 174, 229);
      font-weight: 500;
  }
  .active span{
      padding: 5px;
      border-bottom: 2px solid rgb(27, 174, 229);
  }
</style>