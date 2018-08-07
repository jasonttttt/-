<style lang="less">
  @import url("~assets/css/variables.less");
</style>

<template>
  <div id="page-demo">
    <a href="javascript:void(0);" class="btn primary" @click="showDialog">
      显示消息会话
    </a>
  </div>
</template>

<script>
export default {
  methods: {
    showDialog() {
      this.$store.commit('showDialog', {
        text:'文字文字文字',
        delay:10000
      })
    }
  }
}
</script>

