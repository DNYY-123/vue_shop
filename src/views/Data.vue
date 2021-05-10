// 渲染函数用法
<script>
export default {
  render (createElemnet) {
    const _this = this.$parent
    console.log(_this)
    return createElemnet(
      'h' + this.level,
      // Array.apply(null, { length: 20 }).map(function () {
      //   return createElemnet('p', 'h1')
      // }),
      {
        attrs: {
          name: this.name
        }
      },
      [
        <a href={this.url}>{ this.name }</a>,
        <br />,
        <i class="el-icon-platform-eleme"></i>,
        // this.$scopedSlots.default({
        //   text: this.name
        // })
        this.$slots.default
        // createElemnet('div', '1')
      ]
    )
  },
  props: {
    level: {
      type: Number,
      require: true
    },
    name: {
      type: String,
      require: true
    },
    url: {
      type: String,
      require: true
    }
  }
}
</script>
