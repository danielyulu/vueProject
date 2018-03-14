<template>
	<div id="sellbox">
		<newsHead></newshead>
		<newsContent></newscontent>
		
	</div>
</template>

<script>
	import './sell.scss';
	import newsHead from './news/newsHead.vue';
	import newsContent from './news/newsContent.vue';
	
	export default{
		data(){
			return{}
		},
		components:{
			newsHead,
			newsContent
		}
	}
</script>

<style>
</style>