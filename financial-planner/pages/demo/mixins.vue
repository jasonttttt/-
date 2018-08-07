<style lang="less">
  @import url("~assets/css/variables.less");
</style>

<template>
  <div id="page-template">
    {{ someData }}
  </div>
</template>

<script>
import mixin from '~/mixins/test'
export default {
  mixins:[mixin],
  beforeCreate() {
    console.log('_____hook beforeCreate from instance')
  },
  mounted() {
    console.log('_____hook mounted from instance')
  }
}
</script>

