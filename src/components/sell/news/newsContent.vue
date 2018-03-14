<template>
	<div class="sellcontent">
		<div id="newsbox">
			<ul>
				<!--<li>
					<h3>
						<mu-icon value="date_range"></mu-icon>
						<span>新用户红包</span>
						<span style="float: right;">2018-01-18 11:30</span>
					</h3>
					<p>
						888元新人红包来啦，有效期30天，还不快来看看。
					</p>
				</li>-->
				<li v-for="(item,index) in datalist" :key="item.id">
					<h3>
						<mu-icon value="date_range"></mu-icon>
						<span>{{item.title}}</span>
						<span style="float: right;">{{item.date}}</span>
					</h3>
					<p>
						{{item.content}}
					</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				datalist:[],
			}
		},
		methods:{
			
		},
		mounted:function(){
			var self = this;
			self.$axios({
				url: "http://10.3.136.62:88/caution",
			
			}).then(function(res) {
				console.log(res);
				console.log(res.data.results)
				self.datalist = (res.data.results);
			})
			
		}
		
		
	}
</script>

<style lang="scss">
	#newsbox{
		ul{
			padding: 0.266666rem;
			li{
				padding-top:0.4rem ;
				p{
					margin-top: 0.266666rem;
					margin-left: 0.426666rem;
					background: #F5F5F5;
					width: 7.8rem;
					min-height: 1.333333rem;
					padding: 0.266666rem;
					font-size: 0.353333rem;
					border-radius:0.26666rem ;
				}
			}
			i{
				font-size: 0.533333rem;
				vertical-align: middle;
			}
			span{
				padding-left:0.166666rem ;
				font-size: 0.306666rem;
				vertical-align: middle;
			}
		}
	}
</style>