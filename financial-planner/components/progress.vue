<style lang="less">
  @import url("~assets/css/variables.less");
  .comp-progress {
    @gap:.2rem;
    @offset:.2rem;
    @color:@color-primary;
    @colorOutOfProgress:@color-border-base;
    padding:@gap;
    ul { .flow(row); .justify(space-between); flex-wrap:nowrap; }
    li {
      flex:1; position:relative;
      .flow(row);
      &::before,
      &::after {
        flex:1; display:block; margin-top:@offset/4; height:@offset / 2;
        background-color:@color; content:'\200B';
      }
      // 第一个 li 没有左边, 最后一个 li 没有右边
      &:first-child::before,
      &:last-child::after { display:none; }
      p {
        position:relative; padding-top:@offset+@gap/2; width:@offset * 2;
        &::before {
          position:absolute; left:50%; top:0; transform:translate3d(-50%,0,0);
          .square(@offset); .radius(@offset / 2); background:@color;
          content:'\200B';
        }
        &::after {
          position:absolute; left:50%; bottom:0; transform:translate3d(-50%,0,0);
          white-space:nowrap;
          content:attr(data-name)
        }
      }
    }
    li.instep::after { background-color:@colorOutOfProgress; }
    li.unfinished {
      &::before,
      &::after,
      p::before { background-color:@colorOutOfProgress; }
    }
  }
</style>

<template>
  <div class="comp-progress comp-container">
    <ul>
      <li
        v-for="(s,i) in progress.steps" :key="`step${i}`"
        :class="stepClassName(i)"
      >
        <p :data-name="s" @click="progress.switchable&&$emit('progressChange',i)">&#8203;</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    progress: {
      type:Object,
      default() {
        return {}
      }
    },
  },
  methods: {
    stepClassName(i) {
      let p = this.progress;
      return i===p.index? 'instep': (i<p.index?'finished':'unfinished')
    }
  }
}
</script>