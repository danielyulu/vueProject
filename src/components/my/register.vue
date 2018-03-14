<template>
	<div id="sellbox">
		<div class="sellhead">
			<div class="sellhead">
				<ul class="clearfix Nav0">
					<li>
						<mu-icon value="keyboard_arrow_left" @click="$router.go(-1)"></mu-icon>
					</li>
					<li>
						<span>注册REGISTER</span>
					</li>
					<li @click="$router.push('/login')">
						<span>已有账号？</span>
					</li>
				</ul>
			</div>
		</div>
		<!--这里是内容与头部的分界线-->
		<div class="sellcontent">
			<p><span style="font-weight: bold;padding-right: 0.326666rem;">注册</span>REGISTER</p>
			<p>
				<input type="text" placeholder="手机号" v-model="userphone"/>
			</p>
			<p>
				<input type="password" placeholder="密码" v-model="password"/>
			</p>
			<p class="price" @click="login()">
					<span>
						下一步
					</span>
			</p>
		</div>
		<!--尝试vuex失败-->
		<!--<mu-text-field style="color:#fff" :label="VeriCodeLaBel" v-model="VeriCode" @change="VeriCode_LaBel" type="number" icon="phonelink_lock" labelFloat fullWidth />
		<mu-flat-button :label="VeriCodeBtnLaBel" class="VeriCodeBtn" @click="getCode()" primary fullWidth />
		<mu-text-field style="color:#fff" :label="PassWordLaBel" v-model="PassWordValue" @change="PassWord_LaBel" type="password" icon="lock_outline" labelFloat fullWidth/>
		<mu-raised-button @click="login()" :label="LoginBtn" class="Login-Button-One" secondary fullWidth/>
		-->
		
	</div>
</template>

<script>
	import qs from 'qs'
	
	import './../sell/sell.scss'
	export default {
		data(){
			return{
				userphone:'',
				password:'',
			}
		},
		methods:{
			login(){
				//写入表，跳转
				var self = this;
		    	self.$axios({
		    		method:'POST',
		    		url:"http://10.3.136.62:88/user",
		    		data:qs.stringify({
		    						password:self.password*1,
		    						phone:self.userphone,
		    		}),
					headers:{'Content-Type': "application/x-www-form-urlencoded"}
		    		
		    	}).catch(function(err){
		    		console.log(err);
		    	})
		    	self.$router.push('/login')
			}
		},
		mounted:function(){
			
		}
	}
</script>
<style scoped lang="scss">
.price{
	margin-top:0.16rem ;
	text-align: center;
	background-color: #333333;
	padding: 0.426666rem;
	width: 7.266666rem;
	
	span{
		color: #FFFFFF;
		font-size: 0.533333rem;	
	}
}
.sellcontent{
	padding-left: 10%;
	p:nth-child(1){
		padding: 0.526666rem;
		padding-left: 0;
		padding-top: 1.333333rem;
		font-size: 0.533333rem;
		span{
			font-size: 0.56rem;
		}
	}
	p:nth-child(2){
		padding: 0.133333rem;
		border-bottom: 0.013333rem solid #333333;
		width: 7.266666rem;
		font-size: 0.426666rem;
		margin-bottom: 0.666666rem;
	}
	p:nth-child(3){
		padding: 0.133333rem;
		border-bottom: 0.013333rem solid #333333;
		width: 7.266666rem;
		font-size: 0.426666rem;
		margin-bottom: 3.333333rem;
	}
	input{
		outline: none;
	}
}
</style>