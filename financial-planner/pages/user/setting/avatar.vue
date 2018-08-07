<style lang="less">
  @import url("~assets/css/variables.less");
  @import url("~assets/css/user.less"); 
      #page-avatar{
          padding-top: 20px;
          background: @color-background;
          .haed-img{
              width: @hei*1.5;
              height: @hei*1.5;
              .radius(50%);
              background: @color-head-img;
              margin: 0 auto;
          }
          .place-list{
              background: @color-light;
              margin-top: 40px;
          }
          .place-list li{
          height: @hei*0.5;
          line-height: 50px;
          .border(bottom);
          padding-left: 15px;
          .text-center();
         }
         .place-list li:last-child{
          border: none;
         }
         
      }
</style>

<template>
<div id="page-avatar">
 <!-- 更换头像 -->
<template v-if="signType==='replace'">
  <div id="page-replace">
      <div class="haed-img"></div>
      <ul class="place-list">
            <li><a href="javascript:void(0);" @click="signType='camera'"><div>拍照</div></a></li>
            <li><a href="javascript:void(0);" @click="signType='photo'"><div>从相册中选择一张</div></a></li>
        </ul>
  </div>
</template>



 <!-- 拍照 -->
<template v-else-if="signType==='camera'">
    <div class="camera">
        拍照
    </div>
</template>



 <!-- 从相册上传 -->
<template v-else-if="signType==='photo'">
    <div class="photo">
        从相册上传
    </div>
</template>
</div>
</template>


<script>
export default {
   asyncData({ query }) {
    return { signType: query.type||'replace'};
  }
}
</script>

