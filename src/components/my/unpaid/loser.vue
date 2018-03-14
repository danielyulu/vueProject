<template>
    <div>
        <ul class="c_goods">
            <li v-for="(value,key) in dataset" :id="value.id" v-if="value.type==1">
              <mu-icon value="delete_forever" color="red" class="delete" :size="32" />
              <input type=checkbox class="demo-checkbox"/>
                <img :src="value.goods_pto" class="pic">
              </span>
              <a href="#">
                <div class="c_content">
                    <div class="received" style="color:red;">待支付</div>
                    <h3>{{value.goods_trademark}}</h3>
                    <h4>{{value.goods_name}}</h4>
                    <p>{{value.title_name}}<span>{{value.size}}</span></p>
                    <h5><b>{{value.sell_price}}</b><s>{{value.sell_prices}}</s></h5>
                </div>
              </a>
            </li>
        </ul>
        <div class="o_footer clearfix" style="position:fixed;">
            <a href="#/order"><button>去支付</button></a>
        </div>
    </div>
</template>


<script>
    import '../../car/car.scss';
    import '../../order/order.scss';
    import axios from 'axios'
    import qs from 'qs';
    export default {
    data(){
        return{
            dataset:[],
            total:[],
            totals:[],
        }
    },
        beforeMount(){
            var self = this;
            axios.get('http://10.3.136.62:88/getorder',{params:{username:this.username}}).then(function (response) {
                var item = response.data.data.results;
                item.forEach(function(ss){
                    var bb = JSON.parse(ss.goods_detail)
                    var orderId = JSON.parse(ss.id);
                    var accessory = JSON.parse(ss.type);
                    bb.type = accessory;
                    bb.id = orderId;
                    self.dataset.push(bb);
                })
            })
        },
		computed:{
			username:function(){
				return this.$store.state.username;
				
			},
		}
        
    }
</script>
