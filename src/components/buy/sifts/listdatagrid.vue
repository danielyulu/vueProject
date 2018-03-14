<template>
    <div id="yl_sift">
        <heads></heads>
        <listhead></listhead>
        <listmain :api=myapi :type=mytype></listmain>
        
    </div> 
</template>

<script>
    import axios from 'axios';
    import './sifts.scss';
    import heads from '../head.vue';
    import listhead from './listhead.vue';
    import listmain from './listmain.vue';
    export default {
        data(){
            return{
                myapi:this.api,
                mytype:this.type
            }
        },
         components: {
            heads,
            listhead,
            listmain
        },
        props:['api','type'],
    }
</script>