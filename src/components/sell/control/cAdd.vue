<template>
	<div class="databox">
		<h2>待寄出</h2>
		<ul style="height: 10rem;">
			<!--<li>
				<p>
					<img src="../../../assets/accessory.jpg"/>
					<span>这是一只猪</span>
				</p>
				<button @click="open('right')">我要寄出</button>
				 
			</li>-->
			<li v-for="(item,index) in selllist" :key="item.id">
				<img  v-lazy="item.goods_pto"/>
				<span>{{item.type}}</span>
				<span style="color: #FD5C02;padding-left: 0.166666rem;">品牌：{{item.goods_trademark}}</span>
				
				<mu-icon value="delete_forever" @click='delete1(index,item.id)'></mu-icon>
				
				<button @click="open('right')">我要寄出</button>
			</li>
		</ul>
		<mu-popup position="right" popupClass="demo-popup-right" :open="rightPopup" @close="close('right')">
    		<!--<mu-raised-button label="关闭弹框" @click="close('right')" primary fullWidth/>-->
			<mu-content-block>
				<div class="smb"> 
					<h2>请于7天内寄到以下地址</h2>
					<p>
						<mu-icon value="person_pin">
						</mu-icon>
						<span>萝卜小分队</span>
					</p>
					<p>
						<mu-icon value="settings_phone"></mu-icon>
						<span>020-811331122</span>
					</p>
					<p>
						<mu-icon value="add_location"></mu-icon>
						<span>广东省广州市天河区岗顶萝卜小队窝</span>
					</p>
				</div>
				<mu-raised-button label="我知道了" @click="close('right')"  fullWidth/>
	
			</mu-content-block>
  		</mu-popup>
  		
	</div>
</template>

<script>
	import qs from 'qs'
	export default{
		data(){
			return{
				bottomPopup: false,
		      	topPopup: false,
		      	leftPopup: false,
		      	rightPopup: false,
		      	selllist:[],
			}	
		},
		methods:{
			open (position) {
		      this[position + 'Popup'] = true
		    },
		    close (position) {
		      this[position + 'Popup'] = false
		    },
		    delete1(index,id){

		    	var self = this;
		    	self.$axios({
		    		method:'POST',
		    		url:"http://10.3.136.62:88/delete_sell",
		    		data:qs.stringify({id:id}),
					headers:{'Content-Type': "application/x-www-form-urlencoded"}
		    		
		    	}).then(function(index,id){
		    		self.selllist.splice(index,1);
		    		
		    		
		    	})
		    },
		    create(res){
		    	
		    }
		},
		//这里是获取数据库的信息
		mounted:function(){
			var self = this;
			self.$axios({
				url: "http://10.3.136.62:88/getsell",
			
			}).then(function(res) {
				
				console.log(res.data.data.results)
				var resdata = res.data.data.results;
				resdata.forEach(function(item){
					if(item.availability==0){
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
	button{
		font-size: 0.533333rem;
		padding: 0.2rem 0.4rem;
		margin-top:0.426666rem ;
		margin-left: 60%;
	}
	.mu-content-block{
		padding:0.133333rem 2.333333rem 1rem 1rem;
		h2{
			color: #333333;
		}
		i{
			vertical-align: middle;
			font-size: 0.426666rem;
			padding-right: 0.233333rem;
		}
		span{
			vertical-align: middle;
		}
		
		p{
			margin: 0.566666rem 0;
		}
		.mu-raised-button{
			border: 0.023333rem solid #FD5C02;
			padding: 0.7rem;
			transform: translateX(-30%);
		}
	}
li{
	i{
		font-size: 0.733333rem;
		vertical-align: middle;
	}
}
</style>