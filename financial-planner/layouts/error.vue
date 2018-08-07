<style lang="less">
@import url("~assets/css/variables.less");
#page-error {
  .flow(row); .align; .justify;
  font-size:@size-font-large;
}
</style>

<template>
  <div id="page-error">
    <h1 v-if="error.statusCode === 404">
      Oops, page not found!
    </h1>
    <h1 v-else>
      应用发生错误异常
    </h1>
  </div>
</template>

<script>
export default {
  props: ['error'],
}
</script>
