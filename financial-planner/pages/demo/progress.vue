<style lang="less">
  @import url("~assets/css/variables.less");
</style>

<template>
  <div id="page-demo">
    <progress-bar :progress="progress" @progressChange="progressChange"/>
  </div>
</template>

<script>
import progressBar from '~/components/progress'
export default {
  components: { progressBar },
  data() {
    return {
      progress: {
        index:0,
        // 进程是否可点击, 如果可点击, 组件会向外发射 progressChange 事件
        switchable:true,
        steps:[
          '流程1','流程2','流程3'
        ]
      }
    }
  },
  methods: {
    // 组件事件
    progressChange(i) {
      let p = this.progress;
      console.log(`progress 从 ${p.steps[p.index]} 切换到 ${p.steps[i]}`)
      this.progress.index = i;
    }
  }
}
</script>

