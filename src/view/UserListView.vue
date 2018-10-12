<template>
  <div>
    <el-button class="add" type="primary">新增</el-button>
    <el-table :data="list" stripe border :height="tableHeight" style="width: 100%">
      <el-table-column type="index" width="50">
      </el-table-column>
      <el-table-column prop="name" label="用户名">
      </el-table-column>
      <el-table-column prop="pass" label="密码">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="deleteRow(scope.$index, list)">删除</el-button>
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
			tableHeight: window.innerHeight - 125,
			list: [
				{ name: "用户2", pass: "111" },
				{ name: "用户1", pass: "222" },
				{ name: "用户3", pass: "333" },
				{ name: "用户2", pass: "111" },
				{ name: "用户1", pass: "222" },
				{ name: "用户3", pass: "333" },
				{ name: "用户2", pass: "111" },
				{ name: "用户1", pass: "222" },
				{ name: "用户3", pass: "333" },
				{ name: "用户2", pass: "111" },
				{ name: "用户1", pass: "222" },
				{ name: "用户3", pass: "333" },
				{ name: "用户2", pass: "111" },
				{ name: "用户1", pass: "222" },
				{ name: "用户2", pass: "111" },
				{ name: "用户1", pass: "222" },
				{ name: "用户3", pass: "333" },
				{ name: "用户2", pass: "111" }
			]
		};
	},
	methods: {
		deleteRow(index, rows) {
			rows.splice(index, 1);
		}
  },
  mounted() {
    const that = this;
    window.onresize = () => {
      that.tableHeight = window.innerHeight - 125;
    }
  }
};
</script>

<style scoped lang="stylus">
.add {
  float: right;
  margin-bottom: 10px;
}
</style>
