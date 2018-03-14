<template>
	<div class="sellcontent">
		<ul class="navbox">
			<li>
				<mu-icon value="card_giftcard" @click="selectTab('tab-container2','cadd')"></mu-icon>
				<span>待寄出</span>
			</li>
			<li>
				<mu-icon value="alarm" @click="selectTab('tab-container3','cprice')"></mu-icon>
				<span>已报价</span>
			</li>
			<li>
				<mu-icon value="loyalty" @click="selectTab('tab-container4','alreadypush')"></mu-icon>
				<span>已在售</span>
			</li>
			<li>
				<mu-icon value="description" @click="selectTab('tab-container1','')"></mu-icon>
				<span>全部</span>
			</li>
		</ul>
		<!--scib就是sellcontent的img的box的意思-->
		<div class="scib">
			<img src="../../assets/s1.jpg" width="100%"/>
			<p class="p1" @click="howToSell()">一键读懂怎么卖闲置 <mu-icon value="help_outline"></mu-icon></p>
			<p class="btn" @click="topush">我要卖闲置</p>
			<p>支持女装、包袋、配饰、女鞋四大品类，顺丰到付哦</p>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
//			howToSell:function(){}
			howToSell(){
				this.$router.push("howtosell");
			},
			topush(){
				this.$router.push("topush");
			},
			selectTab(page,router){
				this.$router.push("/control/"+router);
				this.$store.state.text1 = page;
				console.log(page);
			}
		},
		mounted:function(){
			
		}
		
	}
</script>

<style lang="scss">
	
</style>