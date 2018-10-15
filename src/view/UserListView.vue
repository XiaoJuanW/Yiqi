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
          <el-button size="mini" @click="openEditPsdBox(scope.row)">修改密码</el-button>
          <el-button size="mini" type="danger" @click="openDeleteUserBox(scope.$index, list)">删除</el-button>
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
				{ name: "用户1", pass: "111" },
				{ name: "用户2", pass: "222" },
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
		openDeleteUserBox(index, rows) {
			this.$confirm("即将删除该用户, 是否继续?", "提示", {
				confirmButtonText: "确定",
				cancelButtonText: "取消",
				type: "warning"
			})
				.then(() => {
					this.deleteUser(index, rows);
				})
				.catch(() => {
					this.$message({
						type: "info",
						message: "已取消删除"
					});
				});
		},
		openEditPsdBox(row) {
			this.$prompt("请输入密码", "提示", {
				confirmButtonText: "确定",
				cancelButtonText: "取消",
				inputPattern: /^[a-zA-Z0-9]{6,12}$/,
				inputErrorMessage: "密码格式不正确(6-12位字母和数字)"
			})
				.then(({ value }) => {
					this.changePassword(value, row);
				})
				.catch(() => {
					this.$message({
						type: "info",
						message: "取消输入"
					});
				});
		},

		// 删除用户
		deleteUser(index, rows) {
			rows.splice(index, 1);
			this.$message({
				showClose: true,
				message: "删除成功",
				type: "success"
			});
		},
		// 更改密码
		changePassword(newpsd, row) {
			this.$message({
				type: "success",
				message: "该用户的新密码是: " + newpsd
			});
		}
	},
	mounted() {
		const that = this;
		window.onresize = () => {
			that.tableHeight = window.innerHeight - 125;
		};
	}
};
</script>

<style scoped lang="stylus">
.add {
  float: right;
  margin-bottom: 10px;
}
</style>
