<style lang="less">
@import url("~assets/css/variables.less");
// @import url("~assets/css/variables.secondary.less");

ul {
  li { margin:.3rem; padding:.15rem .1rem; .border; }
  h2 { margin-bottom:.1rem; }
}
.desc {
  padding:.3rem;
  font-size:@size-font-small;
  color:@color-warning;
  .border(bottom);
}
</style>


<template>
  <div id="page-demo-btns">
    <div class="desc">
      <p> 这些按钮是ui组件, 并非vue组件 </p>
      <p> 直接通过类名自由组合得到, 比如: </p>
      <p>&lt;input type="button" class="btn primary round" value="按钮" /&gt; </p>
      <input type="button" class="btn primary round" value="按钮" />
    </div>
    <ul>
      <li>
        <h2>普通按钮</h2>
        <a href="javascript:void(0);" class="btn">按钮</a>
        <a href="javascript:void(0);" class="btn primary">按钮</a>
        <a href="javascript:void(0);" class="btn danger">按钮</a>
        <a href="javascript:void(0);" class="btn success">按钮</a>
        <a href="javascript:void(0);" class="btn warning">按钮</a>
        <a href="javascript:void(0);" class="btn disabled">按钮</a>
      </li>
      <li>
        <h2>高亮按钮</h2>
        <a href="javascript:void(0);" class="btn">按钮</a>
        <a href="javascript:void(0);" class="btn highlight primary">按钮</a>
        <a href="javascript:void(0);" class="btn highlight danger">按钮</a>
        <a href="javascript:void(0);" class="btn highlight success">按钮</a>
        <a href="javascript:void(0);" class="btn highlight warning">按钮</a>
        <a href="javascript:void(0);" class="btn highlight disabled">按钮</a>
      </li>
      <li>
        <h2>文本按钮</h2>
        <a href="javascript:void(0);" class="btn text">按钮</a>
        <a href="javascript:void(0);" class="btn text primary">按钮</a>
        <a href="javascript:void(0);" class="btn text danger">按钮</a>
        <a href="javascript:void(0);" class="btn text success">按钮</a>
        <a href="javascript:void(0);" class="btn text warning">按钮</a>
        <a href="javascript:void(0);" class="btn text disabled">按钮</a>
      </li>
      <li>
        <h2>其他按钮</h2>
        <a href="javascript:void(0);" class="btn round">圆形按钮</a>
        <a href="javascript:void(0);" class="btn block">单行按钮</a>
      </li>
      <li>
        <h2>尺寸</h2>
        <a href="javascript:void(0);" class="btn">普通大小</a>
        <a href="javascript:void(0);" class="btn size-s primary">小号</a>
        <a href="javascript:void(0);" class="btn size-m danger">中号</a>
        <a href="javascript:void(0);" class="btn size-l success">大号</a>
        <a href="javascript:void(0);" class="btn text size-l warning">文本按钮默认小号,无法调节</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

