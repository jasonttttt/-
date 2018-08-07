<style lang="less">
  @import url("~assets/css/variables.less");
  @import url("~assets/css/user.less"); 
  @import url("~assets/css/lhw_common.less"); 
  #page-user{
      background:@color-background;
      .user-top{
        height: 2rem;
        background: @color-primary;
        padding: 0.1rem 0;
        position: relative;
        color: @color-light;
        margin-bottom: 0.1rem;
        .user-title{
          .text-center();
        }
        .user-setting{
          display: block;
          position: absolute;
          right: 0.2rem;
          top:0.1rem;
        }
        .head-portrait{
          width: 0.6rem;
          height: 0.6rem;
          background: @color-light;
          .radius(50%);
          margin: 0.1rem auto;
        }
        .sign-login{
          .text-center();
        }
        .user-nav{
          margin: 0.1rem auto;
          .text-center();
          .flow(row);
          .nav-title{
          height:@linehei;
          line-height: @linehei;
          display: inline-block;
          .border(right);
          .flex(1);
          }
          .nav-title:last-child{
          border: none;
          }
        }
      } 
  }
</style>

<template>
  <div id="page-user">
      <!-- 顶部 -->
      <div class="user-top">
          <h1 class="user-title">我的</h1>
          <nuxt-link class="user-setting" to="user/setting/profile">设置</nuxt-link>
          <div class="head-portrait"></div>
          <p class="sign-login">
              <nuxt-link to="/user/sign?type=in">登录</nuxt-link>
              <span>/</span>
              <nuxt-link to="/user/sign?type=up">注册</nuxt-link>
          </p>
          <div class="user-nav">
            <nuxt-link class="nav-title" to="/user/company">公司公告</nuxt-link>
            <nuxt-link class="nav-title" to="/user/report?type=report">投资研究报告</nuxt-link>
            <nuxt-link class="nav-title" to="/user/report?type=message">产品资讯</nuxt-link>
          </div>
      </div>

    <!-- 内容 -->
    <div class="user-content">
        <ul class="list">
            <li class="list-li"><nuxt-link to="/user/client"><div>我的客户</div></nuxt-link></li>
            <li class="list-li"><nuxt-link to="/user/favorite"><div>我的收藏</div></nuxt-link></li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  layout:'primary',
}
</script>
