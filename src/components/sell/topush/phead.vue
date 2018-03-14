<template>
	<div class="sellhead">
		<ul class="clearfix Nav0 Nav1">
			<li>
				<mu-icon value="keyboard_arrow_left" @click = '$router.go(-1)'></mu-icon>
			</li>
			<li>
				<span>整理我的闲置</span>
			</li>
			<li>
				<span>
					<mu-icon value="help" @click="$router.push('howtosell')"></mu-icon>
				</span>
			</li>
		</ul>
	</div>

</template>

<script>
</script>

<style lang="scss">
.sellhead .Nav1 li:nth-child(3){
	i{
		/*这是问号图标的样式*/
		color:#FD5C02;
	}
}	
</style>