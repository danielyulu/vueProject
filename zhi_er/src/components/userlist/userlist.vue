<template>
   <datagrid api="http://10.3.136.62:88/getuser" :titlename='titlename' ></datagrid>
</template>

<script>
import './userlist.scss'
import datagrid from '../datagrid/datagrid'


    export default {
        data() {
            return {
            titlename:['用户名','手机号','地址','账户创建时间','操作']
            }
        },
        components:{datagrid}
    }
</script>