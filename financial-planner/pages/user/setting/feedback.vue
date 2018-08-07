<style lang="less">
  @import url("~assets/css/variables.less");
  @import url("~assets/css/user.less");
  #page-feedback{
      //用户反馈
      .feedback-content{
          padding: 0.2rem 0.3rem;
          .feedback-title{
          margin-bottom: .1rem;
         }
         .feedback-text{
          .border(around);
          width: 100%;
          height: @hei;
          padding: .1rem;
         }
         .feedback-btn{
          width: 1.5rem;
          height: 0.4rem;
          line-height: 0.4rem;
          .text-center();
          display: block;
          background: @color-btn;
          .radius(5px);
          margin: 0.15rem auto;
          color: @color-light;
         }
      }

      //提交成功
      .succeed{
        padding-top:1.5rem;
        .text-center();
      }
      
      //版本信息
      .page-versions{
        padding-top: 0.4rem;
      .versions-logo{
          width: 0.7rem;
          height: 0.7rem;
          line-height: 0.7rem;
          .text-center();
          background: @color-logo;
          color:@color-light;
          .radius(0.1rem);
          margin: 0.1rem auto;
      }
      .versions-text{
          .text-center();
      }
      .intro{
          .text-center();
          margin-top: 0.3rem;
      }
    }
  }
</style>

<template>
<div id="page-feedback">
<!--用户反馈-->
<template v-if="signType==='feedback'">
    <div class="feedback-content">
        <p class="feedback-title">你的意见和想法对我们非常重要</p>
        <textarea v-model="content" placeholder="请提出您宝贵的意见" class="feedback-text"></textarea>
        <a href="javascript:void(0);"  class="feedback-btn primary" @click="showDialog">提交</a>
    </div>
</template>



<!--提交成功·-->
<template v-else-if="signType==='submit'">
  <div class="succeed">提交成功！感谢您的反馈</div>
</template>




<!--版本信息·-->
<template v-else-if="signType==='versions'">
  <div class="page-versions">
    <div class="versions-logo">logo</div>
    <p class="versions-text">产品名称1.0</p>
    <p class="intro">产品简介</p>
  </div>
</template>

</div>
</template>



<script>
export default {
   asyncData({ query }) {
    return { signType: query.type||'feedback'};
  },
  data(){
    return{
      content:''
    }
  },
  methods:{
    showDialog(){
      if(this.content==''){
        this.$store.commit('showDialog', {
        text:'请输入内容',
        delay:2000
      })
      }else{
       this.signType='submit'
      }
    }
  }
}
</script>
