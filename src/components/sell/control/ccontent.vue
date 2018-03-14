<template>
	<div class="sellcontent">
		<ul class="navbox">


			<li>
				<mt-tab-item  @click.native.prevent="active = 'tab-container1'"><router-link to='/control'>全部</router-link></mt-tab-item>
			</li>
			<li>
				<mt-tab-item  @click.native.prevent="active = 'tab-container2'"><router-link to='/control/cadd'>待寄出</router-link></mt-tab-item> 	
			</li>
			<li>
				<mt-tab-item  @click.native.prevent="active = 'tab-container3'"><router-link to='/control/cprice'>已报价</router-link></mt-tab-item>  
				
			</li>
			<li>
				<mt-tab-item  @click.native.prevent="active = 'tab-container4'"><router-link to='/control/alreadypush'>上架宝贝</router-link></mt-tab-item> 	
			</li>
			
			
		</ul>
		<div class="page-tab-container">
			<mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>
				<!--全部组件-->
				<mt-tab-container-item id="tab-container1">
					<!--<cadd></cadd>-->
					<cprice></cprice>
					<alreadypush></alreadypush>
					<!--<router-view></router-view>-->
				</mt-tab-container-item>
				<!--待寄出组件-->
				<mt-tab-container-item id="tab-container2">
					<cadd></cadd>
					<!--<router-view></router-view>-->
				</mt-tab-container-item>
				<!--报价组件-->
				<mt-tab-container-item id="tab-container3">
					<cprice></cprice>
					<!--<router-view></router-view>-->
					
				</mt-tab-container-item>
				<!--上架宝贝组件-->
				<mt-tab-container-item id="tab-container4">
					<alreadypush></alreadypush>
					<!--<router-view></router-view>-->
				</mt-tab-container-item>
				
				
			</mt-tab-container>
			
		</div>

	</div>
</template>

<script>
	import { Navbar, TabItem, TabContainer, TabContainerItem } from 'mint-ui';
	import cadd from './cAdd.vue';
	import cprice from './cprice.vue';
	import alreadypush from './alreadypush.vue'

	
	export default {

		data() {
			return {
				name:'page-tab-container',
				
				active:this.$store.state.text1,
				//tab-container1
			};
		},
		methods: {
			change() {

			}
		},
		components: {
			TabContainer,
			TabContainerItem,
			Navbar,
			TabItem,
			//待寄出的东西
			cadd,
			//报价的组件
			cprice,
			//已上架的组价
			alreadypush,

		},
		
	};
</script>

<style lang="scss">
	.sellcontent {
		.navbox {
			background-color: #FFFFFF;
			padding: 0.4rem;
			width: 100%;
			li {
				
				color: #333333;
				.mint-tab-item-label {
				    color: #333333;
				    font-size: 0.426666rem;
				    line-height: 1;
				}
				a:active, a:hover {
    				border-bottom: 0.04rem solid #FD5C02;
    				color: #FD5C02;
				}
				a{
					color: #333333;
				}
				
			}
		}
	}
</style>