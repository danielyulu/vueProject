<template>
	<div class="sellhead">
		<ul class="clearfix Nav0">
			<li>
				<mu-icon value="keyboard_arrow_left" @click = "$router.go(-1)"></mu-icon>
			</li>
			<li>
				<span>消息提示</span>
			</li>
			<li>
				<span>
					<mu-icon value="sms"></mu-icon>
					
					客服
				</span>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return{}
		},
		
	}
</script>

<style>
</style>