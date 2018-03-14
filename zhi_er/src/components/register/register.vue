<template>
  <div class="register">
    <p>后台管理系统——注册页面</p>
    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
      <el-form-item label="用户名">
        <el-input v-model="formLabelAlign.name" @blur="checkname"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formLabelAlign.region" type="password"></el-input>
      </el-form-item>
      <el-button type="primary" @click="checkall">注册</el-button>
      <a href="#/login">已有帐号</a>
    </el-form>
    <img src="../../assets/bg.jpg" alt="" class="bg">
  </div>
</template>

<script>
import './register.scss'
import axios from 'axios'
import qs from 'qs'
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
      checkall(){
        var baseUrl = url.baseUrl;
        var user = this.formLabelAlign.name;
        var pwd = this.formLabelAlign.region;
        if(pwd == ''){
          this.$alert('密码不得为空', '温馨提示', {
              confirmButtonText: '确定',
              callback: action => {
                this.$message({
                  type: 'info',
                  message: `action: ${ action }`
                });
              }
            });
            return
        }else{
          var self = this;
          axios.post('http://10.3.136.62:88/checkall',
                    qs.stringify({name:user,pwd:pwd}), 
                    {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
                ).then(res => {
            if(res.data.status == true){
              this.$alert('注册成功！请重新登录', '温馨提示', {
                  confirmButtonText: '确定',
                  callback: action => {
                    this.$message({
                      type: 'info',
                      message: `action: ${ action }`
                    });
                    console.log(self);
                    this.$router.push('/login')
                    // window.location.href = baseUrl+'/#/login';
                  }
              });
              
            };
          })
        }
        
      },
      checkname(){
        var user = this.formLabelAlign.name;
        axios.get('http://10.3.136.62:88/checkname',{params:{name:user}}).then(res => {
          // console.log(res.data.results[0])
          var name = res.data.data.results;
          if(name[0] == undefined && user != ''){
          }else{
            this.$alert('用户名不能为空或已存在', '温馨提示', {
              confirmButtonText: '确定',
              callback: action => {
                this.$message({
                  type: 'info',
                  message: `action: ${ action }`
                });
              }
            });
          }
        })
      }
    }
}
</script>

