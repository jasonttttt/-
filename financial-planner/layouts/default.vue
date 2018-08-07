<style lang="less">

</style>


<template>
  <div id="__default" class="layout-root">
    <msg-dialog />
    <nuxt class="page-container" :data-page="$route.name"/>
  </div>
</template>

<script>
import msgDialog from '~/components/dialog'
export default {
  components: { msgDialog }
}
</script>
