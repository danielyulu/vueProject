<template>
	<div class="sellcontent">
		<div class="swiper-box">
			<swiper :options="swiperOption" ref="mySwiper">
				<!-- slides -->
				<swiper-slide><img src="../../../assets/hsbanner1.jpg" /></swiper-slide>
				<swiper-slide><img src="../../../assets/hsbanner2.jpg" /></swiper-slide>
				<swiper-slide><img src="../../../assets/hsbanner3.jpg" /></swiper-slide>
				<swiper-slide><img src="../../../assets/hsbanner4.jpg" /></swiper-slide>
				<swiper-slide><img src="../../../assets/hsbanner5.jpg" /></swiper-slide>
				<swiper-slide><img src="../../../assets/hsbanner6.jpg" /></swiper-slide>
				<!-- Optional controls -->
				<div class="swiper-pagination" slot="pagination"></div>

			</swiper>
		</div>
		<div class="word-box">
			<div>
				<div class="title">
					<h2>怎么卖闲置？</h2>
					<p>顺丰包邮&nbsp;3天报价</p>
				</div>
				<div class="con">
					<p>
						<span>01</span> 录入要卖的宝贝
					</p>
					<p>
						<span>02</span> 使用顺丰[隔日达]到付给只二
					</p>
					<p>
						<span>03</span> 只二签收3个工作日内给出报价
						<div>
							通过鉴定的宝贝，您可选择寄卖服务（周期180天，自由定价）或一口价服务（只二买断，1秒收款） 未通过鉴定的宝贝，只二将到付退回给您，您也可授权只二处理，不再退回。
						</div>

					</p>
					<p>
						<span>
							04
						</span> 卖出后钱款进入钱包
						<div>可提现或在只二购买任意商品</div>
					</p>
				</div>
			</div>
			<div>
				<div class="title">
					<h2>收入怎么算？</h2>
					<p>自由定价/&nbsp;随心卖</p>
				</div>
				<div class="con">
					<p>
						<span>01</span> 录入要卖的宝贝
					</p>
					<p>
						<span>02</span> 使用顺丰[隔日达]到付给只二
					</p>
					<p>
						<span>03</span> 只二签收3个工作日内给出报价
						<div>
							通过鉴定的宝贝，您可选择寄卖服务（周期180天，自由定价）或一口价服务（只二买断，1秒收款） 未通过鉴定的宝贝，只二将到付退回给您，您也可授权只二处理，不再退回。
						</div>

					</p>
					<p>
						<span>
							04
						</span> 卖出后钱款进入钱包
						<div>可提现或在只二购买任意商品</div>
					</p>
				</div>
					<div>
				<div class="title">
					<h2>接受哪些宝贝？</h2>
					<p>款式越新&nbsp;卖得越快</p>
				</div>
				<div class="con">
					<p>
						<span>01</span>
						录入要卖的宝贝
					</p>
					<p>
						<span>02</span>
						使用顺丰[隔日达]到付给只二
					</p>
					<p>
						<span>03</span>
						只二签收3个工作日内给出报价
						<div>
							通过鉴定的宝贝，您可选择寄卖服务（周期180天，自由定价）或一口价服务（只二买断，1秒收款）
							未通过鉴定的宝贝，只二将到付退回给您，您也可授权只二处理，不再退回。
						</div>
						
					</p>
					<p>
						<span>
							04
						</span>
						卖出后钱款进入钱包
						<div>可提现或在只二购买任意商品</div>
					</p>
				</div>
			</div>
		
			</div>

		</div>
		
	</div>
</template>

<script>
	
	import { swiper, swiperSlide } from 'vue-awesome-swiper'

	export default {
		data() {
			return {
				swiperOption: {
					initialSlide: 0,
					loop: true,
					slidesPerView: 'auto',
					spaceBetween: 30,
					slidesPerGroup: 2,
					pagination: {
						el: '.swiper-pagination',
						clickable: true,
					},
					autoplay: 2000,
					speed: 500,
				},
				popupVisible:true
			}
		},
		//一入页面执行的函数，放这里
		mounted: function() {

			//			var swiper = new Swiper('.swiper-container', {
			//		    slidesPerView: 'auto',
			//		    spaceBetween: 30,
			//		    pagination: {
			//		       el: '.swiper-pagination',
			//		       clickable: true,
			//		      },
			//		    });
		},
		components: {
			swiper,
			swiperSlide,
			
		},

	}
</script>

<style>

</style>