<template>
    <div class="a_detail">
        <div class="a_header">
        <span><mu-icon value="navigate_before" @click="$router.go(-1)"/></span>       
        {{act}}
        <span> <mu-icon value="share" /></span>
        </div>
        <div class="a_main">
            <bigimg :imgurl='url'></bigimg>
            <listmain api="http://10.3.136.62:88/classify" :type='act'></listmain>
        </div>
    </div>
</template>

<script>
    import listmain from '../sifts/listmain.vue';
    import bigimg from './bigimg.vue';
     export default{
        components:{
            listmain,
            bigimg
        },
        data(){
            return {
            act:"",
            url:''
            }
        },
        beforeMount(){
            var res = location.hash.split('?')[1].split('&');
            console.log(res);
            var activity=res[0].split('=')[1];
            activity=decodeURI(activity);
            console.log(activity);
            var imgurl=res[1].split('=')[1];
            this.act=activity;
            this.url=imgurl;
            //bb=decodeURI(bb);
            //this.act=bb;
        }
    }
</script>