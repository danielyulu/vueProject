<template>
  <div id="app">

  		<router-view></router-view>
  		

    <div class="app_title">
      <a class="app_btn" href="#/sell">
        <mu-icon value="monetization_on"></mu-icon>
        <span>卖出</span>
      </a>
      <a class="app_btn" href="#/buy">
        <mu-icon value="favorite_border"></mu-icon>
        <span>购买</span>
      </a>
      <a class="app_btn" href="#/my">
        <mu-icon value="face"></mu-icon>
        <span>我的</span>
      </a>
    </div>
  </div>
</template>

<script>
import './css/common.css'
export default {}
</script>
<style lang="scss">
.app_head{
  display: flex;
}
.app_title{
    height: 100px;
    width: 100%;
    overflow: auto;
    display: flex;
    position: fixed;
    bottom: 0;
    background:#fff;
    a{
      display: block;
      flex:1;
      float: left;
      border-right: 1px solid #ccc;
      text-align: center;
      font-size: 24px;
      z-index: 0;
      //line-height: 100px;

      /*line-height: 100px;*/
      span{
    	/*zby我在这里添加了首页的字体图标*/
    			display: block;
      }
      i{
      	font-size: 0.51rem;
      }
    }
}


</style>


