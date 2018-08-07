<style lang="less">
  // @import url("~assets/css/variables.less");
</style>


<template>
  <div id="__primary" class="layout-root">
    <msg-dialog />
    <nuxt class="page-container" :data-page="$route.name"/>
    <footbar :items="items"/>
  </div>
</template>

<script>
import msgDialog from '~/components/dialog'
import footbar from '~/components/layout/footbar'

export default {
  components: { msgDialog, footbar },
  data() {
    return {
      items:[
        { name:'产品', link:'/production' },
        { name:'申购录入', link:'/subscription' },
        { name:'审批状态', link:'/approval' },
        { name:'我的', link:'/user' }
      ]
    }
  },
}
</script>
