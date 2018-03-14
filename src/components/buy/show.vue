<template>
    <div>
        <div id="show">
            <ul class="show_top">
              <li><mu-icon value="done" :size="18" color="#000"/>专业正品鉴定</li>
              <li><mu-icon value="done" :size="18" color="#000"/>100%实物拍摄</li>
              <li><mu-icon value="done" :size="18" color="#000"/>免费清洗护理</li>
            </ul>
            <ul class="show_bottom clearfix">
              <li @click="toprefecture('真人展示','./src/assets/j_zhenren.png')">
                  <h3>真人展示</h3>
                  <h4>单品种草推荐</h4>
                  <p><a>去看看></a></p>
                  <span>
                    <img src="../../assets/goodlist1.jpg"/>
                  </span>
              </li>
              <li @click="$router.push('blogger')">
                  <h3>博主专区</h3>
                  <h4>她们都在只二</h4>
                  <p><a>去看看></a></p>
                  <span>
                    <img src="../../assets/goodlist3.jpg"/>
                  </span>
              </li>
              <li @click="toprefecture('全新专区','./src/assets/j_quanxin.png')">
                  <h3>全新专区</h3>
                  <h4>谁说精致会吃土</h4>
                  <p><a>去看看></a></p>
                  <span>
                    <img src="../../assets/goodlist5.jpg"/>
                  </span>
              </li>
              <li @click="toprefecture('特惠专场','./src/assets/j_tehui.png')">
                  <h3>特惠专场</h3>
                  <h4>超强折扣 低至一折</h4>
                  <p><a>去看看></a></p>
                  <span>
                    <img src="../../assets/goodlist7.jpg"/>
                  </span>
              </li>
            </ul>
            <div class="show_brand clearfix">
              <ul>
                <li><img src="../../assets/j_sc1.png"/></li>
                <li><img src="../../assets/j_sc2.png"/></li>
                <li><img src="../../assets/j_sc3.png"/></li>
                <li><img src="../../assets/j_sc4.png"/></li>
                <li><img src="../../assets/j_sc5.png"/></li>
              </ul>              
            </div>
            <div class="shopping-board clearfix">
              <img src="../../assets/j_buybuybuy.png"/>
            </div>
            
        </div>
    </div>
</template>

<script>
    import './selected.scss'
    import axios from 'axios'
  export default {
	data(){
		return{
			
		}
	},
	props: ['api'],
  beforeMount(){
              
    axios.get(this.api).then(res => {
                console.log(res);
           })
  },
  mounted(){
      
      
  },
  methods:{
      toprefecture(act,imgsrc){
        act=encodeURI(act);
        imgsrc=encodeURI(imgsrc);
        location.href='#/actdetail?activity='+act+"&imgsrc="+imgsrc;
      },
  }
}

</script>
