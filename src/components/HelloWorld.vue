<template>
  <div class="wrapper">
    <h1>一汽大众大数据资源平台</h1>
    <div class="login-wrap">
      <div class="content">
        <label class="lab">用户名：</label>
        <input type="text">
      </div>
      <div class="content">
        <label class="lab">密码：</label>
        <input type="password">
      </div>
      <router-link to="/view/MainViewList">
        <div class="login">登录</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
	name: "HelloWorld",
	data() {
		return {
			msg: "Welcome to Your Vue.js App"
		};
	},
	methods: {
		login: function() {
			console.log("login");
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.wrapper {
  text-align: center;

  h1 {
    font-size: 50px;
    margin-bottom: 100px;
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
