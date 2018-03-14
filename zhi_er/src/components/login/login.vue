<template>
  <div class="login">
    <p>后台管理系统——登录页面</p>
    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
      <el-form-item label="用户名">
        <el-input v-model="formLabelAlign.name"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formLabelAlign.region" type="password"></el-input>
      </el-form-item>
      <el-button type="primary" @click="login">登录</el-button>
      <a href="#/register">未注册？</a>
    </el-form>
    <img src="../../assets/bg.jpg" alt="" class="bg">
  </div>
</template>

<script>
import './login.scss'
import axios from 'axios'
import url from '../../baseUrl/baseUrl'

export default {
  data() {
      return {
        labelPosition: 'left',
        formLabelAlign: {
          name: '',
          region: '',
          type: ''
        }
      }
    },
    methods:{
      login(){
        var baseUrl = url.baseUrl;
        var name = this.formLabelAlign.name;
        var password = this.formLabelAlign.region;
        axios.get('http://10.3.136.62:88/logincheck',{params:{name:name,password:password}}).then(res => {
          var username = res.data.data.results[0];
          if(username == undefined){
            this.$alert('用户名或密码错误', '温馨提示', {
                  confirmButtonText: '确定',
                  callback: action => {
                    this.$message({
                      type: 'info',
                      message: `action: ${ action }`
                    });
                  }
              });
          }else{
            var name = this.formLabelAlign.name;
            var password = this.formLabelAlign.region;
            axios.get('http://10.3.136.62:88/login',{params:{name:name,password:password}}).then(res => {
                if(res.data == 'password_error'){
                  this.$alert('用户名或密码错误', '温馨提示', {
                      confirmButtonText: '确定',
                      callback: action => {
                        this.$message({
                          type: 'info',
                          message: `action: ${ action }`
                        });
                      }
                  });
                  this.formLabelAlign.region = '';
                }else if(res.data == 'password_confirm'){
                  this.$alert('登录成功！', '温馨提示', {
                      confirmButtonText: '确定',
                      callback: action => {
                        this.$message({
                          type: 'info',
                          message: `action: ${ action }`
                        });
                        sessionStorage.setItem('staff_name',name );
                        this.$router.push('/goods_data')
                        // window.location.href = baseUrl+'/#/goods_data';
                      }
                  });
                }
            })
          }

        })
      }
    }
}
</script>

