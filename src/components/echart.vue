<template>
  <div id="main" style="width: 600px;height:400px"></div>
</template>

<script>
export default {
  data () {
    return {}
  },
  created () {
  },
  methods: {
    init () {
      const myEchart = this.$echarts.init(document.getElementById('main'))
      const option = {
        title: {
          text: 'Vue中使用Echarts小练习'
        },
        tooltip: {},
        legend: {
          data: ['销量', '1']
        },
        xAxis: {
          data: ['苹果', '香蕉', '橘子', '葡萄']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [50, 60, 45, 30],
            color: 'pink'
          },
          {
            name: '数量',
            type: 'line',
            data: [22, 10, 90, 12]
          }
        ]
      }
      myEchart.setOption(option)
    }
  },
  mounted () {
    this.init()
  }
}
</script>
