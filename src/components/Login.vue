<template>
  <div class="wrapper">
    <h1>一汽大众大数据资源平台</h1>
    <div class="login-wrap">
      <div class="content">
        <label class="lab">用户名：</label>
        <input id="user-name" type="text" value="yiqi">
      </div>
      <div class="content">
        <label class="lab">密码：</label>
        <input id="password" type="password" value="123">
      </div>
      <router-link to="/main">
        <div class="login" @click="login">登录</div>
      </router-link>
    </div>
  </div>
</template>

<script>
// import { saveToLocal, loadFromLocal } from "@/common/localStore.js";

export default {
	name: "Login",
	data() {
		return {
			msg: "Welcome to Your Vue.js App"
		};
	},
	methods: {
		login: function() {
			if ($("#user-name").val() === "yiqi" && $("#password").val() === "123") {
			} else {
				alert("密码不正确，请重新输入");
			}
			//登录后改变登录状态 isLogin = 1 ；
			window.localStorage.setItem("isLogin", 1);
			window.localStorage.setItem("username", $("#user-name").val());
		}
	}
};
</script>

<style scoped lang="stylus">
.wrapper {
  text-align: center;

  h1 {
    font-size: 50px;
    margin: 120px auto;
  }

  .login-wrap {
    width: 240px;
    margin: 0 auto;
    padding: 50px;
    border: 1px solid lightgray;
    border-radius: 5px;

    .content {
      width: 100%;
      height: 30px;
      position: relative;

      .lab {
        position: absolute;
        left: 0;
      }

      input {
        position: absolute;
        right: 0;
        border: 1px solid lightgray;
        border-radius: 3px;
      }
    }

    .login {
      margin-top: 40px;
      background: #2b83ea;
      padding: 8px;
      border-radius: 5px;
      color: white;
    }
  }
}
</style>
