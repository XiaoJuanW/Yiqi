<template>
  <div class="app-list-wrapper">
    <el-table :data="list" stripe border :height="tableHeight" style="width: 100%">
      <el-table-column type="index" width="50">
      </el-table-column>
      <el-table-column prop="name" label="名称">
      </el-table-column>
      <el-table-column prop="dept" label="申请部门">
      </el-table-column>
      <el-table-column prop="deptPer" label="申请人">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <router-link to="/appDetail">
            <el-button type="text" size="small">查看</el-button>
          </router-link>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
	name: "MainView",
	data() {
		return {
			tableHeight: window.innerHeight - 75,
			list: [
				{ name: "名称1", dept: "部门1", deptPer: "王依依" },
				{ name: "名称2", dept: "部门2", deptPer: "王尔尔" },
				{ name: "名称3", dept: "部门3", deptPer: "王散散" },
				{ name: "名称1", dept: "部门1", deptPer: "王依依" },
				{ name: "名称2", dept: "部门2", deptPer: "王尔尔" },
				{ name: "名称3", dept: "部门3", deptPer: "王散散" },
				{ name: "名称1", dept: "部门1", deptPer: "王依依" },
				{ name: "名称2", dept: "部门2", deptPer: "王尔尔" },
				{ name: "名称3", dept: "部门3", deptPer: "王散散" },
				{ name: "名称1", dept: "部门1", deptPer: "王依依" },
				{ name: "名称2", dept: "部门2", deptPer: "王尔尔" },
				{ name: "名称3", dept: "部门3", deptPer: "王散散" },
				{ name: "名称1", dept: "部门1", deptPer: "王依依" },
				{ name: "名称2", dept: "部门2", deptPer: "王尔尔" },
				{ name: "名称3", dept: "部门3", deptPer: "王散散" },
				{ name: "名称1", dept: "部门1", deptPer: "王依依" },
				{ name: "名称2", dept: "部门2", deptPer: "王尔尔" },
				{ name: "名称3", dept: "部门3", deptPer: "王散散" },
				{ name: "名称1", dept: "部门1", deptPer: "王依依" },
				{ name: "名称2", dept: "部门2", deptPer: "王尔尔" },
				{ name: "名称3", dept: "部门3", deptPer: "王散散" },
				{ name: "名称1", dept: "部门1", deptPer: "王依依" },
				{ name: "名称2", dept: "部门2", deptPer: "王尔尔" },
				{ name: "名称3", dept: "部门3", deptPer: "王散散" }
			]
		};
	},
	mounted() {
    // 如果直接在方法里写this.那么这个this指window，而不是vue环境，所以无效
    const that = this;
		window.addEventListener("resize", function() {
			that.tableHeight = window.innerHeight - 75;
		});
	}
};
</script>

<style scoped lang="stylus">
</style>
