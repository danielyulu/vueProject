<template>

    <div id="goods">
        <heads></heads>
        <selected class="selected"></selected>
        <div class="b_footer"></div>
        
    </div>
</template>

<script>
    import heads from './head.vue';
    import selected from './selected.vue';
    export default{
        components: {
            heads,
            selected
        },
        methods:{
            incrementTotal:function(event){
                var item = event.target.parentNode.children;
                for(var i=0;i<item.length;i++){
                    item[i].style.borderBottom="";
                }
                event.target.style.borderBottom = "1px solid red";
            },
            aa(){
            	console.log(666);
            }
        },
        mounted(){
        	window.addEventListener('scroll',this.aa);
        }
    }
</script>

