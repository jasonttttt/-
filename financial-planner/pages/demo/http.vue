<style lang="less">
  @import url("~assets/css/variables.less");
</style>

<template>
  <div id="page-demo">
    <a href="javascript:void(0);" class="btn primary" @click="sendRequest">
      发起请求
    </a>
  </div>
</template>

<script>
export default {
  methods: {
    sendRequest() {


      this.$http.post(
        'setUserProfile', 
        {name:'n', age:1}
      )
      .then(resp=>{
        console.log(resp)
      })
    }
  }
}
</script>

