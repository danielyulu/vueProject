<template>
    <div id="sellbox">
        <sheader></sheader>
        <scontent></scontent>
    </div>
</template>

<script>
import './sell/sell.scss'
import sheader from "./sell/sellHead.vue"
import scontent from "./sell/sellcontent.vue"
export default {
  	data(){
  		return{
  			
  		}
  	},
  	components:{
  		sheader,
  		scontent,
  	}
}
</script>

