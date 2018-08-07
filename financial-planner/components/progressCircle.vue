<style lang="less">
  @import url("~assets/css/variables.less");
  @size:1.4rem;
  @width:.12rem;
  @bgContainer:@color-light;
  @bgOuter:@color-danger;
  @bgInner:@color-primary;
  .comp-progress-circle {
    position:relative; z-index:1;
    padding:@width; .square(@size);
    overflow:hidden;
    // 两个半圆堆叠成饼状图
    .half-circle {
      box-sizing:content-box;
      position:absolute; top:0; right:0; z-index:1;
      width:50%; height:100%;
      background-color:@bgOuter;
      content:'\200B';
    }
    .half-circle.left {
      right:50%;
      z-index:10;
      transform-origin:100% 50%;
      .radius(1000px 0 0 1000px);
      &.overlay {
        margin:-1px 0 0 -1px;
        padding:1px;
        background:@bgContainer;
      }
    }
    .half-circle.right {
      .radius(0 1000px 1000px 0)
    }
    .inner-wrapper {
      .flow; .justify; .align;
      position:relative; z-index:10;
      height:100%; color:@color-light;
      background-color:@bgInner;
      .radius(100%);
    }
  }
</style>

<template>
  <div class="comp-progress-circle comp-container">
    <div
      class="half-circle left"
      :class="deg<-180?'overlay':''"
      :style="`transform:rotate(${deg>=-180?deg:overlayDeg}deg)`"
    ></div>
    <div class="half-circle right"></div>
    <div class="inner-wrapper">
      <slot name="inner"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    percent: {
      type:Number,
      default:0
    }
  },
  computed: {
    deg() {
      return this.percent / 100 * 360 - 360
    },
    overlayDeg() {
      return Math.floor(this.deg % 180);
    }
  },
}
</script>