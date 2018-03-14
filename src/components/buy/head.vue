<template>
    <div>
        <div id="head">
            <div class="head_l">
                <a href="#/news">
                    <mu-icon value="notifications_none" :size="42" color="#000"/>
                </a>
            </div>
            <div class="head_c">
                <span>只</span>
                <span>二</span>
            </div>
            <div class="head_r">
                <a href="#/search">
                    <mu-icon value="search" :size="42"/>
                </a>
                <a href="#/car">
                    <mu-icon value="shopping_cart" :size="42"/>
                </a>
            </div>
        </div>
        <div id="nav" @click="incrementTotal">
            <a href="#">上新</a>
            <a href="#/buy">精选</a>
            <a href="#/girlclothes">女装</a>
            <a href="#/sifts">包袋</a>
            <a href="#/accessory">配饰</a>
            <a href="#/shoes">女鞋</a>
        </div>   
    </div>
</template>

<script>
import './buy.scss'
export default {  
    methods:{
        incrementTotal:function(event){
            var item = event.target.parentNode.children;
            for(var i=0;i<item.length;i++){
                item[i].style.borderBottom="";
            }
            event.target.style.borderBottom = "1px solid red";
        }
    }
   
}
</script>