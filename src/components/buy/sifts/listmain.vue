<template>
    <div id="main" v-if="dataset">
        <ul>
            <li v-for="(value,key) in dataset" :key="key" @click="aa((value.id)-1)">
                <img v-lazy="value.goods_pto">
                <div style="text-align:center">
                    <p>{{value.goods_trademark}}</p>
                    <p>{{value.goods_name}}</p>
                    <p>{{value.size}}</p>
                    <p>
                        <span style="color:#E98345">￥{{value.sell_price}}</span>
                        <span style="text-decoration:line-through">{{value.sell_prices}}</span>
                    </p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    import axios from 'axios';
    import './sifts.scss';
    export default {
        data(){
            return {
                dataset: [],
            }
        },
        props:['api','type'],
        beforeMount(){
        var self = this;
            axios.get(self.api,{params: {type:this.type}}).then(function (response) {
                console.log(response);
                self.dataset = (response.data.data.results);
            })
        },
        methods:{
            incrementTotal:function(event){
                var item = event.target.parentNode.children;
                for(var i=0;i<item.length;i++){
                    item[i].style.borderBottom="";
                }
                event.target.style.borderBottom = "1px solid red";
            },
            aa:function(key){
                var key = key+1;

                location.href ='#/detail?id='+key;

            }
        }
    }
</script>