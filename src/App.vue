<template>
  <div id="app">
    <item-bar />
    <!-- 路由占位符 -->
    <router-view></router-view>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import ItemBar from './layout/index'
export default {
  name: 'app',
  components: {
    ItemBar
  }
}
</script>

<style>
</style>
