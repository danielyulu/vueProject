<template>
    <div class="toseek">
        <div class="se_header">
            <div class="h_top" @click="$router.go(-1)">
                <mu-icon value="navigate_before" />
                <label>
                    <mu-icon value="search"/>
                    <input type="text" :value="type"/>
                </label>
            </div>
            <div class="h_bottom">
                <listhead></listhead>
            </div>
        </div>
        <div class="se_main">
            <span>没搜到，换一个试试呗</span>
            <listmain api="http://10.3.136.62:88/search" :type='type'></listmain>
        </div>
    </div>
</template>
<script>
    import './seek.scss';
    import listhead from '../buy/sifts/listhead.vue';
    import listmain from '../buy/sifts/listmain.vue';
    import $ from "jquery";
    export default{
        components:{
            listhead,
            listmain
        },
        data(){
            return{
                type:'',
            }
        },
        beforeMount(){
            var url=location.hash;

            console.log(url);
            var data=url.split('?')[1].split('=')[1];
            console.log(data);
            this.type=decodeURI(data);
        },
        mounted(){
            this.$nextTick(function(){
                console.log('挂载完成');
                var $li=$('#main').children().get(0).children;
                console.log($li,$li.length);
            });
        }
    }
</script>