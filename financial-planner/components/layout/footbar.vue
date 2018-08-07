<style lang="less">
  @import url("~assets/css/variables.less");
  #footbar {
    .flow(row); .align; height:@footbarHeight;
    .border(top);
    li { 
      .flex(1); 
      a { 
        display:inline-block; width:100%; text-align:center; line-height:@footbarHeight;
        // border-bottom:3px solid transparent;
        &.focus { 
          color:@color-primary; 
          border-color:@color-primary;
        }
      }
    }
  }
</style>

<template>
  <ul id="footbar">
    <li v-for="(item,i) in items" :key="`tab-${i}`">
      <nuxt-link 
        :class="$route.path.indexOf(item.link)===0?'focus':''" 
        :to="item.link">{{item.name}}</nuxt-link>
      <!-- <a 
        href="javascript:void(0);"
        :class="$route.path.indexOf(item.link+'/')===0?'focus':''" 
        @click="$emit('switchTab',i)"
      >{{item.name}}</a> -->
    </li>
  </ul>
</template>

<script>
export default {
  name:'footbar',
  props:{
    index: {
      type:Number,
      default:0
    },
    items: {
      type:Array,
      default() {
        return []
      }
    }
  },
}
</script>
