<style lang="less">
  @import url("~assets/css/variables.less");
  .modal-container {
    .outer-wrapper {
      .flow; .align; .justify;
    }
  }
</style>

<template>
  <div id="page-demo">
    

    <div class="modal-container" :data-show="modal.show" :data-fullscreen="modal.fullscreen">
      <div class="outer-wrapper" @click="closeModal">
        内容内容
      </div>
    </div>
    
    <!-- 组件控制 -->
    <a href="javascript:void(0);" class="btn primary" @click="showModal">
      显示模块
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modal: {
        show:false,
        fullscreen:true
      }
    }
  },
  methods: {
    showModal() {
      this.modal.show = true
    },
    closeModal() {
      this.modal.show = false
    }
  }
}
</script>

