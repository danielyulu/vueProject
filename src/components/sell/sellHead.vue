<template>
	<div class="sellhead">
		<ul class="clearfix">
			<li>
				<mu-icon value="notifications_none" @click="tonews()"/>	
			</li>
			<li>
				<span>只</span>
                <span>二</span>
			</li>
		</ul>

	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			tonews(){
				this.$router.push("news");
			}
		}
		
	}
</script>

<style lang="scss">
	.sellhead{
        background-color: #F5F5F5;
		
	}
</style>