<template>
  <div class="container">
    <div class="header">
      <el-row :gutter="20">
        <el-col :span="6"><div class="title">需求来源管理</div></el-col>
        <el-col :span="6" :offset="12">
          <div><el-button  type="primary">发起审批</el-button></div>
        </el-col>
      </el-row>
    </div>
    <div class="form">
      <el-form ref="formData" :model="formData" label-width="100px" :inline="true" label-position="right" size="mini">
        <el-form-item label="产品大类" style="width:350px">
          <el-select v-model="formData" placeholder="请选择产品大类" clearable >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="产品小类" style="width:350px">
          <el-select v-model="formData" placeholder="请选择产品小类" clearable >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="期望上架时间" style="width:350px">
          <el-date-picker
            v-model="value1"
            range-separator="~"
            placeholder="请选择日期范围"
            style="width:195px"
          />
        </el-form-item>
        <el-form-item label="需求来源编号" style="width:350px">
          <el-input v-model="model1"  placeholder="输入需求编号搜索" />
        </el-form-item>
        <el-form-item label="状态" style="width:350px">
          <el-select v-model="formData" placeholder="请选择产品小类" clearable >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="提出需求的人" style="width:350px">
          <el-select v-model="formData" placeholder="请选择产品小类" clearable >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="事业部/team" style="width:350px">
          <el-select v-model="formData" placeholder="请选择产品小类" clearable >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
      </el-form>
    </div>
    <div class="btn">
      <el-button type="primary" icon="el-icon-search" size="mini">查询</el-button>
      <el-button type="primary" icon="el-icon-refresh-left" size="mini">重置</el-button>
    </div>
    <div class="xinjian">
      <el-button type="primary" size="mini" @click="handlerQuery">新建需求来源</el-button>
      <el-button type="primary" size="mini">复制</el-button>
    </div>
    <query-list
      v-model="demandRowSelection"
      @view="handlerView"
    />
    <demand-source-detail />
  </div>
</template>

<script>
import QueryList from './querylist'
import DemandSourceDetail from './demand-source-detail'
export default {
  components: {
    QueryList,
    DemandSourceDetail
  },
  data () {
    return {
      demandRowSelection: [
        {
        }
      ],
      options: [],
      formData: {},
      model: {},
      model1: '',
      value: '',
      value1: ''
    }
  },
  methods: {
    handlerView () {
      console.log(1)
    },
    handlerQuery () {
    }
  }
}
</script>

<style scoped>
.container {
  margin-top: 10px;
  /* text-align: center; */
}
.header {
  margin-bottom: 10px;
  text-align: center;
}
.btn {
  text-align: center;
}
.xinjian {
  margin-bottom: 30px;
}
</style>
