<template>
	<!--how to sell 的缩写-->
	<div id="sellbox">
		<howSellhead></howSellhead>
		<howsellcontent></howsellcontent>
	</div>
</template>

<script>
	import './sell.scss'
	import howSellhead from './howToSell/howSellHead.vue'
	import howsellcontent from './howToSell/howSellcontent.vue'
	export default{
		data(){
			return{}
		},
		components:{
			howSellhead,
			howsellcontent,
		}
	}
</script>

<style>
	
</style>