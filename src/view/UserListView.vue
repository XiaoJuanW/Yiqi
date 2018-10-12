<template>
  <div class="wrapper">
    <table>
      <thead>
        <tr>
          <th>序号</th>
          <th>用户名</th>
          <th>密码</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in list">
          <td>{{index + 1}}</td>
          <td>{{item.name}}</td>
          <td>{{item.pass}}</td>
          <td><a href="#">修改密码</a></td>
        </tr>
      </tbody>
    </table>
    <el-button type="primary">新增</el-button>
    <el-button type="danger">删除</el-button>
  </div>
</template>

<script>

export default {
	name: "MainView",
	data() {
		return {
			list: [
        { name: "用户2", pass: "111"},
				{ name: "用户1", pass: "222"},
				{ name: "用户3", pass: "333"}
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
