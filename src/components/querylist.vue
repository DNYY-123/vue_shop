<template>
  <div class="container">
    <el-table
      :data="tableData"
      stripe
      size="mini"
      :header-cell-style="{ backgroundColor: '#ececec' }"
    >
      <el-table-column type="selection" width="40" fixed="left" />
      <el-table-column width="200" label="需求来源编号" prop="proposalInfoNo">
        <template #default="{row}">
          <el-button
            type="text"
            size="mini"
            @click="$emit('view', row)"
          >{{ row.proposalInfoNo }}
          </el-button>
        </template>
      </el-table-column>
      <el-table-column width="200" label="需求提交日期" prop="date1" />
      <el-table-column width="200" label="需求提交事业部" prop="team" />
      <el-table-column width="200" label="需求提交人员" prop="people" />
      <el-table-column width="200" label="产品大类" prop="categoryName" />
      <el-table-column width="200" label="产品小类" prop="subCategoryName" />
      <el-table-column width="200" label="对标链接" prop="lianjie" />
      <el-table-column width="200" label="期望上架时间" prop="date2" />
      <el-table-column width="200" label="销售方式" prop="fangshi" />
      <el-table-column width="200" label="目标销售市场" prop="shop" />
      <el-table-column width="200" label="币种" prop="money" />
      <el-table-column width="200" label="期望客单价" prop="danjia" />
      <el-table-column width="200" label="期望月售量预估" prop="yugu" />
      <el-table-column width="200" label="期望年销售额预估" prop="year" />
      <el-table-column width="200" label="预计能占据市场的位置" prop="shichang" />
      <el-table-column width="200" label="月净毛利目标预估" prop="mao" />
      <el-table-column width="200" label="目标MC" prop="MC" />
      <el-table-column width="200" label="需求提交时间" prop="date3" />
      <el-table-column width="200" label="需求来源审批时间" prop="date4" />
      <el-table-column width="200" label="大小类线下过会时间" prop="date5" />
      <el-table-column width="200" label="市调任务收到时间" prop="date6" />
      <el-table-column width="200" label="市调预计启动时间" prop="date7" />
      <el-table-column width="200" label="市调预计完成时间" prop="date8" />
      <el-table-column width="200" label="市调实际结束时间" prop="date9" />
      <el-table-column width="200" label="过会申请提交时间" prop="date10" />
      <el-table-column width="200" label="品类需求线下过会时间" prop="date11" />
      <el-table-column width="200" label="申请调研时间" prop="date12" />
      <el-table-column width="100" label="状态" prop="status" fixed="right"/>
      <el-table-column fixed="right" label="操作" width="100px">
        <template #default="">
          <!-- <table-operations
            v-bind="scope.row"
            @edit-demand="$emit('edit-demand', scope.row)"
            @edit-prd="$emit('edit-prd', scope.row)"
          /> -->
        </template>
      </el-table-column>
    </el-table>
    <!-- <el-pagination
      :current-page.sync="pagination.currentPage"
      :page-sizes="[15, 30, 45, 100]"
      :page-size.sync="pagination.pageSize"
      layout="prev, pager, next, jumper, sizes, ->, total"
      :total="list.length"
      :pager-count="7"
    /> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [
        {
          proposalInfoNo: '12123',
          status: '新建'
        },
        {
          proposalInfoNo: '31311',
          status: '申请中'
        }
      ]

    }
  }
}
</script>

<style scoped>

</style>
