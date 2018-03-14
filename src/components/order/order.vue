<template>
    <div id="order">
        <div class="o_head">
        <mu-icon value="navigate_before" @click ="$router.go(-1)"/>
        确认订单
        </div>
        <div class="o_main">
            <div class="address">
                <button @click="$router.push('addaddress')">
                    <mu-icon value="add"/> 
                    添加地址
                </button>
            </div>
            <div class="buyList">
                <h3 @click="toggle">购买清单 <mu-icon :value="arrow"/></h3>
                <ul class="g_list">
                    <li v-for="(value,key) in dataset"  v-if="value.type == 1">
                        <img v-lazy="value.goods_pto" class="pic">
                        <div class="c_content">
                            <h3>{{value.goods_trademark}}</h3>
                            <h4>{{value.goods_name}}</h4>
                            <p>{{value.title_name}}<span>{{value.size}}</span></p>
                            <h5><b>{{value.sell_price}}</b><s>{{value.sell_prices}}</s></h5>
                        </div>
                    </li>
                </ul>
            </div>
            <ul class="red_paper">
                <li>
                    红包
                    <span>共<b>9</b>个<mu-icon value="chevron_right"/></span>
                </li>
                <li>
                    积分 <mu-icon value="help_outline"/> <b>可抵扣￥0.00</b>
                </li>
                <li>
                    钱包 <mu-icon value="help_outline"/> <b>余额￥0.00</b>
                </li>
            </ul>
            <ul class="total">
                <li>商品总额<span>{{moneys}}</span></li>
                <li>运费<span>￥0.00</span></li>
            </ul>
        </div>
        <div class="o_footer clearfix" @click="peyment">
            <span>实付<b>￥{{moneys}}</b></span>
            <button>去支付</button>
        </div>
        <div class="succeed">
            支付成功
        </div>
    </div>
</template>

<script>
    import './order.scss'
    import axios from 'axios'
    export default {
      data () {
        return {
          arrow:'arrow_drop_up',
          dataset:[],
          moneys:[]
        }
     
    },
    methods:{
        toggle(){
            var $g_list=$('.g_list');
            if($g_list.css('display')=='none'){
                $g_list.show();
                this.arrow='arrow_drop_up';
            }else{
                $g_list.hide();
                this.arrow='arrow_drop_down';
            }
        },
        peyment:function(){
            var $succeed = $('.succeed');
            $succeed.fadeIn(1000).fadeOut(3000);
            var goodsID = [];
            console.log(this.dataset)
            for(var i=0;i<this.dataset.length;i++){
                if((this.dataset)[i].type==1){
                    goodsID.push(this.dataset[i].id*1)
                }
            }
            var $buyList =$('.buyList');
            if($buyList.find('li').length != 0 ){
                axios.get('http://10.3.136.62:88/order_type',{params: {id:goodsID,type:2}}).then(function (response) {
                    console.log(response)
                })
            }
            
        }
    },
    beforeMount(){
        this.totals=0
        var self = this;
        axios.get('http://10.3.136.62:88/getorder',{params:{username:this.username}}).then(function (response) {
        	console.log(response)
            var total = [];
            var money = 0;
            var item = response.data.data.results;
            item.forEach(function(ss){
                var bb = JSON.parse(ss.goods_detail)
                var orderId = JSON.parse(ss.id);
                var accessory = JSON.parse(ss.type);
                bb.type = accessory;
                bb.id = orderId;
                self.dataset.push(bb);
                if(bb.type==0){
                    var price = JSON.parse(bb.sell_price);
                    total.push(price);
                }
                

            })
            
            for(var i=0;i<total.length;i++){
                money = money+total[i];
            }
            self.moneys = money;
      })
    },
    computed:{
		username:function(){console.log(this.$store.state.username)
			return this.$store.state.username;
			
		},
	}
}

</script>
