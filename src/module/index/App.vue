<template>
  <div id="app">
    <!-- <img src="./images/logo.png"> -->
    <!-- <hello></hello> -->
    用户注册
    <van-cell-group>
      <van-field v-model="user.username" required clearable label="用户名" placeholder="请输入用户名"/>
      <van-field v-model="user.password" type="password" label="密码" placeholder="请输入密码" required />
         <van-button size="large" type="primary" @click="login">大号按钮</van-button>
    </van-cell-group>
 
  </div>
</template>

<script>
// import 'common/css/reset.css';
import { Toast } from 'vant';
import Hello from "components/Hello/Hello";

export default {
  name: "app",
  components: {
    Hello
  },
  data() {
    return {
      user: {
        username:'',
        password:''
      }
    };
  },
  methods: {
    login() {
      console.log("登录成功",this.user.username,this.user.password);
      Toast.success('成功文案');
      location.href = "/module/mainPage.html";
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
