<template>
	<div id="sellbox">
		<chead></chead>
		<ccontent></ccontent>
	</div>
</template>

<script>
	import './sell.scss';
	import ccontent from './control/ccontent.vue';
	import chead from './control/chead.vue';
	
	export default{
		data(){
			return{
				
			}
		},
		components:{
	  		chead,
	  		ccontent,
  		}
	}
</script>

<style>
</style>