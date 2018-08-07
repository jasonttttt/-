<style lang="less">
@import url("~assets/css/variables.less");
@import url("~assets/css/user.less");
@import url("~assets/css/lhw_common.less");
#page-main{
  background:@color-background;
  .submittde{
    .list{
      .list-li{.flow(row);padding: 0.2rem 0.2rem 0.2rem 0;
        .right{.text-right();
          .red{color: @color-danger;}
        }   
      }
    }
  }
  .temporary{
    .list{
      .list-li{.flow(row);padding: 0.2rem 0.2rem 0.2rem 0;
        .right{ .flow(row);
          .right-left{ .text-center();}
          .right-right{ .text-center();
            .right-table{position: absolute;right: .2rem;
              .txt-right{.text-right();}
              .color{.text-center();}
            }
          }
          .red{font-size: @size-font-big; line-height: .4rem;
          }
        }  
      }
    }
  }
  
}
</style>

<template>
  <div id="page-subscription">
    <tabbar :items="items" :index="index" @switchTab="switchTab"/>
    <div id="page-main">
      <!-- 已提交 -->
      <div class="submittde" v-if="index==0">
         <ul class="list">
            <li v-for="(item,key) in list " :key="key" class="list-li distance" >
              <div class="left">
                <span class="name">{{item.name}}</span>
                <span class="tel">{{item.tel}}</span> 
                <p class="title">
                  <span class="type">{{item.type}}</span>
                  <span class="num">{{item.num}}</span>
                </p>
              </div>
              <div class="right">
                  <span class="status" :class='key==1?"red":""'>{{item.status[key]}}</span>
              </div>
           </li>
        </ul>
      </div>

      <!-- 暂存 -->
      <div class="temporary" v-else-if="index==1">
        <ul class="list">
          <li v-for="(item,key) in list" :key="key" class="list-li distance">
            <div class="left">
              <span class="name">{{item.name}}</span>
                <span class="tel">{{item.tel}}</span> 
                <p class="title">
                  <span class="type">{{item.type}}</span>
                  <span class="num">{{item.num}}</span>
                </p>
            </div>

            <div class="right">
              <div class="right-left left">
                <table>
                    <tr>{{item.book[key]}}</tr>
                    <tr class="red">{{item.noSub[key]}}</tr>
                </table>
              </div>

              <div class="right-right right">
                <table class="right-table">
                 <tr class="txt-right">{{item.other[key]}}</tr>
                 <tr class="red color">{{item.noSubmit[key]}}</tr>
                </table>
              </div>
            </div>
          </li>
        </ul>
      </div>
      
    </div>
  </div>
</template>

<script>
import tabbar from '~/components/layout/tabbar'

export default {
  layout:'primary',
  components: { tabbar },
  data() {
    return {
      index:0,
      list:[],
      items:[
        {name:'已提交',link:'/subscription/submitted'},
        {name:'暂存', link:'/subscription/temporary'},
      ]
    }
  },
  mounted(){
     this.$http.post("submitData")
    .then(resp => {
      console.log(resp)
      return this.list = resp.data
    });
  },
  methods: {
    switchTab(i) {
      this.index=i
    },
    
  },
}
</script>
