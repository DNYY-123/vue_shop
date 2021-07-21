<template>
  <div class="container">
    <div class="navbar">
      <el-menu
        mode="horizontal"
        @select="menuSelect"
        router
      >
        <el-menu-item index="/mean">Mean</el-menu-item>
        <el-menu-item index="/test">TEST</el-menu-item>
        <el-menu-item index="/q">Q</el-menu-item>
        <el-menu-item index="/time">time</el-menu-item>
        <el-menu-item index="/echart">Echart</el-menu-item>
        <el-menu-item index="/bar">Bar</el-menu-item>
        <el-menu-item index="/bi">BI</el-menu-item>
        <el-menu-item index="/xl">XL</el-menu-item>
        <el-menu-item index="/dialog">Dialog</el-menu-item>
        <el-menu-item index="/lubo">Lubo</el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    menuSelect (key, keyPath) {
      console.log(key)
      console.log(keyPath)
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  .navbar {
    margin-top: 20px;
    width: 70%;
  }
}
</style>
