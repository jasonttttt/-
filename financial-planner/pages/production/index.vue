<style lang="less">
@import url("~assets/css/variables.less");
@import url("~assets/css/tangxin.less");
#page-production {
    #page-main {
        .selling-products {
            & > p {
                background-color: @color-font-disabled-base;
                line-height: 0.5rem;
                .vertical-left{
                  height: 0.25rem;
                  border-left: .05rem solid @color-primary;
                  padding-left: 0.1rem;
                }
                padding-left: @distance / 1.5;
            }
            .selling-main {
                .flow;
                //在自己的公共样式中
                .company-collection {
                    // v-for 循环的ul
                    width: 100%;
                    .flow(row);
                    .justify(space-between);
                    .align;
                    color: @client-color;
                    .border(bottom);
                    padding-left: @distance / 1.5;
                    .concrete-collection {
                      // v-for 循环的li
                      width: 70%;
                      height: @distance*3;
                      p {
                        font-size: @size-font-large;
                        height: @distance;
                        line-height: @distance;
                      }
                      .company-details {
                        height: @distance*2;
                        .flow(row);
                        .justify(space-between);
                        .align(center);
                        .details-common {
                          .flow(column);
                        }
                        span{
                          //收益率
                          .ratio{
                            font-size: @size-font-larger;
                            color: #e75420;
                          }
                          //最小字体
                          em{
                            font-size: @size-font-small;
                          }
                          //日期
                          .collection-data{
                            font-size: @size-font-larger;
                          }
                          .term{
                            font-size: @size-font-large;
                          }
                        }
                      }
                    }
                  }
                .product-percent{
                  //整体宽高
                  margin-right: @distance / 1.5;
                  width: 1rem;
                  height: 1rem;
                  .half-circle.left{
                    //设置左边半框圆样式
                    width: 50%;
                    height: 100%;
                  }
                  //组件样式class
                    .half-circle{
                      //外圈样式
                      background-color: #bbe5fe;
                    }
                    .inner-wrapper{
                      //1-100之间的样式
                      p{
                        .text-center;
                        margin-bottom: .1rem;
                        font-size: .14rem
                      }
                      span{
                        font-size: .19rem
                      }
                      //100的样式
                      .sell-out{
                        margin-bottom:none;
                        font-size: .20rem
                      }
                    }
                }
                 .presell{
                  //已预售
                  .half-circle{
                    //外圈样式
                    background-color: #f9d5c9;
                  }
                  .inner-wrapper{
                    background-color: #f08165;
                  }
                }
            }
        }
    }
}
</style>

<template>
  <div id="page-production">
    <tabbar :items="items" :index="index" @switchTab="switchTab" />
    <!-- <keep-alive> -->
    <template>
      <div id="page-main" v-show="index==0">
        <!-- 在售产品 -->
        <div class="selling-products">
          <p>
            <!-- <img src="~/assets/img/vertical.svg"> -->
            <i class="vertical-left">在售产品</i>
          </p>
          <div class="selling-main">
            <ul class="company-collection" v-for="item in list" :key=item.id>
               <!-- 每个li后面还有个img 所以在ul循环 -->
              <nuxt-link  to="/production/image" class="concrete-collection">
                <p>{{item.company}}</p>
                <div class="company-details">
                  <span class="yield details-common">
                    <i class="ratio">{{item.yield}}</i>
                    <em>预期收益率</em>
                  </span>
                  <span class="raisingTime details-common">
                    <i class="collection-data">{{item.time}}</i>
                    <em>{{item.raisingTime}}</em>
                  </span>
                  <span class="term details-common">
                    <i class="term">{{item.term}}</i>
                    <em>期限(月)</em>
                  </span>
                </div>
              </nuxt-link>
              <progressCircle :percent="item.i" v-if="item.i!='100'" class="product-percent">
                  <div slot="inner">
                    <p>已售</p>
                    <span>{{item.i*10}}万</span>
                  </div>
              </progressCircle>
              <progressCircle :percent="item.i" v-else class="product-percent">
                  <div slot="inner">
                    <p class="sell-out">已售完</p>
                  </div>
              </progressCircle>
            </ul>
          </div>
        </div>
        <!-- 预售产品 -->
        <div class="selling-products">
          <p>
            <!-- <img src="~/assets/img/vertical.svg"> -->
            <i class="vertical-left">预售产品</i>
          </p>
          <div class="selling-main">
            <ul class="company-collection" v-for="item in secondLi" :key=item.id>
              <!-- 每个li后面还有个img 所以在ul循环 -->
              <nuxt-link to="/production/reservation" class="concrete-collection" >
                <p>{{item.company}}</p>
                <div class="company-details">
                  <span class="yield details-common">
                    <i class="ratio">{{item.yield}}</i>
                    <em>预期收益率</em>
                  </span>
                  <span class="raisingTime details-common">
                    <i class="collection-data">{{item.time}}</i>
                    <em>{{item.raisingTime}}</em>
                  </span>
                  <span class="term details-common">
                    <i class="term">{{item.term}}</i>
                    <em>期限(月)</em>
                  </span>
                </div>
              </nuxt-link>
              <progressCircle :percent=100 class="product-percent presell">
                  <div slot="inner">
                    <p>已预售</p>
                    <span>{{item.i*10}}万</span>
                  </div>
              </progressCircle>
            </ul>
          </div>
        </div>
      </div>
    </template>
     <!-- </keep-alive> -->
  </div>
</template>

<script>
import tabbar from "~/components/layout/tabbar";
import progressCircle from '~/components/progressCircle'
export default {
    layout: "primary",
    components: { tabbar,progressCircle },
    mounted() {
        this.$http.post("getProdcution").then(resp => {
            this.list = resp.list;
            this.secondLi = resp.secondLi
            return {
              list:this.list,
              secondLi:this.secondLi
            }
            // console.log(this.list)
            // return (this.secondLi = resp.secondLi);
            // console.log(this.list);
            // console.log(resp.data);
            // console.log(resp.list[0].item2);
            // console.log(resp.list[0].item0);
        });
    },
    data() {
        return {
            list: [],       
            secondLi:[],
            index: 0,
            items: [
                { name: "自行发行", link: "/production/self" },
                { name: "合作产品", link: "/production/cooperation" },
                { name: "代销产品", link: "/production/commission" }
            ],
            modal: {
                search: {
                    show: false,
                    data: []
                }
            }
        };
    },
    methods: {
        switchTab(i) {
            this.index = i;
        },
        // productDetail(){

        // }
    }
};
</script>
