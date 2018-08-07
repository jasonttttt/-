<style lang="less">
  @import url("~assets/css/variables.less");
</style>

<template>
  <div id="page-demo">
    <!-- 搜索组件 -->
    <modal-search
      :option="modal"
      @keywordChange="keywordChange"
      @searchCancel="modal.show=false"
    >
      <ul slot="list">
        <!-- 要储存的历史, 优先 data-history-key, 其次 li.textContent, 最后 keyword -->
        <li v-for="i in 100" :key="`t${i}`" data-history-key="这是存储值" @click="handleClick(i)">
          选项{{i}}
        </li>
      </ul>
    </modal-search>
    <!-- 组件开关 -->
    <a href="javascript:void(0);" class="btn primary" @click="showModal">
      显示搜索模块
    </a>
  </div>
</template>

<script>
import modalSearch from '~/components/modal/search'
export default {
  components: { modalSearch },
  data() {
    return {
      modal: {
        show:false,
        // 是否自动记录搜索历史, 默认为true
        // recordHistory:false
      }
    }
  },
  methods: {
    showModal() {
      this.modal.show=true
    },
    handleClick(i) {
      console.log(i)
      this.modal.show = false;
    },
    keywordChange(e,val) {
      console.log(val)
    }
  }
}
</script>

