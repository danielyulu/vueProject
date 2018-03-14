<template>
	<div class="databox">
		<h2>正在售卖中</h2>
		<ul style="height: 10rem;">
			<li @click="$router.push('/detail?id=2')">
				<p>
					<img src="../../../assets/goodlist3_1.jpg"/>
					<span>包类</span>
					<span style="color: #FD5C02;padding-left: 0.266666rem;">品牌：卡洛黛茜</span>
					
				</p>
				<p class="price">
					<span>
						价格：
					</span>
					<span>
						￥998.00
					</span>
				</p>
			</li>
			<li v-for="(item,index) in selllist" :key="item.id">
				<p>
					<img v-lazy="item.goods_pto"/>
					<span>{{item.type}}</span>
					<span style="color: #FD5C02;padding-left: 0.266666rem;">品牌：{{item.goods_trademark}}</span>
				</p>
				<p class="price">
					<span>
						预售价格：
					</span>
					<span>
						￥{{item.default_price}}
					</span>
				</p>
			</li>
		</ul>
  		
	</div>
</template>

<script>
	export default{
		data(){
			return{
				selllist:[],
			}
		},
		mounted:function(){
			var self = this;
			self.$axios({
				url: "http://10.3.136.62:88/getsell",
			
			}).then(function(res) {
				
				console.log(res.data.data.results)
				var resdata = res.data.data.results;
				resdata.forEach(function(item){
					if(item.availability==2){
						self.selllist.push(item)
					}
				});
				
				console.log(self.selllist)
			})	
		}
	}
</script>

<style lang="scss" scoped="scoped">
	h2{
		height: 0.833333rem;
		font-size: 0.426666rem;
		padding-right: 0.4rem;
		text-align: right;
		color: #FD5C02;
		border-bottom: 0.013333rem solid #DBDBDB;
		letter-spacing: 0.133333rem;
		
		
	}
	.databox{
		padding: 0.266666rem;
		p{
			padding-top: 0.466666rem;
		}
	}
	img{
		width: 4rem;
		vertical-align: middle;
		margin-left: 0.133333rem;
		border: 0.04rem solid #333333;
		margin-right: 0.36rem;
	}
	span{
		vertical-align: middle;
		font-size: 0.426666rem;
	}
	.price{
		margin-top:0.16rem ;
		text-align: center;
		background-color: #333333;
		padding: 0.426666rem;
		span{
			color: #FFFFFF;
		}
		span:nth-child(2){
			color: red;
			font-weight: bold;
		}
	}
	.mint-tab-container-item{
		overflow: scroll;
		height: 10rem;
	}
</style>