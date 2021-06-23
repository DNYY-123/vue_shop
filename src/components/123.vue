<template>
  <div class="container" >
    <div class="mian" v-for="v in value" :key="v">
      <div v-if="v == 5" class="box" @click="start" style="cursor:pointer">start</div>
      <div v-if="v != 5" class="box" :class="color" @click="test(v)">{{ lable[v] }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      lable: [0, 1, 2, 3, 4, 'start', 6, 7, 8, 9],
      color: [],
      dd: [],
      colorList: ['yel', 'wit'],
      fit: {
        1: '1',
        2: '2',
        3: '3',
        4: '6',
        5: '9',
        6: '8',
        7: '7',
        8: '4'
      }
    }
  },
  created () {
    console.log(this.fit[8])
  },
  methods: {
    start () {
      console.log(1)
      this.color = this.colorList[0]
    },
    test (v) {
      console.log(v)
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  border: 1px solid #ccc;
  width: 300px;
  height: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-150px, -150px);
  .mian {
    &:nth-child(5) .box {
      background: red;
    }
    .box {
      width: 98px;
      height: 98px;
      float: left;
      text-align: center;
      line-height: 98px;
      border: 1px solid #ccc;
    }
    .wit {
      background: #fff;
    }
    .yel {
      background: yellow;
    }
  }
}
</style>
