<template>
    <div class="goods_item">
        <img :src="goods.show.img" alt="">
        <div class="goods_info">
            <p class="goods_title">{{goods.title}}</p>
            <div>
                <span class="price">${{goods.price}}</span>
                <span class="cfav">{{goods.cfav}}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        goods:{
            type:Object,
            default(){
                return {}
            }
        }
    }
}
</script>
<style>
.goods_item{
    width: 48%;
    padding-bottom: 40px;
   position: relative; 
}
.goods_item img{
    width: 100%;
}
.goods_info{
    position: absolute;
    font-size: 12px;
}
.goods_title{
      overflow: hidden;
    -webkit-line-clamp: 1;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
}
.price{
    color: red;
    font-size: 14px;
}

.cfav:before{
    content: " 111";
    background-image: url("assets/img/goods/star.png");  
    display: inline-block; 
}
</style>