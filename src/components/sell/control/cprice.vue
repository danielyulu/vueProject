<template>
	<div class="databox">
		<h2>已报价</h2>
		<ul>
			<!--<li>
				<p>
					<img src="../../../assets/goodlist01.jpg"/>
					<span>美美哒哟~</span>
				</p>
				<p class="price">
					<span>
						预售价格：
					</span>
					<span>
						￥1000.00
					</span>
				</p>
			</li>-->
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
	import './../sell.scss'
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
					if(item.availability==1){
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
		
		padding-top: 10px;
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
</style>