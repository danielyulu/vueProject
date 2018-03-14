<template>
   <datagrid api="http://10.3.136.62:88/sample" :titlename='titlename' ></datagrid>
</template>

<script>
import './goods_data.scss'
import datagrid from '../datagrid/datagrid'


    export default {
        data() {
            return {
            titlename:['商品名称','品牌','标题','尺寸','原价','现价','商品信息','常见问题','类型','参加活动','操作']
            }
        },
        components:{datagrid}
    }
</script>