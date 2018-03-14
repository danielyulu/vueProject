<template>
    <div>
      <div class="car_main">
        <div class="c_header">
            <div class="c_title">
              <span>
                  <a href="#">
                      <mu-icon value="navigate_before" :size="42" color="#000"  @click='$router.go(-1)'/>
                  </a>
              </span>
              <h2>购物车</h2>
              <span @click="compile">编辑</span>
            </div>
            <div class="c_sell">
              <p>满￥299包邮，还差￥299</p>
            </div>
        </div>
        <ul class="c_goods" @click="checks">
            <li v-for="(value,key) in dataset" :id="value.id" v-if="value.type==0 || value.type==1">
              <mu-icon value="delete_forever" color="red" class="delete" :size="32" @click="deletes(value.id,key,$event)"/>
              <input type=checkbox class="demo-checkbox"/>
              </span>
              <div style="margin-left:50px;">
                <img v-lazy="value.goods_pto" class="pic">
                <div class="c_content" @click="skip">
                  <h3>{{value.goods_trademark}}</h3>
                  <h4>{{value.goods_name}}</h4>
                  <p>{{value.title_name}}<span>{{value.size}}</span></p>
                  <h5><b>{{value.sell_price}}</b><s>{{value.sell_prices}}</s></h5>
                </div>
              </div>
            </li>
        </ul>

          <div class="c_footer">
              <div class="c_total">
                <p>总计<b>￥{{totals}}</b><span>节省 ￥0</span></p>
              </div>
              <div class="c_pay clearfix">

            
              <label @click= "checkall"><input type="checkbox" class="demo-checkbox all"/><span style="font-size:40px;margin-left:50px">全选</span></label>
              <a href="#/order"  @click="updatalist()"><button>结算</button></a>

              </div>
          </div>
        </div>
    </div>
</template>

<script>
    import './car.scss'
    import axios from 'axios'
    import qs from 'qs';
  export default {
    data(){
        return{
            dataset:[],
            totals:0*1
        }
    },
    methods:{
        checks:function(e){
          if(e.target.tagName.toLowerCase() =='input'){
              
            //修改总价
            var li=e.target.closest('li');
            //获取当前价格
            var price=$(li).find('b').html()*1;            
            if(e.target.checked){
              this.totals+=price;
              event.target.parentNode.style.background = '#fefbec';
            }else{
            this.totals-=price;
            event.target.parentNode.style.background = '';
            }
          }

              this.isall();


              //判断是否满足包邮条件
              if(this.totals>=299){
                $('.c_sell p').html('已满足包邮条件');
              }else{
                var dis=299-this.totals;
                $('.c_sell p').html("满￥299包邮，还差￥"+dis);
              }
          },
        skip:function(e){
          var $Li = e.target.closest('li');
          var goodsId = $Li.getAttribute('id');
          axios.get('http://10.3.136.62:88/getorder',{params:{username:this.username}}).then(function (response) {
            var data = response.data.data.results;
            for(var i=0;i<data.length;i++){
              if(data[i].id == goodsId){
                  var id = JSON.parse(data[i].goods_detail).id;
                  location.href ='http://10.3.136.153:8080/#/detail?id='+id;
//                this.$router.push('/detail?id='+id')
              }
            }
          })
          
        },
        checkall:function(e){
            var $all=$('.all');
            //将所有li的checked属性改为true
            var $checkbox=$('.c_goods :checkbox');
           
            $checkbox.prop('checked',$all.get(0).checked);
            //重新计算价格
            var $lis=$('.c_goods li');
            if($all.get(0).checked){
              var total=0;
                for(var i=0;i<$lis.length;i++){
                    var price=$($lis[i]).find('b').html()*1;
                    total+=price;
                }
                this.totals=total;
            }else{
            this.totals=0;

            }
        },
        compile:function(e){

          var $c_goods = $('.c_goods');
          if(e.target.innerHTML=='编辑'){          
            $c_goods.find('li').find('i').css('display','block');
            //编辑提示更改为完成
            e.target.innerHTML="完成";
          }else{
            $c_goods.find('li').find('i').css('display','none');
            e.target.innerHTML="编辑";
          }

        },
        deletes:function(id,index,e){
            
            
            var self =this
            //如果当前商品选中，总价减去当前商品的价格
            console.log(index,$(e.target).next().prop('checked'));
            console.log(this.dataset[index].sell_price);
            if($(e.target).next().prop('checked')){
              this.totals-=this.dataset[index].sell_price*1;
            }
            //将该商品记录从数据库中删除
            axios.post('http://10.3.136.62:88/delete_order',
              qs.stringify({id:id}),
              {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
              ).then(function (response) {
                  self.dataset.splice(index,1)
            })
        },
        updatalist:function(id){

          var goodsID = [];
          var $c_goods = $('.c_goods');
          //获取所有的input
          var $input = $c_goods.find('.demo-checkbox');
          for(var i=0;i<$input.length;i++){
            //将勾选对应的id存入数组
            if($input[i].checked){
              goodsID.push($input[i].closest('li').getAttribute("id")*1);
            }else{
              axios.get('http://10.3.136.62:88/order_type',{params: {id:goodsID,type:1}}).then(function (response) {

              })
            }
          }
            //判断购物车是否为空
            var $c_goods =$('.c_goods');
            if($c_goods.find('li').length != 0 ){
                axios.get('http://10.3.136.62:88/order_type',{params: {id:goodsID,type:1}}).then(function (response) {

                })
            }
            
        },
        isall:function(){
         $('.all').prop('checked',function(){
              var $checkbox=$('.c_goods :checkbox');
              for(var i=0;i<$checkbox.length;i++){
                  if(!$checkbox.eq(i).prop('checked')){
                      return false;
                  }                    
              }
              return true;
         })

      }
    },
      
    beforeMount(){
      this.totals=0
      var self = this;
     
      axios.get('http://10.3.136.62:88/getorder',{params:{username:this.username}}).then(function (response) {
          var item = response.data.data.results;
          item.forEach(function(ss){
            var bb = JSON.parse(ss.goods_detail)
            var orderId = JSON.parse(ss.id);
            var accessory = JSON.parse(ss.type);
            bb.type = accessory;
            bb.id = orderId;
            self.dataset.push(bb);
          })
      })
    },
    mounted:function(){
    	console.log(this.$store.state.username);
    },
	computed:{
		username:function(){
			return this.$store.state.username;
			
		},
	}
}



</script>