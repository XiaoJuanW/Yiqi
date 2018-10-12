<template>
  <div class="wrapper">
    <ul>
      <router-link to="/main/appList">应用列表</router-link>
      <router-link to="/main/userList">用户管理</router-link>
    </ul>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
	name: "MainView",
	data() {
		return {
			list: [
				{ name: "名称1", dept: "部门1", deptPer: "王依依" },
				{ name: "名称2", dept: "部门2", deptPer: "王尔尔" },
				{ name: "名称3", dept: "部门3", deptPer: "王散散" }
			]
		};
	}
};
</script>

<style scoped lang="stylus">
.wrapper {
  .content {
    width: 800px;
    height: 400px;
  }
}
</style>
