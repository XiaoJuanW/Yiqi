<template>
  <div class="wrapper">
    <table>
      <thead>
        <tr>
          <th>序号</th>
          <th>名称</th>
          <th>申请部门</th>
          <th>申请人</th>
          <th>详情</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in list">
          <td>{{index + 1}}</td>
          <td>{{item.name}}</td>
          <td>{{item.dept}}</td>
          <td>{{item.deptPer}}</td>
          <td>
            <router-link to="/appDetail">详情</router-link>
          </td>
        </tr>
      </tbody>
    </table>
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
