<style lang="less">
@import url("~assets/css/variables.less");
@import url("~assets/css/user.less");
@import url("~assets/css/lhw_common.less");
  // #page-report-message {
  //   .list {
  //      .list-li{
  //       margin: 0 0.2rem;
  //       padding: 0.2rem 0;
  //      }
  //   }
  // }
</style>

<template>
<div id="page-report-message">
 <!-- 投资研究报告 -->
<template v-if="signType==='report'">
   <div class="report">
    <ul class="list">
        <li v-for="(item,key) in list" :key="key" class="list-li">
            <p>{{item.title}}</p>
            <p class="small-text">发布时间：{{item.time}}</p>
            <p class="middle-text top">{{item.text}}</p>
        </li>
    </ul>
  </div> 
</template>



 <!-- 产品资讯 -->
<template v-else-if="signType==='message'">
  <div class="message">
    <ul class="list">
        <li v-for="(item,key) in list" :key="key" class="list-li">
            <p>{{item.title}}</p>
            <p class="small-text">发布时间：{{item.time}}</p>
            <p class="middle-text top">{{item.text}}</p>
        </li>
    </ul>
  </div>
</template>

</div>
</template>
<script>
export default {
  asyncData({ query }) {
    return { signType: query.type };
  },
  data() {
    return{
      list:[]
    }
  },
  mounted(){
    this.$http.post("reportData")
    .then(resp => {
      return this.list = resp.data
    });
  }
};
</script>

