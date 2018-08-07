<style lang="less">
  @import url("~assets/css/variables.less");
  #tabbar {
    .flow(row); .align; height:@tabbarHeight;
    .border(bottom);
    li { 
      .flex(1); text-align:center; 
      a { 
        display:inline-block; padding:0 20px; line-height:@tabbarHeight - .03rem; 
        border-bottom:3px solid transparent;
        &.focus { 
          color:@color-primary; 
          border-color:@color-primary;
        }
      }
    }

  }
</style>

<template>
  <ul id="tabbar">
    <li v-for="(item,i) in items" :key="`tab-${i}`">
      <!-- <nuxt-link 
      :class="$route.path===item.link?'focus':''" 
      :to="item.link"
      @click="$emit('switchTab',i)"
      >{{item.name}}</nuxt-link> -->
      <a 
        href="javascript:void(0);"
        :class="index===i?'focus':''" 
        @click="$emit('switchTab',i)"
      >{{item.name}}</a>
    </li>
  </ul>
</template>

<script>
export default {
  name:'tabbar',
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
  }
}
</script>
