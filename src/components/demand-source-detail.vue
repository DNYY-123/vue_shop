<template>
  <div class="container">
    <div class="title">需求来源详情</div>
    <el-form ref="form" :model="form">
      <el-table :data="tableData" border :show-header="false" :span-method="arraySpanMethod" :cell-style="cellStyle" size="mini">
        <el-table-column align="left" label="one">
          <template #default="{ row, $index }">
            <el-table
              v-if="$index == 4"
              :data="data"
              style="width: 100%">
              <el-table-column label="操作">
                <template>
                  <el-button circle icon="el-icon-plus" :disabled="btnDis" @click="addItem()" />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span>
                    <el-button v-show="btnDis" circle icon="el-icon-minus" :disabled="!btnDis" @click="removeItem()" />
                  </span>
                </template>
              </el-table-column>
              <el-table-column
                header-align="left"
                align="left"
                type="index"
                label="序号"
                width="100"
              />
              <el-table-column
                header-align="left"
                align="left"
                label="SKU"
              >
                <template #default="scope">
                  <div v-if="scope.row.SKU == '1'">
                    <el-input v-model="scope.row.SKU1" placeholder="请输入" />
                  </div>
                  <div v-else>
                    {{ scope.row.SKU }}
                  </div>
                </template>
              </el-table-column>
              <el-table-column
                header-align="left"
                align="left"
                label="描述"
              >
                <template #default="scope">
                  <div v-if="scope.row.text == '1'">
                    <el-input v-model="scope.row.text1" placeholder="请输入" />
                  </div>
                  <div v-else>
                    {{ scope.row.text }}
                  </div>
                </template>
              </el-table-column>
              <el-table-column
                header-align="left"
                align="left"
                label="RMA率"
              >
                <template #default="scope">
                  <div v-if="scope.row.RMA == '1'">
                    <el-input v-model="scope.row.RMA1" placeholder="请输入" />
                  </div>
                  <div v-else>
                    {{ scope.row.RMA }}
                  </div>
                </template>
              </el-table-column>
              <el-table-column
                header-align="left"
                align="left"
                label="MC变更值"
              >
                <template>
                  <el-input v-model="MC" placeholder="请输入" />
                </template>
              </el-table-column>
              <el-table-column
                header-align="left"
                align="left"
                label="币种"
              >
                <template>
                  <el-select
                    v-model="money"
                    placeholder="请选择"
                  >
                    <el-option
                      v-for="item in moneyType"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    />
                  </el-select>
                </template>
              </el-table-column>
              <el-table-column
                header-align="left"
                align="left"
                label="库存信息"
              >
                <template #default="scope">
                  <div v-if="scope.row.info == '1'">
                    <el-input v-model="scope.row.info1" placeholder="请输入" />
                  </div>
                  <div v-else>
                    {{ scope.row.info }}
                  </div>
                </template>
              </el-table-column>
            </el-table>
            <span>{{row.title}}</span>
          </template>
        </el-table-column>
        <el-table-column align="left" label="two">
          <template #default="{  }">
            <template>

            </template>
          </template>
        </el-table-column>
        <el-table-column align="left" label="three">
          <template #default="{ row }">
            <span>{{row.title3}}</span>
          </template>
        </el-table-column>
        <el-table-column align="left" label="four">
          <template #default="{ }">

          </template>
        </el-table-column>
      </el-table>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [
        {
          title: '创建人',
          title2: '需求提出事业部',
          date: ''
        },
        {
          title: 'Model',
          title2: '是否为新产品大类',
          radio: '2'
        },
        {
          title: '问题类型',
          title2: '是否为新产品小类',
          radio: '2'
        },
        {
          title: 'SKU信息'
        },
        {
          title: '变更前描述'
        },
        {
          title: '描述',
          title2: ' 销售方式',
          date: ''
        },
        {
          title: '图片',
          title2: '币种'
        },
        {
          title: '变更后描述',
          title2: '期望月销量预估'
        },
        {
          title: '描述',
          title2: '预估能占据市场的位置（BS排名）'
        },
        {
          title: '图片',
          title2: '目标MC'
        }
      ],
      form: {},
      data: [
        {
          SKU: 1,
          text: '描述',
          RMA: '90%',
          info: '123'
        }
      ],
      btnDis: false,
      moneyType: [],
      MC: '',
      money: ''
    }
  },
  created () {
  },
  methods: {
    arraySpanMethod ({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 4) {
        if (columnIndex === 0) {
          return [1, 4]
        }
      } else if (rowIndex === 9) {
        if (columnIndex === 1) {
          return [1, 3]
        }
      } else if (rowIndex === 3) {
        if (columnIndex === 0) {
          return [1, 4]
        }
      } else if (rowIndex === 5) {
        if (columnIndex === 1) {
          return [1, 3]
        }
      } else if (rowIndex === 8) {
        if (columnIndex === 1) {
          return [1, 3]
        }
      } else if (rowIndex === 7) {
        if (columnIndex === 0) {
          return [1, 4]
        }
      } else if (rowIndex === 6) {
        if (columnIndex === 1) {
          return [1, 3]
        }
      }
    },
    cellStyle (row, column, rowIndex, columnIndex) {
      if (row.column.label === 'one' || row.column.label === 'three') {
        if (row.rowIndex === 3 || row.rowIndex === 4 || row.rowIndex === 7) {
          if (row.columnIndex === 0) {
            return 'text-align:center;background:#fafafa'
          }
        }
        return 'background:#fafafa'
      }
    }
  }
}
</script>

<style scoped>
.container {
  width: 80%;
  height: 800px;
}
.title {
  font-size: 18px;
  height: 40px;
  line-height: 40px;
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
}
.xin {
    color: red;
  }
</style>
