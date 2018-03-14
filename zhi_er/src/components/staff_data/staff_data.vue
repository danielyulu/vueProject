<template>
   <datagrid api="http://10.3.136.62:88/allstaff" :titlename='titlename' ></datagrid>
</template>

<script>
import './staff_data.scss'
import datagrid from '../datagrid/datagrid'


    export default {
        data() {
            return {
            titlename:['员工编号','员工姓名','账户可用性','操作']
            }
        },
        components:{datagrid}
    }
</script>