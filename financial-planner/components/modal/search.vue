<style lang="less">
  @import url("~assets/css/variables.less");
  @topbarHeight:.6rem;
  .modal-search {
    .outer-wrapper {
      width:100%; height:100%; overflow:hidden;
      background-color:#fff;
    }
    .modal-search-topbar {
      .flow(row); .align(stretch); padding:.1rem;  height:@topbarHeight;
      transition-duration:300ms; transform:translate3d(0,-@topbarHeight,0);
      .border(bottom);
      input {
        padding:0 .15rem;
        // width:100%; height:100%;
        flex:1;
        background-color:#eee;
        .radius;
      }
      .btn { padding:0 .15rem; line-height:calc(@topbarHeight - .2rem) }
    }
    .modal-search-main {
      height:calc(100% - @topbarHeight);
      transition-duration:300ms; transform:translate3d(0,@topbarHeight * 2,0);
      .scroll;
    }
    .modal-search-history {
      padding:.1rem .2rem;
      // h3 { margin-bottom:.1rem; }
      h3 .icon { float:right; .square(.25rem); text-align:center; line-height:.25rem; background-color:@color-border-base; .radius(100%); }
      ul { .flow(row); flex-wrap:wrap; }
      li { margin:.08rem .2rem; margin-left:0; padding:.08rem; background-color:@color-border-base; .radius; }
    }
    // 过渡效果
    &.show,
    &[data-show] {
      .modal-search-topbar,
      .modal-search-main { transform:translate3d(0,0,0); }
    }
  }
</style>

<template>
  <div
    class="modal-container modal-search"
    :data-show="!!option.show"
  >
    <div class="outer-wrapper">
      <div class="modal-search-topbar">
        <input
          type="text" placeholder="输入关键字搜索"
          v-model.trim="keyword"
          @input="keywordChange"
        />
        <a href="javascript:void(0)" class="btn text" @click="cancel">取消</a>
      </div>
      <div class="modal-search-main">
        <template v-if="!keyword">
          <div class="modal-search-history" v-if="history.length">
            <h3>
              搜索历史
              <i class="icon" @click="clearHistory">x</i>
            </h3>
            <ul>
              <li v-for="(h,i) in history" :key="`s-h${i}`" @click="historySelect(i)">
                {{h}}
              </li>
            </ul>
          </div>
        </template>
        <div v-else class="modal-search-list" @click="itemSelect">
          <slot name="list"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    option: {
      type:Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      keyword:'',
      history:[],
      recordHistory:true,


      bounce:300,
      timer:-1,
      ...this.option,

      storeName:`__${this.$route.name.replace(/\-/g,'_')}_searchingHistory__`
    }
  },
  methods: {
    keywordChange(e) {
      clearTimeout(this.timer)
      this.timer = setTimeout(()=>{
        this.$emit('keywordChange',e,this.keyword)
      },this.option.bounce||this.bounce)
    },
    historySelect(i) {
      this.keyword = this.history[i];
      this.keywordChange();
    },
    cancel() {
      this.$emit('searchCancel',this)
    },
    // 记录历史, 统一在组件处处理
    // 获取历史
    getHistory() {
      let str = localStorage.getItem(this.storeName);
      let arr = [];
      if ( typeof str!=='string' || !str.trim() ) return arr;
      try {
        arr = JSON.parse(str)
      } catch(e) {
        arr = []
      }
      return arr;
    },
    // 设置历史
    setHistory(data) {
      localStorage.setItem(this.storeName, JSON.stringify(data))
    },
    clearHistory() {
      this.setHistory(this.history=[]);
    },
    itemSelect(e) {
      if ( !this.recordHistory ) return;

      let history = this.history;
      let target  = e.target
      let value   = target.getAttribute('data-history-key')||target.textContent.trim() || this.keyword;
      let index   = 0;
      // 如果已存在, 提到最前
      if ( history.some((item,i)=>{
        if (item === value) {
          index  = i;
          return true;
        }
      }) ) {
        history.splice(index,1);
      }
      history.unshift( value );
      this.setHistory(history);
    }
  },
  mounted() {
    // 获取记录
    if ( this.recordHistory ) {
      this.history = this.getHistory();
    }
  }
}
</script>
