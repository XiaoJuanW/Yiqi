<template>
  <table class="tg">
    <tr>
      <td class="tg-header" colspan="8">大数据资源申请表</td>
    </tr>
    <tr>
      <td class="tg-subheader">*申请日期</td>
      <td class="" colspan="3">
        <el-date-picker v-model="applicationDate" type="date"></el-date-picker>
      </td>
      <td class="tg-subheader">*发布日期</td>
      <td class="" colspan="3">
        <el-date-picker v-model="releaseDate" type="date"></el-date-picker>
      </td>
    </tr>
    <tr>
      <td class="tg-subheader">*申请人</td>
      <td class="">
        <el-input v-model="applicant"></el-input>
      </td>
      <td class="tg-subheader">所属部门</td>
      <td class="">
        <el-input v-model="department"></el-input>
      </td>
      <td class="tg-subheader">*联系电话</td>
      <td class="">
        <el-input v-model="tel"></el-input>
      </td>
      <td class="tg-subheader">*E-mail</td>
      <td class="">
        <el-input v-model="email"></el-input>
      </td>
    </tr>
    <tr>
      <td class="tg-subheader" colspan="8">资源申请</td>
    </tr>
    <tr>
      <td class="tg-subheader">*数据分类</td>
      <td class="tg-subheader">*源系统</td>
      <td class="tg-subheader">*数据结构</td>
      <td class="tg-subheader">*存量全量</td>
      <td class="tg-subheader">*日增量</td>
      <td class="tg-subheader">*实时性要求</td>
      <td class="tg-subheader">吞吐量（单位秒）</td>
      <td class="tg-subheader">*离线/在线</td>
    </tr>
    <tr>
      <td class="">
        <el-select v-model="dataType">
          <el-option v-for="item in dataTypeOptions" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </td>
      <td class="">
        <el-input v-model="systemSource"></el-input>
      </td>
      <td class="">
        <el-select v-model="dataStructure">
          <el-option v-for="item in dataStructureOptions" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </td>
      <td class="">
        <el-input v-model="stock"></el-input>
      </td>
      <td class="">
        <el-input v-model="diurnalIncrement"></el-input>
      </td>
      <td class="">
        <el-select v-model="realTime">
          <el-option v-for="item in realTimeOptions" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </td>
      <td class="">
        <el-input v-model="throughput"></el-input>
      </td>
      <td class="">
        <el-select v-model="line">
          <el-option v-for="item in lineOptions" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </td>
    </tr>
    <tr>
      <td class="tg-subheader" colspan="8">组件申请</td>
    </tr>
    <tr>
      <td class="tg-subheader">类别</td>
      <td class="tg-subheader">组件</td>
      <td class="tg-subheader">编程语言</td>
      <td class="tg-subheader" colspan="2">用途</td>
      <td class="tg-subheader" colspan="3">详细描述</td>
    </tr>
    <tr>
      <td class="tg-subheader" rowspan="3">数据库</td>
      <td class="tg-subheader">
        <el-checkbox label="HBase" name="type"></el-checkbox>
      </td>
      <td class="">
        <el-select v-model="programingLanguage">
          <el-option v-for="item in programingLanguageOptions" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </td>
      <td class="" colspan="2">
        <el-input></el-input>
      </td>
      <td class="" colspan="3">
        <el-input></el-input>
      </td>
    </tr>
    <tr>
      <td class="tg-subheader">
        <el-checkbox label="MongoDB" name="type"></el-checkbox>
      </td>
      <td class="">
        <el-select v-model="programingLanguage">
          <el-option v-for="item in programingLanguageOptions" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </td>
      <td class="" colspan="2">
        <el-input></el-input>
      </td>
      <td class="" colspan="3">
        <el-input></el-input>
      </td>
    </tr>
    <tr>
      <td class="tg-subheader">
        <el-checkbox label="Neo4j" name="type"></el-checkbox>
      </td>
      <td class="">
        <el-select v-model="programingLanguage">
          <el-option v-for="item in programingLanguageOptions" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </td>
      <td class="" colspan="2">
        <el-input></el-input>
      </td>
      <td class="" colspan="3">
        <el-input></el-input>
      </td>
    </tr>
    <tr>
      <td class="tg-subheader" rowspan="2">SQL</td>
      <td class="tg-subheader">
        <el-checkbox label="Spark SQL" name="type"></el-checkbox>
      </td>
      <td class="">
        <el-select v-model="programingLanguage">
          <el-option v-for="item in programingLanguageOptions" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </td>
      <td class="" colspan="2">
        <el-input></el-input>
      </td>
      <td class="" colspan="3">
        <el-input></el-input>
      </td>
    </tr>
    <tr>
      <td class="tg-subheader">
        <el-checkbox label="Impala" name="type"></el-checkbox>
      </td>
      <td class="">
        <el-select v-model="programingLanguage">
          <el-option v-for="item in programingLanguageOptions" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </td>
      <td class="" colspan="2">
        <el-input></el-input>
      </td>
      <td class="" colspan="3">
        <el-input></el-input>
      </td>
    </tr>
    <tr>
      <td class="tg-subheader" rowspan="4">批量计算</td>
      <td class="tg-subheader">
        <el-checkbox label="Hive" name="type"></el-checkbox>
      </td>
      <td class="">
        <el-select v-model="programingLanguage">
          <el-option v-for="item in programingLanguageOptions" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </td>
      <td class="" colspan="2">
        <el-input></el-input>
      </td>
      <td class="" colspan="3">
        <el-input></el-input>
      </td>
    </tr>
    <tr>
      <td class="tg-subheader">
        <el-checkbox label="Spark" name="type"></el-checkbox>
      </td>
      <td class="">
        <el-select v-model="programingLanguage">
          <el-option v-for="item in programingLanguageOptions" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </td>
      <td class="" colspan="2">
        <el-input></el-input>
      </td>
      <td class="" colspan="3">
        <el-input></el-input>
      </td>
    </tr>
    <tr>
      <td class="">
        <el-checkbox label="Pig" name="type"></el-checkbox>
      </td>
      <td class="">
        <el-select v-model="programingLanguage">
          <el-option v-for="item in programingLanguageOptions" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </td>
      <td class="" colspan="2">
        <el-input></el-input>
      </td>
      <td class="" colspan="3">
        <el-input></el-input>
      </td>
    </tr>
    <tr>
      <td class="tg-subheader">
        <el-checkbox label="MapReduce" name="type"></el-checkbox>
      </td>
      <td class="">
        <el-select v-model="programingLanguage">
          <el-option v-for="item in programingLanguageOptions" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </td>
      <td class="" colspan="2">
        <el-input></el-input>
      </td>
      <td class="" colspan="3">
        <el-input></el-input>
      </td>
    </tr>
    <tr>
      <td class="tg-subheader">流计算</td>
      <td class="tg-subheader">
        <el-checkbox label="Spark Sream" name="type"></el-checkbox>
      </td>
      <td class="">
        <el-select v-model="programingLanguage">
          <el-option v-for="item in programingLanguageOptions" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </td>
      <td class="tg-subheader" colspan="2">
        <el-input></el-input>
      </td>
      <td class="tg-subheader" colspan="3">
        <el-input></el-input>
      </td>
    </tr>
    <tr>
      <td class="tg-subheader" rowspan="3">数据集成</td>
      <td class="tg-subheader">
        <el-checkbox label="Flume" name="type"></el-checkbox>
      </td>
      <td class="">
        <el-select v-model="programingLanguage">
          <el-option v-for="item in programingLanguageOptions" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </td>
      <td class="tg-subheader" colspan="2">
        <el-input></el-input>
      </td>
      <td class="tg-subheader" colspan="3">
        <el-input></el-input>
      </td>
    </tr>
    <tr>
      <td class="tg-subheader">
        <el-checkbox label="Kafka" name="type"></el-checkbox>
      </td>
      <td class="">
        <el-select v-model="programingLanguage">
          <el-option v-for="item in programingLanguageOptions" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </td>
      <td class="tg-subheader" colspan="2">
        <el-input></el-input>
      </td>
      <td class="tg-subheader" colspan="3">
        <el-input></el-input>
      </td>
    </tr>
    <tr>
      <td class="tg-subheader">
        <el-checkbox label="Sqoop" name="type"></el-checkbox>
      </td>
      <td class="">
        <el-select v-model="programingLanguage">
          <el-option v-for="item in programingLanguageOptions" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </td>
      <td class="tg-subheader" colspan="2">
        <el-input></el-input>
      </td>
      <td class="tg-subheader" colspan="3">
        <el-input></el-input>
      </td>
    </tr>
    <tr>
      <td class="tg-subheader">OLAP</td>
      <td class="tg-subheader">
        <el-checkbox label="Kylin" name="type"></el-checkbox>
      </td>
      <td class="">
        <el-select v-model="programingLanguage">
          <el-option v-for="item in programingLanguageOptions" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </td>
      <td class="tg-subheader" colspan="2">
        <el-input></el-input>
      </td>
      <td class="tg-subheader" colspan="3">
        <el-input></el-input>
      </td>
    </tr>
    <tr>
      <td class="tg-subheader">数据挖掘</td>
      <td class="tg-subheader">
        <el-checkbox label="Spark ML" name="type"></el-checkbox>
      </td>
      <td class="">
        <el-select v-model="programingLanguage">
          <el-option v-for="item in programingLanguageOptions" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </td>
      <td class="tg-subheader" colspan="2">
        <el-input></el-input>
      </td>
      <td class="tg-subheader" colspan="3">
        <el-input></el-input>
      </td>
    </tr>
    <tr>
      <td class="tg-subheader">搜索</td>
      <td class="tg-subheader">
        <el-checkbox label="Solr" name="type"></el-checkbox>
      </td>
      <td class="">
        <el-select v-model="programingLanguage">
          <el-option v-for="item in programingLanguageOptions" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </td>
      <td class="tg-subheader" colspan="2">
        <el-input></el-input>
      </td>
      <td class="tg-subheader" colspan="3">
        <el-input></el-input>
      </td>
    </tr>
    <tr>
      <td class="tg-subheader">文件系统</td>
      <td class="tg-subheader">
        <el-checkbox label="HDFS" name="type"></el-checkbox>
      </td>
      <td class="">
        <el-select v-model="programingLanguage">
          <el-option v-for="item in programingLanguageOptions" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </td>
      <td class="" colspan="2">
        <el-input></el-input>
      </td>
      <td class="" colspan="3">
        <el-input></el-input>
      </td>
    </tr>
    <tr>
      <td class="tg-subheader">其他</td>
      <td class="">
        <el-input></el-input>
      </td>
      <td class="">
        <el-select v-model="programingLanguage">
          <el-option v-for="item in programingLanguageOptions" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </td>
      <td class="" colspan="2">
        <el-input></el-input>
      </td>
      <td class="" colspan="3">
        <el-input></el-input>
      </td>
    </tr>
    <tr>
      <td class="tg-subheader" colspan="8"></td>
    </tr>
    <tr>
      <td class="tg-subheader">*项目中文名称</td>
      <td class="" colspan="7">
        <el-input></el-input>
      </td>
    </tr>
    <tr>
      <td class="tg-subheader">*项目英文名称</td>
      <td class="" colspan="7">
        <el-input></el-input>
      </td>
    </tr>
    <tr>
      <td class="tg-subheader">*项目描述</td>
      <td class="" colspan="7">
        <el-input></el-input>
      </td>
    </tr>
    <tr>
      <td class="tg-subheader">*功能架构图</td>
      <td class="" colspan="7">
        <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
      </td>
    </tr>
    <tr>
      <td class="tg-subheader">*数据架构图</td>
      <td class="" colspan="7">
        <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
      </td>
    </tr>
    <tr>
      <td class="tg-subheader">用户名</td>
      <td class="" colspan="7">
        <el-input></el-input>
      </td>
    </tr>
  </table>
