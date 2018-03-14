<template>
	<div id="sellbox">
		<div class="sellhead">
			<div class="sellhead">
				<ul class="clearfix Nav0">
					<li>
						<mu-icon value="keyboard_arrow_left" @click="$router.push('/')"></mu-icon>
					</li>
					<li>
						<span>登录LOGIN</span>
					</li>
					<li @click="$router.push('/register')">
						<span>
							还没有账号？
						</span>
					</li>
				</ul>
			</div>
		</div>
		<!--这里是内容与头部的分界线-->
		<div class="sellcontent">
			<p><span style="font-weight: bold;padding-right: 0.326666rem;">登录</span>LOGIN</p>
			<p>
				<input type="text" placeholder="手机号" v-model="userphone" />
			</p>
			<p>
				<input type="password" placeholder="密码" v-model="password" />
			</p>
			<p class="price" @click="logining()">
				<span>
						登录
				</span>
			</p>
		</div>

	</div>
</template>

<script>
	import './../sell/sell.scss';
	import qs from 'qs';
	export default {
		data() {
			return {
				userphone: '',
				password: ''
			}
		},
		methods:{
			logining(){
				var self = this;
				self.$axios({
					url:'http://10.3.136.62:88/check_user',
					params:{
						phone:self.userphone,
						password:self.password,
					}
				}).then(function(res){

					if(res.data){
						var datalist = res.data.data.results;
						console.log(datalist[0]);
						self.$store.state.add_time = datalist[0].add_time;
						self.$store.state.address = datalist[0].address;
						self.$store.state.phone = datalist[0].phone;
						self.$store.state.username = datalist[0].username;
						self.$store.state.head_img = datalist[0].head_img;
						self.$store.state.userid = datalist[0].id;
						self.$store.state.token = true;
						
						self.$router.push('/my');
						
					}
				})
			}
		}
	
	}
</script>
<style scoped lang="scss">
	.price {
		margin-top: 0.16rem;
		text-align: center;
		background-color: #333333;
		padding: 0.426666rem;
		width: 7.266666rem;
		span {
			color: #FFFFFF;
			font-size: 0.533333rem;
		}
	}
	
	.sellcontent {
		padding-left: 10%;
		p:nth-child(1) {
			padding: 0.526666rem;
			padding-left: 0;
			padding-top: 1.333333rem;
			font-size: 0.533333rem;
			span {
				font-size: 0.56rem;
			}
		}
		p:nth-child(2) {
			padding: 0.133333rem;
			border-bottom: 0.013333rem solid #333333;
			width: 7.266666rem;
			font-size: 0.426666rem;
			margin-bottom: 0.666666rem;
		}
		p:nth-child(3) {
			padding: 0.133333rem;
			border-bottom: 0.013333rem solid #333333;
			width: 7.266666rem;
			font-size: 0.426666rem;
			margin-bottom: 3.333333rem;
		}
		input {
			outline: none;
		}
	}
</style>