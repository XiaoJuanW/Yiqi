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
		return {};
	}
};
</script>

<style scoped lang="stylus">
.wrapper {
  width: 95%;
  margin: 0 auto;
}
</style>
