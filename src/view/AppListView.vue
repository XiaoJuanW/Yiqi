<template>
  <el-table :data="list" stripe border height="500" style="width: 100%">
    <el-table-column type="index" width="50">
    </el-table-column>
    <el-table-column prop="name" label="名称">
    </el-table-column>
    <el-table-column prop="dept" label="申请部门">
    </el-table-column>
    <el-table-column prop="deptPer" label="申请人">
    </el-table-column>
    <el-table-column fixed="right" label="操作">
      <template slot-scope="scope">
        <router-link to="/appDetail">
          <el-button type="text" size="small">查看</el-button>
          <!-- <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button> -->
        </router-link>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
	name: "MainView",
	data() {
		return {
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
	}
};
</script>

<style scoped lang="stylus">
.wrapper {
  table {
    width: 90%;
    margin: 20px auto;

    tr {
      height: 35px;
    }

    th, td {
      border: 1px solid lightgray;
      text-align: center;
    }
  }
}
</style>
