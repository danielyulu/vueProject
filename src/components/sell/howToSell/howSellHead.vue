<template>
	<div class="sellhead">
		<ul class="clearfix Nav0">
			<li>
				<a href="#/sell">
					<mu-icon value="keyboard_arrow_left"></mu-icon>
				</a>
			</li>
			<li>
				<span>一键读懂怎么卖</span>
			</li>
			<li>
				<mu-icon value="share" @click="open('bottom')"></mu-icon>

			</li>
		</ul>
		<mu-popup position="bottom" popupClass="demo-popup-bottom" :open="bottomPopup" @close="close('bottom')">
			<mu-appbar title="分享到..">
				<mu-flat-button slot="right" label="关闭" color="white" @click="close('bottom')" />
			</mu-appbar>
			<mu-content-block>
				<ul>
					<li>
						<img src="../../../assets/t1.jpg"/>
						<p>微信好友</p>
					</li>
					<li>
						<img src="../../../assets/t2.jpg"/>
						<p>朋友圈</p>
					</li>
					<li>
						<img src="../../../assets/t3.jpg"/>
						<p>微博</p>
					</li>
				</ul>
			</mu-content-block>
		</mu-popup>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				bottomPopup: false,
			}

		},
		methods: {
			open(position) {
				this[position + 'Popup'] = true
			},
			close(position) {
				this[position + 'Popup'] = false
			}

		},
	}
</script>

<style lang="scss">
.demo-popup-bottom {
  width: 100%;
}
.mu-appbar{
	background-color: #fff;
	text-align: center;
	font-size: 0.533333rem;
}
.mu-content-block{
	
	ul{
		display:flex;
		justify-content: space-around;
		align-content: center;
		li{
			flex: 33%;
			font-size: 0.53rem;
			text-align: center;
			p{
				margin: 0;
				padding: 0;
			}
		}
	}
}
.mu-flat-button-label{
	font-size: 0.326666rem;
}
</style>