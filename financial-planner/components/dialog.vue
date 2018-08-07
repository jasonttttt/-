<style lang="less">
.comp-dialog { 
  position:fixed; top:0; left:0; 
  width:100%; height:100%; pointer-events:none; 
  opacity:0; transition-duration:300ms; 
  &.show { opacity:1; }
  .outer-wrapper {
    position:absolute; top:40%; left:0; 
    width:100%; 
    text-align:center; 
    pointer-events:none; 
  }
  .inner-wrapper { 
    display:inline-block; padding:12px 20px; 
    background:rgba(0,0,0,.9); 
    box-shadow:0 0 3px 1px #000; 
    border-radius:6px; color:#eaeaea; 
  }
}
</style>

<template>
  <div class="comp-dialog" :class="dialog.show?'show':''">
    <div class="outer-wrapper">
      <div class="inner-wrapper">
        {{dialog.text}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    dialog() {
      return this.$store.state.dialog;
    }
  }
}
</script>
