<template>
    <div class="goods">
        <home-goods-item :goods = "item" v-for="item in goods" :key="item.index"></home-goods-item>
    </div>
</template>
<script>
import HomeGoodsItem from './HomeGoodsItem.vue'
export default {
    props:{
        goods:{
            type:Array,
            default(){
                return []
            }
        }
    },
    created(){
        console.log(this.goods)
    },
    components:{
        HomeGoodsItem
    }
}
</script>
<style>
.goods{
    display: flex;
    flex-wrap: wrap;
    padding: 0 5px;
    justify-content: space-around;
}
</style>