<template>
  <div class="container">
    <div class="time">
      <div v-if="mode == 'clock'" class="clock">
        {{h}}:{{m | fit }}:{{ s | fit }}
      </div>
      <div v-if="mode == 'timer' || mode == 'jilu'" class="timer">
        {{shi | fit}} : {{ge | fit}}
      </div>
    </div>
    <div v-if="mode == 'clock'" class="btn1">
      <el-button type="primary" @click="change1" size="mini">时间</el-button>
      <el-button type="primary" @click="change2" size="mini">计时器</el-button>
    </div>
    <div v-if="mode == 'timer'" class="btn2">
      <el-button type="primary" size="mini" @click="start">开始</el-button>
      <el-button type="primary" size="mini" @click="res">重置</el-button>
      <!-- <el-button type="primary" @click="change1" size="mini">时间</el-button> -->
    </div>
    <div v-if="mode == 'jilu'" class="btn3">
      <el-button type="primary" size="mini" @click="stop">暂停</el-button>
      <el-button type="primary" size="mini" @click="jilu">记录</el-button>
    </div>
    <div class="jilu">
      <el-table
        :data="data"
        style="width: 100%">
        <el-table-column
          prop="prop"
          label="序号"
          type="index"
        />
        <el-table-column
          header-align="center"
          align="center"
          prop="jilu"
          label="记录" >
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      h: '',
      m: '',
      s: '',
      mode: 'clock',
      ge: 0,
      shi: 0,
      time: '',
      data: []
    }
  },
  filters: {
    fit (s) {
      const ss = parseInt(s)
      if (ss < 10) {
        s = '0' + s
      }
      return s
    }
  },
  created () {
    this.getTime()
  },
  methods: {
    getTime () {
      setInterval(() => {
        const d = new Date()
        this.h = d.getHours()
        this.m = d.getMinutes()
        this.s = d.getSeconds()
      }, 1000)
    },
    change1 () {
      this.mode = 'clock'
    },
    change2 () {
      this.mode = 'timer'
    },
    start () {
      this.mode = 'jilu'
      this.time = setInterval(() => {
        this.ge = this.ge + 1
        if (this.ge === 100) {
          this.ge = 0
          this.shi = this.shi + 1
        }
      }, 10)
    },
    stop () {
      clearInterval(this.time)
      this.mode = 'timer'
    },
    res () {
      this.ge = this.shi = 0
      this.data = []
    },
    jilu () {
      const t = { jilu: this.shi + ':' + this.ge }
      this.data.push(t)
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 800px;
  position: absolute;
  left: 30%;
  top: 30%;
  line-height: 100px;
  font-size: 24px;
  font-weight: bold;
  .time {
    text-align: center;
    width: 200px;
    height: 100px;
    border: 1px #ccc solid;
  }
  .jilu {
    position: absolute;
    right: 20px;
    top: 0px;
  }
}
</style>
