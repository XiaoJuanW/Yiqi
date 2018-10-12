<template>
  <div class="wrapper">
    <el-table :data="list" stripe border height="500" style="width: 100%">
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
    <el-button type="primary">新增</el-button>
  </div>
</template>

<script>
export default {
	name: "MainView",
	data() {
		return {
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
				{ name: "用户3", pass: "333" }
			]
		};
	},
	methods: {
		deleteRow(index, rows) {
			rows.splice(index, 1);
		}
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
