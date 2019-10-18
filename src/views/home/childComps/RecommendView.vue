<template>
    <div class="recommend">
       <div class="recommend-item" v-for="item in recommend" :key="item.index">
           <a :href="item.link">
               <img :src="item.image" alt="">
               <div>{{item.title}}</div>
           </a>
        </div> 
    </div>
</template>
<script>
export default {
    props: {
        recommend:{
            type:Array,
            default(){
              return []
          }
        }
    }
}
</script>
<style>
.recommend{
    display: flex;
    text-align: center;
    font-size: 14px;
    padding: 10px 0 20px 0;
    border-bottom: 8px solid #eee;
}
.recommend-item{
    flex:1;
}
.recommend-item img{
    width: 65px;
    height: 65px;
    margin-bottom: 5px;
}
</style>