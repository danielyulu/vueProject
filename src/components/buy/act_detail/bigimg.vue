<template>
    <div class="a_img">
        <img :src='url' />
    </div>
</template>
<script>
   import './act_detail.scss'; 
   export default{
    data(){
        return {
            url:this.imgurl
        }
    },
    props:['imgurl'],
    beforeMount(){
        this.imgurl=decodeURI(this.imgurl);
    }
   }
</script>