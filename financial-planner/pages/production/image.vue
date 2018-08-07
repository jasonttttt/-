<style lang="less">
@import url("~assets/css/variables.less");
@import url("~assets/css/tangxin.less");
#page-productionImage {
    .page-productionImage {
        .details-list {
            & > p {
                .flow(row);
                .align(space-between);
                background-color: @color-font-disabled-base;
                line-height: 0.25rem;
                padding-left: @distance / 2;
                i{
                  border-left: 0.05rem solid @color-danger;
                  padding-left: .1rem;
                }
                img {
                    height: 0.25rem;
                }
               
            }
            ul{
              .flow;
              .justify;
              padding: 1% @distance / 2;
              // img{

              // }
              li{
                .flow(row);
                margin-bottom: .05rem;
                // .justify(space-between);
                span{
                   width: 20%;
                   height: .35rem;
                   line-height: .35rem;
                   background-color: @color-red;
                   color: @color-light;
                   .text-center();
                }
                p{
                   width: 80%;
                   height: .35rem;
                   line-height: .35rem;
                   background-color: @color-text-placeholder;
                   color: @color-dark;
                   font-weight: bolder;
                   margin-left: 1%;
                   padding-left: 0.02rem;
                }
              }
            }
        }
    }
}
</style>

<template>
  <div id="page-productionImage">
    <div class="page-productionImage">
      <div class="details-list" v-for="item in list" :key="item.id">
        <p>
          <i>{{item.type}}</i>
        </p>
        <ul v-if="!item.imgUrl">
            <li>
               <span>基金名称</span>
               <p>{{item.fundName}}</p>
            </li>
            <li>
               <span>基金名称</span>
               <p>{{item.fundName}}</p>
            </li>
            <li>
               <span>基金名称</span>
               <p>{{item.fundName}}</p>
            </li>
        </ul>
        <ul v-else>
          <img :src = item.imgUrl>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// {'URL':require("../../assets/bg_pattern.png")}
export default {
  data(){
    return{
        list:[
          {
            type:'基金要素',
            fundName:'富汇化消费产业2期'
          },
          {
            type:'基金交易结构',
            imgUrl:require('~/assets/img/fund.svg')
          },
          {
            type:'项目背景',
            imgUrl:require('~/assets/img/fund.svg')
          },
          {
            type:'项目分析',
            imgUrl:require('~/assets/img/fund.svg')
          },
          {
            type:'项目管理人介绍',
            imgUrl:require('~/assets/img/fund.svg')
          },
        ]
    }
  }
};
</script>

