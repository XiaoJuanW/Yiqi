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

</style>
