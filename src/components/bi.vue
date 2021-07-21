<template>
  <div class="container">
    <div class="header">
      <span class="title">MC数据</span>
      <span class="time">数据更新时间：</span>
      <span>{{dataUpTime}}</span>
    </div>
    <div class="inputs">
      <el-form ref="ruleForm" :model="ruleForm" label-width="80px" :inline="true">
        <el-form-item prop="startAndEndTime">
          <el-date-picker
            v-model="ruleForm.startAndEndTime"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            size="mini"
            clearable>
          </el-date-picker>
        </el-form-item>
        <el-form-item label="渠道：" prop="channel">
          <el-select v-model="ruleForm.channel" filterable placeholder="请选择" size="mini" clearable>
            <el-option
              v-for="item in channelList"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="SKU：" prop="SKU">
          <el-select v-model="ruleForm.SKU" filterable placeholder="请选择" size="mini" clearable>
            <el-option
              v-for="item in skuList"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="月份：" prop="months">
          <el-date-picker
            v-model="ruleForm.months"
            type="monthrange"
            range-separator="至"
            start-placeholder="开始月份"
            end-placeholder="结束月份"
            size="mini"
            clearable>
          </el-date-picker>
        </el-form-item>
        <el-form-item label=" ">
          <el-button type="primary" size="mini">查询</el-button>
          <el-button type="primary" size="mini" @click="resetForm('ruleForm')">清空筛选</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="box">
      <div class="btns">
        <el-button type="primary" size="mini" @click="uploadFile()">导入Excel</el-button>
        <el-button type="primary" size="mini" @click="downloadFile(tableData)">下载报表</el-button>
      </div>
      <div class="table">
        <input type="file" @change="importFile(this)" id="imFile" style="display: none"
           accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"/>
        <a id="downlink"></a>
        <el-table
          :data="tableData"
          border
          style="width: 100%"
          size="mini"
          :header-cell-style="{ backgroundColor: '#ececec' }"
          >
          <el-table-column
            prop="date"
            label="导入时间"
          >
          </el-table-column>
          <el-table-column
            prop="name"
            label="渠道"
          >
          </el-table-column>
          <el-table-column
            prop="SKU"
            label="SKU">
          </el-table-column>
          <el-table-column
            prop="adress"
            label="地址">
          </el-table-column>
          <el-table-column
            prop="Month"
            label="月份">
          </el-table-column>
          <el-table-column
            prop="chengben1"
            label="在库采购单位成本">
          </el-table-column>
          <el-table-column
            prop="chengben2"
            label="在库运费单位成本">
          </el-table-column>
          <el-table-column
            prop="MC"
            label="单品MC（合计）">
          </el-table-column>
          <el-table-column
            prop="userName"
            label="操作人"
            width="200">
          </el-table-column>
        </el-table>
      </div>
      <div class="page p15">
        <el-pagination
          background
          :page-sizes="[5, 10, 15, 20 ]"
          :current-page="currentPage"
          :page-size="pageSize"
          :total="total"
          layout="prev, pager, next, jumper, sizes, total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </div>
  </div>
</template>

