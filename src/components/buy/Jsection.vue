<template>
    <div>
        <div class="Jsection" v-for="(itema,val) in activityData" @click="link_act">
            <dl>
              <h3>{{itema.activity}}</h3>
              <h2>{{itema.second_title}}</h2>
              <dt>
                    <img :src=itema.carousel_img_large :data-type=itema.activity />
              </dt>
              <dd class="clearfix" >
                <ul class="clearfix">
                    <li v-for="(itemb) in goodsData" v-if="itemb.activity==itema.activity">
                        <img :src=itemb.goods_pto :data-imgid=itemb.id />
                        <h3>{{itemb.goods_trademark}}</h3>
                        <h4>{{itemb.goods_name}}</h4>
                        <span>{{itemb.size}}</span>
                        <p><b>￥{{itemb.sell_price}}</b><s>￥{{itemb.sell_prices}}</s></p>
                    </li>
                    <li class="a_all">
                        <span :data-type=itema.activity :data-src=itema.carousel_img_large>查看全部</span>
                    </li>
                    
                </ul>
              </dd>
            </dl>
        </div>
    </div>
</template>

<script>

    import './selected.scss'
    import axios from 'axios'
export default {
    data(){
    return {
        activityData:[],
        goodsData:[]
    }
    },
    props: ['a_api','g_api'],
    beforeMount(){
                  
        axios.get(this.a_api).then(res => {
                   
                    this.activityData=res.data.data.results;
               });
        axios.get(this.g_api).then(res => {
                   
                    this.goodsData=res.data.data.results;
               });

    },
    methods:{
        link_act(e){
            if(e.target.parentNode.tagName=='DT'){
                //跳转到活动详情
                
                var act=e.target.getAttribute('data-type');
                var imgsrc=e.target.src;
                var aa=imgsrc.split('8080');
                imgsrc='.'+aa[1];               
                act=encodeURI(act);
                imgsrc=encodeURI(imgsrc);
                location.href='#/actdetail?activity='+act+"&imgsrc="+imgsrc;
            }else if(e.target.parentNode.tagName=='LI'){
                
                if(e.target.parentNode.children[0].tagName=='IMG'){
                    //跳转到详情页
                    var key=e.target.parentNode.children[0].getAttribute('data-imgid');
                   
                    location.href ='#/detail?id='+key;
                }else if(e.target.parentNode.children[0].tagName=='SPAN'){
                    //跳转到活动详情
                    var act=e.target.getAttribute('data-type');
                    var imgsrc=e.target.getAttribute('data-src');
                    act=encodeURI(act);
                    imgsrc=encodeURI(imgsrc);
                    location.href='#/actdetail?activity='+act+"&imgsrc="+imgsrc;
                }
            }
        }
    }
}
  



</script>