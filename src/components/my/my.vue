<template>
    <div id="sellbox">
        
        <div class="sellhead">
            <ul>
            	<li>
		            <mu-icon value="notifications_none" :size="50" color='black'@click = "$router.push('news')"/>
            		
            	</li>
            	<li>
            		<a href="#/setting"><mu-icon value="brightness_low" :size="50" color='black'/></a>
            	</li>
            </ul>
        </div>

        <div class="sellcontent">

            <div style="display: flex;">
            	<p style="border-radius: 50%;overflow: hidden;margin: 0.266666rem;">
					<img :src="headImg"/>
            	</p>
                	<span style="font-size: 0.426666rem;font-weight: bold;padding: 0.4rem;align-self: center;">用户名：{{username}}</span>
                </div>  

            <div style="display: flex;">

                <div style="flex: 33%;text-align: center;font-size: 0.426666rem;">
                    <p>0.00</p>
                    <p>钱包</p>
                </div>
                <div	style="flex: 33%;text-align: center;font-size: 0.426666rem;">
                    <p>9</p>
                    <p>红包</p>
                </div>
                <div style="flex: 33%;text-align: center;font-size: 0.426666rem;">
                    <p>0</p>
                    <p>积分</p>
                </div>
            </div> 

            <div style="padding: 0.366666rem 0;border-bottom:0.016666rem solid #CCCCCC;">
                
                <div style="padding: 0.133333rem 0.4rem;display: flex;justify-content: space-between;" @click = "$router.push('order')">

                    <span style="vertical-align: middle;font-size: 0.426666rem;">购买订单</span><span style="font-size: 0.426666rem;">查看全部<mu-icon value="chevron_right" :size="42" color='#ccc' style="vertical-align: middle;"/></span>
                </div>
            </div>

            <div style="display: flex;text-align: center;justify-content: space-around;font-size: 0.426666remw;padding-top: 0.333333rem;">

                <a href="#/unpaid"><div>
                    <mu-icon value="payment" :size="50" color='black'/>
                    <p>待支付</p>
                </div></a>
                <a href="#/unpaid"><div>
                    <mu-icon value="airport_shuttle" :size="50" color='black'/>
                    <p>待发货</p>
                </div></a>
                <a href="#/unpaid"><div>
                    <mu-icon value="mode_edit" :size="50" color='black'/>
                    <p>待签收</p>
                </div></a>
                <a href="#/unpaid"><div>
                    <mu-icon value="assignment_turn" :size="50" color='black'/>
                    <p>售后退货</p>
                </div></a>
            </div>

            <div class="shoppingList1 shoppingList2">
                
                <div class="shoppingList_wz" @click = "$router.push('/control/cadd')">

                    <span>我卖的闲置</span><span>查看全部<mu-icon value="chevron_right" :size="42" color='#ccc' vertical-align="center"/></span>
                </div>
            </div>

            <div class="shoppingList shoppingList2">
                
                <div class="shoppingList_wz">

                    <span>邀请好友</span><span>领红包<mu-icon value="chevron_right" :size="42" color='#ccc'/></span>
                </div>
            </div>

            <div class="shoppingList shoppingList2">
                
                <div class="shoppingList_wz">

                    <span>账户管理</span><span><mu-icon value="chevron_right" :size="42" color='#ccc'/></span>
                </div>
            </div>

            <div class="shoppingList shoppingList2 shoppingList3">
                
                <div class="shoppingList_wz">

                    <span>在线客服</span><span>9：00 - 18：00<mu-icon value="chevron_right" :size="42" color='#ccc'/></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import './../sell/sell.scss';
    export default {
        data(){
        	return{
        		
        	}
        },
        mounted:function(){
			//console.log(this.$store.state.head_img,this.headImg);

		},
		computed:{
			headImg:function(){
				return this.$store.state.head_img;
			},
			username:function(){
				return this.$store.state.username;
			}
		}
    }
</script>

<style lang="scss">
	.shoppingList1,.shoppingList2{
		padding: 0.133333rem 0.266666rem;
		font-size: 0.426666rem;
		margin: 0.4rem 0;
		/*border-bottom: 0.026666rem solid #;*/
		/*border-top:0.026666rem solid #CCCCCC ;*/
		i{
			float: right;
		}
	}
</style>