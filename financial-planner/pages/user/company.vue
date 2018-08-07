<style lang="less">
@import url("~assets/css/variables.less");
@import url("~assets/css/user.less");
@import url("~assets/css/lhw_common.less");
#page-notice {
  background: @color-background;
  .author {
    color: @color-btn;
  }
}
</style>

<template>
  <div id="page-notice">
    <ul class="list">
      <li v-for="(item,key) in list" :key="key" class="list-li">
        <p class="notice-title text-overflow">{{item.title}}</p>
        <div class="small-text">
          <div class="notice">作者：<span class="author">{{item.author}}</span></div>
          <div class="notice">所属部门：<span class="section">{{item.section}}</span></div>
          <div class="notice">发布时间：<span class="time">{{item.time}}</span></div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: []
    };
  },
  mounted() {
    this.$http.post("companyData")
    .then(resp => {
      // console.log(resp)
      return this.list = resp.data
    });

    
  }
};
</script>