</template>
<script>
export default {
	data() {
		return {
			dataTypeOptions: [
				{
					value: "1",
					label: "客户"
				},
				{
					value: "2",
					label: "供应商"
				},
				{
					value: "3",
					label: "经销商"
				},
				{
					value: "4",
					label: "产品"
				},
				{
					value: "5",
					label: "物资"
				},
				{
					value: "6",
					label: "合同"
				},
				{
					value: "7",
					label: "财务"
				},
				{
					value: "8",
					label: "设备"
				},
				{
					value: "9",
					label: "生产记录"
				},
				{
					value: "10",
					label: "业务方向"
				},
				{
					value: "11",
					label: "客户行为"
				},
				{
					value: "12",
					label: "员工机构"
				},
				{
					value: "13",
					label: "事件"
				},
				{
					value: "14",
					label: "资源"
				},
				{
					value: "15",
					label: "外部数据"
				}
			],
			dataStructureOptions: [
				{
					value: "1",
					label: "结构化"
				},
				{
					value: "2",
					label: "半结构化"
				},
				{
					value: "3",
					label: "非结构化"
				}
			],
			realTimeOptions: [
				{
					value: "1",
					label: "无"
				},
				{
					value: "2",
					label: "实时"
				}
			],
			lineOptions: [
				{
					value: "1",
					label: "在线"
				},
				{
					value: "2",
					label: "离线"
				}
			],
			programingLanguageOptions: [
				{
					value: "1",
					label: "Jave"
				},
				{
					value: "2",
					label: "Scala"
				},
				{
					value: "3",
					label: "Python"
				},
				{
					value: "4",
					label: "SQL"
				},
				{
					value: "5",
					label: "shell"
				}
			],
			dialogImageUrl: "",
			dialogVisible: false,
			applicationDate: "", // 申请日期
			releaseDate: "", // 发布日期
			applicant: "", // 申请人
			department: "", // 部门
			tel: "", // 联系电话
			email: "", // email
			dataType: "", // 数据类别
			systemSource: "", // 源系统
			dataStructure: "", // 数据结构
			stock: "", // 存量
			diurnalIncrement: "", // 日增量
			realTime: "", // 实时性要求
			throughput: "", // 吞吐量
			line: "", // 在线离线
			programingLanguage: ""
		};
	},
	methods: {
		handleRemove(file, fileList) {
			console.log(file, fileList);
		},
		handlePictureCardPreview(file) {
			this.dialogImageUrl = file.url;
			this.dialogVisible = true;
		}
	}
};
</script>
<style lang="stylus" scope>
.tg {
  border-collapse: collapse;
  border-spacing: 0;
  width: 90%;
  margin: 20px auto;
  text-align: left;
  font-size: 14px;
  white-space: nowrap;

  .tg-header {
    text-align: center;
    font-weight: 500;
    font-size: 20px;
  }

  .tg-subheader {
    font-weight: 500;
  }

  td {
    font-family: Arial, sans-serif;
    border: lightgray 1px solid;
    padding: 10px 5px;
    overflow: hidden;
    word-break: normal;
  }
}
</style>


