<template>
    <div>

        <banner></banner>
        <shows api="http://10.3.136.62:88/sample"></shows>
        <Jsection a_api="http://10.3.136.62:88/activity" g_api="http://10.3.136.62:88/sample"></Jsection>
    </div>

</template>

<script>
    
    import banner from './banner.vue';
    import shows from './show.vue';
    import Jsection from './Jsection.vue';
    import './selected.scss';
    export default{
        components:{
            banner,
            shows,
            Jsection
        }
    }
</script>