<template>
  <div class="wrapper">
    <el-tabs>
      <el-tab-pane label="应用列表">
        <app-list></app-list>
      </el-tab-pane>
      <el-tab-pane label="用户管理">
        <user-list></user-list>
      </el-tab-pane>
    </el-tabs>
    <div class="loginfo">
      你好{{username}},
      <router-link to="/login">
        <a href="#" @click="logout">退出</a>
      </router-link>
    </div>
  </div>
</template>

<script>
import AppListView from "@/view/AppListView";
import UserListView from "@/view/UserListView";

export default {
	name: "MainView",
	components: {
		"app-list": AppListView,
		"user-list": UserListView
	},
	data() {
		return {
			username: ""
		};
	},
	mounted: function() {
		this.$nextTick(function() {
			this.username = window.localStorage.getItem("username");
		});
	},
	methods: {
		logout() {
			window.localStorage.removeItem("isLogin");
			window.localStorage.removeItem("username");
		}
	}
};
</script>

<style scoped lang="stylus">
.wrapper {
  position: relative;
  width: 95%;
  margin: 0 auto;

  .loginfo {
    z-index: 1000;
    position: absolute;
    right: 0;
    top: 0;
    width: 300px;
    height: 40px;
    line-height: 40px;
    text-align: right;
  }
}
</style>
