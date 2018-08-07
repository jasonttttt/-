<template>
  <div id="page-home"></div>
</template>
<script>
export default {
  asyncData({redirect}) {
    redirect('/production')
  }
}
</script>
