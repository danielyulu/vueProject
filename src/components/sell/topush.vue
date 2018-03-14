<template>
	<div id="sellbox">
		<phead></phead>
		<pcontent></pcontent>
	</div>
</template>

<script>
	import './sell.scss';
	import phead from './topush/phead.vue';
	import pcontent from './topush/pcontent.vue';
	
	export default{
		data(){
			return {}
		},
		components:{
			phead,
			pcontent
		}
	}
</script>

<style>
</style>