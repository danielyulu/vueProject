<template>
    <div>
      <div id="banner">
           <mt-swipe :auto="5000" class="b_ul">
                  <mt-swipe-item class="b_one pic">
                    <img src="../../assets/banner1.png"/>
                  </mt-swipe-item>
                  <mt-swipe-item class="b_two pic">
                    <img src="../../assets/banner2.png"/>
                  </mt-swipe-item>
                  <mt-swipe-item class="b_three pic">
                    <img src="../../assets/banner3.png"/>
                  </mt-swipe-item>
            </mt-swipe>
        </div>
    </div>
</template>

<script>
    import './selected.scss'
export default {

    
}
</script>