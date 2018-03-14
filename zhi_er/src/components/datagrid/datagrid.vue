<template>
    <div class="datagrid">
        <p>后台管理系统</p>
        <el-container style="height: 600px; border: 1px solid #eee">
            <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
                    <el-menu :default-openeds="['1', '3']">
                    <el-submenu index="1">
                        <template slot="title"><i class="el-icon-message"></i>员工管理</template>
                        <el-menu-item-group>
                        <el-menu-item index="1-1">
                            <router-link style="text-decoration:none;" to="/staff_data">
                                员工账户
                            </router-link>
                        </el-menu-item>
                        <!-- <el-menu-item index="1-2">选项2</el-menu-item> -->
                        </el-menu-item-group>
                        <!-- <el-menu-item index="1-3">选项3</el-menu-item> -->
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title"><i class="el-icon-menu"></i>商品数据</template>
                        <el-menu-item-group>
                        <el-menu-item index="2-1">
                            <router-link style="text-decoration:none;" to="/goods_data">
                                商品列表
                            </router-link>
                        </el-menu-item>
                        <!-- <el-menu-item index="2-2">选项2</el-menu-item> -->
                        </el-menu-item-group>
                        <!-- <el-menu-item index="2-3">选项3</el-menu-item> -->
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title"><i class="el-icon-setting"></i>用户数据</template>
                        <el-menu-item-group>
                        <el-menu-item index="3-1">
                            <router-link to="/userlist">用户列表</router-link>
                        </el-menu-item>
                        <!-- <el-menu-item index="3-2">选项2</el-menu-item> -->
                        </el-menu-item-group>
                        <!-- <el-menu-item index="3-3">选项3</el-menu-item> -->
                    </el-submenu>
                    </el-menu>
            </el-aside>
            
            <el-container>
                <el-header style="text-align: right; font-size: 12px">
                <el-dropdown>
                    <i class="el-icon-setting" style="margin-right: 15px"></i>
                    <el-dropdown-menu slot="dropdown">
                    <!-- <el-dropdown-item>查看</el-dropdown-item> -->
                    <el-dropdown-item>新增</el-dropdown-item>
                    <el-dropdown-item ><div @click="checkout">退出</div></el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <span v-text="staff_name"></span>
                </el-header>
                
                <el-main>
                    <div class="input-group" style="width:500px;margin-left:612px;">
                    <input type="text" class="form-control" aria-label="..." style="width:300px;">
                    <div class="input-group-btn" style="display:inline-block;">
                        <button type="button" class="btn btn-default">搜索</button>
                        <div class="dropdown"  style="display:inline-block;">
                        <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                            搜索条件
                            <span class="caret"></span>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                            <li v-for="value in titlename" v-if="value !== '操作'"  v-text="value"></li>
                            <!-- <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li role="separator" class="divider"></li>
                            <li><a href="#">Separated link</a></li> -->
                        </ul>
                        </div>
                    </div>
                    </div>

                    <br>

                    <table  class="table table-bordered">
                        <thead>
                            <tr>
                                <td v-for="value in titlename" v-text="value" style="font-weight:600;font-size:16px;"></td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(obj,index) in dataset"  class="tr">
                                <td v-for="(value,key) in obj"  v-if="key!=='goods_pto' && key!=='staff_password' && key!=='head_img'" v-show="key != 'id'" class="td">
                                    <span v-text="value"></span>
                                </td>
                                <td>
                                    <button type="button" class="btn btn-primary">编辑</button>
                                    <button type="button" class="btn btn-danger">删除</button>
                                    </td>
                            </tr>
                        </tbody>
                    </table>
                </el-main>

            </el-container>
        </el-container>
    </div>
</template>

<script>
import './datagrid.scss'
import axios from 'axios'
import qs from 'qs'
import url from '../../baseUrl/baseUrl'

export default {
    data() {
      return {
         dataset: [],
         staff_name:sessionStorage.getItem('staff_name')
      }
    },
    props:['api','titlename'],
    beforeMount(){
        var baseUrl = url.baseUrl;
        if(this.staff_name == undefined){
            this.$alert('请先登录！', '温馨提示', {
                confirmButtonText: '确定',
                callback: action => {
                this.$message({
                    type: 'info',
                    message: `action: ${ action }`
                });
                this.$router.push('/login')
                }
            });
            return;
        }
        axios.get(this.api,{params:{}}).then(res => {
            var data = res.data.data.results;

            data.forEach(function(item){
                this.dataset.push(item)
            }.bind(this))
        })
    },
    updated(){
        var baseUrl = url.baseUrl;
        if(location.hash == '#/staff_data'){
            this.staff_action()
        }else if(location.hash == '#/goods_data'){
            this.goods_action()
        }else if(location.hash == '#/userlist'){
            this.user_action()
        }
    },
    methods:{
        checkout(){
            var baseUrl = url.baseUrl;
            sessionStorage.removeItem('staff_name')
            this.$router.push('/login')
        },
        staff_action(){
            var vue = this;
            $('.btn-danger').click(function(){
                var id = this.parentNode.parentNode.children[0].innerText;
                
                if(this.parentNode.parentNode.children[1].innerText == 'admin'){
                    vue.$alert('管理员账户无法删除', '温馨提示', {
                        confirmButtonText: '确定',
                        callback: action => {
                            vue.$message({
                            type: 'info',
                            message: `action: ${ action }`
                            });
                        }
                    });
                    return 
                }

                axios.post('http://10.3.136.62:88/delete_staff',
                    qs.stringify({id:id}), 
                    {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
                ).then(res => {
                    console.log(res)
                })
                //删除节点
                
                this.parentNode.parentNode.remove();
            })
            $('.btn-default').click(function(){
                // console.log($('.form-control').val())
                if($('.form-control').val().trim() == ''){
                        $('.tr').css({'display':'table-row'})
                        return
                    }
                $('.tr').each(function(idx,ele){
                    // $(ele).removeAttr("display");
                    $(ele).css({'display':'table-row'})
                    if(ele.children[0].innerText !== $('.form-control').val()){
                        $(this).css({'display':'none'})
                    }
                    
                })
            })
        },
        goods_action(){
            $('.btn-danger').click(function(){
                var id = this.parentNode.parentNode.children[8].innerText;

                axios.post('http://10.3.136.62:88/delete_goods',
                    qs.stringify({id:id}), 
                    {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
                ).then(res => {
                    console.log(res)
                })

                //删除节点
                this.parentNode.parentNode.remove();
            })
        },
        user_action(){
            $('.btn-danger').click(function(){
                var id = this.parentNode.parentNode.children[0].innerText;
                
                axios.post('http://10.3.136.62:88/delete_user',
                    qs.stringify({id:id}), 
                    {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
                ).then(res => {
                    console.log(res)
                })

                //删除节点
                this.parentNode.parentNode.remove();
            })
        }
    }
  };
</script>
