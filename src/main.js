import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import axios from 'axios'

//zby全局使用的基础地址
axios.defaults.baseURL = "http://10.3.136.153:8080";
//zby全局使用axios
Vue.prototype.$axios = axios ;


//zby预加载
import VueLazyLoad from 'vue-lazyload';
Vue.use(VueLazyLoad,{
    error:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516803351126&di=05de81f8e5693d48c7b382aa804f862e&imgtype=0&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F1ad5ad6eddc451dab453981cb4fd5266d116329b.jpg',
    loading:require('./assets/loading.gif'),
//  preLoad: 1,
    attempt: 1
});

//zby新建一个状态管理
import Vuex from 'vuex';
Vue.use(Vuex);



const store = new Vuex.Store({
	state:{
		//zby测试
		text1:'tab-container2',
		userid:'',
	},
	mutations: {
        LoginPhone (state, phone) {
            state.UserPhone = phone;
            sessionStorage.setItem('userphone', JSON.stringify(state.UserPhone))
        }
    },
})


//zby:为了在全局环境中使用vue
window.Vue = Vue;

//引入组件的位置
import sell from './components/sell.vue'
import my from './components/my/my.vue'
import unpaid from './components/my/unpaid/unpaid.vue'

import setting from './components/my/setting.vue'
import sifts from './components/buy/sifts/sifts.vue'
import buy from './components/buy/buy.vue';
import message from './components/message/message.vue';
import howToSell from'./components/sell/howToSell.vue';
import search from './components/search/search.vue';
import news from './components/sell/news.vue';
import detail from './components/buy/detail/detail.vue';
import topush from './components/sell/topush.vue';
import car from './components/car/car.vue';
import order from './components/order/order.vue';
import addaddress from './components/order/add_address/add_address.vue';
import address from './components/order/add_address/address.vue';

import girlclothes from './components/buy/girlclothes/girlclothes.vue';
import shoes from './components/buy/shoes/shoes.vue';
import accessory from './components/buy/accessory/accessory.vue';
import advice from './components/advice/advice.vue'
import control from './components/sell/control.vue';
import actdetail from './components/buy/act_detail/act_detail.vue'; 

import login from './components/my/login.vue';
import register from './components/my/register.vue';

//zby子路由
import cadd from './components/sell/control/cAdd.vue';
import alreadypush from './components/sell/control/alreadypush.vue';
import cprice from './components/sell/control/cprice.vue';
import seek from './components/search/seek.vue';
import blogger from './components/buy/blogger/blogger.vue';



//zby：引入Muse-Ui
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI)


// cls引入mint-ui
import { Swipe, SwipeItem } from 'mint-ui';
import 'mint-ui/lib/style.css';
import { Toast } from 'mint-ui';
Vue.use({ Swipe, SwipeItem ,Toast});
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

//zby引入jquery
import $ from "jquery";
window.$ = window.jQuery = $ ;






//zby:使用轮播图
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
Vue.use(VueAwesomeSwiper)
//zby页面切换效果
import MintUI from 'mint-ui';
Vue.use(MintUI);


Vue.use(VueRouter);

var router  = new VueRouter({
  routes:[
  	{path:'/',component:buy},
    {path:'/sell',component:sell,name:'卖出页面主键',meta:{
    	requireAuth:true,
    }},
    {path:'/howtosell',component:howToSell,name:'卖出教学'},
    {path:'/my',component:my,meta:{
    	requireAuth:true,
    }},
    {path:'/buy',component:buy},
    {path:'/setting',component:setting},
    {path:'/girlclothes',component:girlclothes},
    // {path:'/message',component:message},
    {path:'/update',component:{}},
    {path:'/unpaid',component:unpaid},

    {path:'/search',component:search},
    {path:'/news',component:news,name:'信息接受页面'},
    {path:'/sifts',component:sifts},
    {path:'/detail',component:detail},
    {path:'/car',component:car,meta:{requireAuth:true,}},
    {path:'/order',component:order},
    {path:'/addaddress',component:addaddress},
    {path:'/address',component:address},
    {path:'/shoes',component:shoes},
    {path:'/accessory',component:accessory},
    {path:'/topush',component:topush,name:'商品提交页面'},
	{path:'/advice',component:advice,name:'品牌建议'},
	{path:'/blogger',component:blogger},


	{
		path:'/control',
		component:control,
		name:'用户操控页面',
		children:[{
			path:'cadd',
			component:cadd,
		},{
			path:'cprice',
			component:cprice,
		},{
			path:'alreadypush',
			component:alreadypush,
		}]
	},
  	{path:'/actdetail',component:actdetail},
	{path:'/login',component:login},
	{path:'/register',component:register},

  	{path:'/seek',component:seek},



  ]
})

router.beforeEach((to,from,next)=>{
	if(to.meta.requireAuth){
		if(store.state.token){
			next();
		}else{
			next({
				path:'/login',
				query:{redirect:to.fullPath}
			})
		}
	}else{
		next();
	}
})

new Vue({
  el: '#app',
  router,
  store,
  create(){
  	window.scope = this.$store.state;
  	window.$store = this.$store;
  },
  render: h => h(App)
})







