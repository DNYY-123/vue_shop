<template>
  <div class="container">
    <div id="title">
      <h1>数据可视化-Echarts</h1>
      <div id="showtime">2021.06.22</div>
    </div>
    <div class="body"></div>
  </div>
</template>

<style lang="scss" scoped>
body {
  #title {
    height: 2.5rem;
    background-color: pink;
    h1 {
      text-align: center;
      line-height: 2.5rem;
      font-size: 1.25rem;
      color: #fff;
    }
    #showtime {
      position: absolute;
      top: 1.75rem;
      right: 1.25rem;
      font-size: 0.75rem;
      color: rgb(255, 255, 255, 0.7);
    }
  }
  .body {
    height: 100%;
    background-color: #ccc;
  }
}
</style>
