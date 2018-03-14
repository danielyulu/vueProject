<template>
    <div class="blogger">
        <div class="b_header">
            <span><mu-icon value="navigate_before" @click="$router.go(-1)"/></span>       
            博主专区
            <span> <mu-icon value="share" /></span>
        </div>
        <div class="b_main">
            <div class="b_top">
               <img :src="bigimg" />
            </div>
            <ul class="b_content">
                <li v-for= "(value) in imgurls">
                    <img :src=value />
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    import './blogger.scss';
    export default{
        data(){
            return{
                bigimg:'./src/assets/j_bozhu.png',
                imgurls:['./src/assets/j_bozhu1.png','./src/assets/j_bozhu2.png','./src/assets/j_bozhu3.png','./src/assets/j_bozhu4.png','./src/assets/j_bozhu5.png','./src/assets/j_bozhu6.png']
            }
        }
    }
</script>