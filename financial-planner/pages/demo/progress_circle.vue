<style lang="less">
  @import url("~assets/css/variables.less");
  #page-demo-circle {
    .flow(row); flex-wrap:wrap;
  }
</style>

<template>
  <div id="page-demo-circle">
    <!-- 只需要传 percent -->
    <progress-circle v-for="i in 100" :key="i" :percent="i">
      <!-- 内部自己定义 -->
      <div slot="inner">{{i}}</div>
    </progress-circle>
  </div>
</template>

<script>
import progressCircle from '~/components/progressCircle'

export default {
  components: { progressCircle }
}
</script>

