<template>
    <div id="detail">
        <div id="goods_head">
            <a class="goods_head_l"><mu-icon value="keyboard_arrow_left" @click='$router.go(-1)'></mu-icon></a>
            <a class="goods_head_r">
                <mu-icon value="share"></mu-icon>
                <a href="#/car"><mu-icon value="shopping_cart"></mu-icon></a>
            </a>
        </div>
        <div id="goods_main" v-if="b[0]">
            <div style="text-align:center;"><img :src="b[0].goods_pto" @click=""></div>
            <div id="goods_foot">
            <div class="goods_foot_t">
                <p style="font-size:0.4rem;line-height:1.04rem;">{{b[0].goods_trademark}}</p>
                <p style="font-size:36px;line-height:1.04rem;font-weight:bold">{{b[0].goods_name}}</p>
                <p>{{b[0].title_name}}</p>
                <p>{{b[0].size}}</p>
                <p style="color:#E98345">￥{{b[0].sell_price}}<span>￥{{b[0].sell_prices}}</span></p> 
            </div>
            <div class="goods_foot_c">
                <div><mu-icon value="done"></mu-icon><span>专业正品鉴定</span></div>
                <div><mu-icon value="done"></mu-icon><span>100%实物拍摄</span></div>
                <div><mu-icon value="done"></mu-icon><span>免费清洗护理</span></div>
                </div>
            </div>
            <div class="propertys">
                <span style="border-bottom:1px solid #E6E6E6;">时髦指数</span>
                <span>品牌属性 轻奢品牌</span>
            </div>
            <div class="messages">
                <span>商品信息</span>
                <div style="padding:27px 0  0 32px;">
                    <tr>成色
                        <td>全新</td>
                    </tr>
                    <tr>瑕疵
                        <td>专柜陈列痕迹 细微放置痕迹</td>
                    </tr>
                    <tr>款式
                        <td>单肩包 斜挎包</td>
                    </tr>
                    <tr>材质
                        <td>{{b[0].goods_info}}</td>
                    </tr>
                    <tr>重量
                        <td>585g</td>
                    </tr>
                    <tr style="line-height:90px;">配件
                        <td>防尘袋 肩带 (不可调节) 原装盒说明书 吊牌</td>
                    </tr>
                    <ul>尺寸 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;宽 21cm
                        <li>高 12.5cm</li>
                        <li>底边宽 6cm</li>
                        <li>肩带长度 110cm</li>
                        <li>宽 21cm</li>
                    </ul>
                </div>
            </div>
            <div class="messages_b">
                <p>常见问题</p>
                <div>
                <span>划线价格</span>
                <span>指商品的专柜价、吊牌价、正品零售价、厂商指导价或该商品的曾经展示过的销售价等，并非原价，仅供参考</span>
                </div>
                <div>
                <span>色差问题</span> 
                <span>只二所有在售物品均为实物拍摄，但难免会因灯光或显示设备等原因出现略微色差，宝贝颜色一律以实物为准</span>
                </div>
                <div>
                <span>正品鉴定</span>
                <span>只二所有商品均经专业鉴定师鉴定并有华泰保险承担，保证正品，所有包装均接受申请“中国检验认证（集团）有限公司（CCIC鉴定）”。请放心购买</span>
                </div>
                <div>
                <span>退货政策</span>
                <span>该商品不支持退换货，如有疑问请在签收后24小时内联系客服，且务必保证商品完整（未拆吊牌，未拆封扣）。</span>
                </div>
            </div>
            <div class="prts"></div>
        </div>
        <div id="goods_foots">
            <div class="shops" @click="shopping(b[0].id)">
                加入购物车
            </div>
        </div>
        <div class="popup">
            您已添加过此商品
        </div>
        <div class="flew">
            
        </div>
    </div>
</template>
<script>
    import axios from 'axios';
    import './detail.scss';
    
    export default {
        data(){
            return {
                b:[],
                cc:[]
            }
        },
        mounted(){
        	
            var self = this;
            var bb = location.hash.split('?')[1].split('=')[1];
            axios.get('http://10.3.136.62:88/detail',{params: {id: bb,username:this.username}}).then(function (response) {
                 self.b = response.data.data.results;
                 //console.log(self.b )
            })
        },
        methods:{
			
            shopping:function(id){
                axios.get('http://10.3.136.62:88/order',{params:{list:(this.b)[0],username:this.username}}).then(function (response) {
                    if(response.data.status == true){
                        var $flew = $('.flew');
                        $flew.animate({
                            top:0,
                            right:0,
                            opacity:0
                        })
                    }
                    if(response.data == false){
                        var $popup = $('.popup');
                        $popup.fadeIn(600).fadeOut(2000);
                    }
                })
            },
        },
        computed:{
			username:function(){
				return this.$store.state.username;
				
			},
		}
    }
</script>