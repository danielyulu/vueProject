import Vue from 'vue'
import VueRouter from 'vue-router'

import goods_data from '../components/goods_data/goods_data.vue';
import login from '../components/login/login.vue';
import register from '../components/register/register.vue';
import datagrid from '../components/datagrid/datagrid.vue';
import staff_data from '../components/staff_data/staff_data.vue';
import userlist from '../components/userlist/userlist.vue';

var router = new VueRouter({
    routes:[
      {path:'/goods_data',component:goods_data},
      {path:'/userlist',component:userlist},
      {path:'/staff_data',component:staff_data},
      {path:'/login',component:login},
      {path:'/register',component:register}
    ]
  })

  export default router;