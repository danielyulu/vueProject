<template>
    <div>
        <div class="s_main">
            <div class="s_title clearfix">
                <div class="s_search">
                    <mu-icon value="search" @click="toseek"/>
                    <input type="text" placeholder="简单清新少女心"/>
                </div>
                <span @click="$router.push('/buy')">取消</span>
            </div>
            <ul class="s_history clearfix" @click="Search">
                <h3>历史记录<span @click="clear">清空</span></h3>
                <li v-for="(value,index) in datahistory">{{value}}</li>
            </ul>
            <ul class="s_content clearfix" @click="toSearch">
                <h3>大家都在搜</h3>
                <li v-for="(value,index) in dataset">{{value}}</li>
                
            </ul>
        </div>
    </div>
</template>

<script>
import './search.scss'
export default {
   data(){
    return {
        dataset:['Clone','高领','外套','GUCCI','Dior','Louic Vuitton(LV)','阔腿裤','大衣','Pinko','斗篷','靴','羽绒服','运动鞋','高跟鞋','Micheal Kors(MK)','相机包','Tiffany & Co'],
        datahistory:['Clone','高领'],
    }
   },
   methods:{
        clear:function(){
            this.datahistory=[];
            $('.s_history').hide();
        },
        toSearch:function(e){
            console.log(e.target.tagName);
            if(e.target.tagName=='LI'){
                $('.s_search input').val(e.target.innerText);
                //判断当前是否存在
                if(this.datahistory.indexOf(e.target.innerText)>-1){
                //存在先删除
                this.datahistory.splice(this.datahistory.indexOf(e.target.innerText),1);
                }
                this.datahistory.unshift(e.target.innerText);
                $('.s_history').show();
            }
            this.toseek();
        },
        Search:function(e){
        if(e.target.tagName=='LI'){
        
            $('.s_search input').val(e.target.innerText);
            this.toseek();
        }
        },
        toseek:function(){
            var data=$('.s_search input').val();
            data=decodeURI(data);
            console.log(data);
//          	错误写法
//          location.href ='#/seek?data='+data;
            this.$router.push({path:'/seek',query:{data:data}})
        }
   },
}

</script>