<script>
import timeFormat from '@/tool/timeFormat'
import onpage from '@/tool/page'
var XLSX = require('xlsx')
export default {
  data () {
    return {
      channelList: [],
      skuList: [],
      dataUpTime: '',
      outFile: '',
      imFile: '',
      tableData: [],
      pageSize: 10,
      currentPage: 1,
      total: 0,
      ruleForm: {
        startAndEndTime: '',
        channel: '',
        SKU: '',
        months: ''
      }
    }
  },
  mounted () {
    this.imFile = document.getElementById('imFile')
    this.outFile = document.getElementById('downlink')
  },
  created () {
    this.getTime()
    this.readFile()
  },
  methods: {
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    getTime () {
      const time = timeFormat()
      this.dataUpTime = time
    },
    readFile () {
      this.$http.get('data.json').then((res) => {
        this.tableData = onpage(res.data.data, this.currentPage, this.pageSize)
        this.total = this.tableData.length
        this.channelList = res.data.guojia
        this.skuList = res.data.erpSku
      }).catch((err) => {
        console.log('请求失败' + err)
      })
    },
    handleSizeChange (newSize) {},
    handleCurrentChange () {},
    downloadFile: function (rs) { // 点击导出按钮
      let data = [{}]
      for (const k in rs[0]) {
        data[0][k] = k
      }
      data = data.concat(rs)
      this.downloadExl(data, 'MC数据')
    },

    // 导入Excel表
    importFile: function () { // 导入excel
      const obj = this.imFile
      if (!obj.files) {
        return
      }
      var f = obj.files[0]
      var reader = new FileReader()
      const $t = this
      reader.onload = function (e) {
        var data = e.target.result
        if ($t.rABS) {
          $t.wb = XLSX.read(btoa(this.fixdata(data)), { // 手动转化
            type: 'base64'
          })
        } else {
          $t.wb = XLSX.read(data, {
            type: 'binary'
          })
        }
        const json = XLSX.utils.sheet_to_json($t.wb.Sheets[$t.wb.SheetNames[0]])
        console.log(json)
        $t.dealFile($t.analyzeData(json)) // analyzeData: 解析导入数据
      }
      if (this.rABS) {
        reader.readAsArrayBuffer(f)
      } else {
        reader.readAsBinaryString(f)
      }
    },

    uploadFile: function () { // 点击导入按钮
      this.imFile.click()
    },

    analyzeData: function (data) { // 此处可以解析导入数据
      return data
    },

    dealFile: function (data) { // 处理导入的数据
      console.log(data)
      this.imFile.value = ''
      if (data.length <= 0) {
        this.errorDialog = true
        this.errorMsg = '请导入正确信息'
      } else {
        this.tableData = onpage(data, this.currentPage, this.pageSize)
      }
    },

    // 导出到Excel
    downloadExl: function (json, downName, type) {
      const keyMap = [] // 获取键
      for (const k in json[0]) {
        keyMap.push(k)
      }
      console.info('keyMap', keyMap, json)
      const tmpdata = [] // 用来保存转换好的json
      json.map((v, i) => keyMap.map((k, j) => Object.assign({}, {
        v: v[k],
        position: (j > 25 ? this.getCharCol(j) : String.fromCharCode(65 + j)) + (i + 1)
      }))).reduce((prev, next) => prev.concat(next)).forEach(function (v) {
        tmpdata[v.position] = {
          v: v.v
        }
      })
      const outputPos = Object.keys(tmpdata) // 设置区域,比如表格从A1到D10
      const tmpWB = {
        SheetNames: ['mySheet'], // 保存的表标题
        Sheets: {
          mySheet: Object.assign({},
            tmpdata, // 内容
            {
              '!ref': outputPos[0] + ':' + outputPos[outputPos.length - 1] // 设置填充区域
            })
        }
      }
      const tmpDown = new Blob([this.s2ab(XLSX.write(tmpWB,
        { bookType: (type === undefined ? 'xlsx' : type), bookSST: false, type: 'binary' } // 这里的数据是用来定义导出的格式类型
      ))], {
        type: ''
      }) // 创建二进制对象写入转换好的字节流
      var href = URL.createObjectURL(tmpDown) // 创建对象超链接
      this.outFile.download = downName + '.xlsx' // 下载名称
      this.outFile.href = href // 绑定a标签
      this.outFile.click() // 模拟点击实现下载
      setTimeout(function () { // 延时释放
        URL.revokeObjectURL(tmpDown) // 用URL.revokeObjectURL()来释放这个object URL
      }, 100)
    },

    s2ab: function (s) { // 字符串转字符流
      var buf = new ArrayBuffer(s.length)
      var view = new Uint8Array(buf)
      for (var i = 0; i !== s.length; ++i) {
        view[i] = s.charCodeAt(i) & 0xFF
      }
      return buf
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin-top: 20px;
  margin-left: 20px;
  .header {
    .title {
      font-weight: bold;
      font-size: 24px;
    }
    .time {
      font-size: 14px;
      margin-left: 60px;
    }
  }
  .inputs {
    margin-top: 20px;
  }
  .box {
    width: 1600px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    .btns {
      margin-bottom: 20px;
    }
    .page {
      margin-top: 20px;
    }
  }
}
</style>
