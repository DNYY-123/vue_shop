<template>
  <div class="container">
    <anchored-heading name="lll" :level="1" url="mean">
      level1
    </anchored-heading>
    <anchored-heading name="etl" :level="2" url="2">
      level2
    </anchored-heading>
    <anchored-heading name="test" :level="3" url="3">
      <span>11</span>
    </anchored-heading>
  </div>
</template>

<script>
import anchoredHeading from '@/views/Data'
export default {
  components: {
    anchoredHeading
  },
  data () {
    return {
      level: 1
    }
  }
}
</script>

<style scoped>
.container {
  text-align: center;
}
</style>
