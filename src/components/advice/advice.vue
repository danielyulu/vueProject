<template>
	<div id="sellbox">
		<div class="sellhead">
			<ul class="clearfix Nav0 Nav1">
				<li>
					<mu-icon value="keyboard_arrow_left" @click="$router.go(-1)" ></mu-icon>
				</li>
				<li>
					<span>意见反馈</span>
				</li>
				<li>
					<span>
						<mu-icon value="help" @click="$router.push('howtosell')"></mu-icon>
					</span>
				</li>
			</ul>
		</div>
		<div class="sellcontent">
			<div class="advicebox">
				<textarea placeholder="请输入不少于20000000字的建议，不然不给你提交"/>
			</div>
			<p style=" background-color: #333333;color: #FFFFFF;padding: 0.566666rem;text-align: center;font-size: 0.426666rem;margin-top: 1.333333rem;">提交</p>
		</div>
	</div>
</template>

<script>
	import "../sell/sell.scss";
	export default{
		
	}
</script>

<style lang="scss">
	.sellhead{
		background-color: #FFFFFF;
	}
	.sellcontent{
		padding: 0.7rem;
	}
	.advicebox{
		width: auto;
		width:9rem ;
		height: 7.333333rem;
		background-color: #DBDBDB;
		margin-left:50% ;
		transform:translateX(-50%) ;
		padding: 30px;
		textarea{
			width: 100%;
			height: 100%;
			background-color: #DBDBDB;
			font-size: 0.426666rem;
			outline: none;
		}
		
		
	}
</style>