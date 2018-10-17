<template>
  <div>
    <el-button class="add" type="primary" @click="newUser">新增</el-button>
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
    <alert :showAlert="show" @closeAlert="show = false" title="新建用户">
      <div slot="main">
        <!-- 消除弹出框像素模糊bug -->
        <div style="width: 500px;">
          <el-form ref="form" :rules="rules" :model="form" :label-position="labelPosition" label-width="80px">
            <el-form-item label="用户名" prop="name">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
              <el-input v-model="form.pass" autocomplete="off"></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div slot="footer" style="text-align:center;">
          <el-button type="primary" @click="submitForm('form')">立即创建</el-button>
          <el-button @click="resetForm('form')">重置</el-button>
        </div>
      </div>
    </alert>
  </div>
</template>

<script>
import Alert from "@/components/Alert.vue";

export default {
	name: "MainView",
	components: {
		Alert
	},
	data() {
		var validatePass = (rule, value, callback) => {
			if (value === "") {
				callback(new Error("请输入密码"));
			} else {
				var patrn = /^[a-zA-Z0-9]{6,12}$/;
				if (!patrn.exec(this.form.pass)) {
					callback(new Error("密码格式不正确(6-12位字母和数字)"));
				} else {
					callback();
				}
			}
		};
		return {
			show: false,
			labelPosition: "left",
			form: {
				name: "",
				pass: ""
			},
			rules: {
				name: [
					{ required: true, message: "请输入用户名", trigger: "blur" },
					{ min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
				],
				pass: [
					{ required: true, message: "请输入密码", trigger: "blur" },
					{ validator: validatePass, trigger: "blur" }
				]
			},
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
				.catch(() => {});
		},
		// 更改密码
		changePassword(newpsd, row) {
			this.$message({
				type: "success",
				showClose: true,
				message: "该用户的新密码是: " + newpsd
			});
		},
		openDeleteUserBox(index, rows) {
			this.$confirm("即将删除该用户, 是否继续?", "提示", {
				confirmButtonText: "确定",
				cancelButtonText: "取消",
				type: "warning"
			})
				.then(() => {
					this.deleteUser(index, rows);
				})
				.catch(() => {});
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
		newUser() {
			this.show = true;
		},
		submitForm(formName) {
			this.$refs[formName].validate(valid => {
				if (valid) {
					console.log("新建用户：" + this.form.name, this.form.pass);
				} else {
					console.log("error submit!!");
					return false;
				}
			});
		},
		resetForm(formName) {
			this.$refs[formName].resetFields();
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
