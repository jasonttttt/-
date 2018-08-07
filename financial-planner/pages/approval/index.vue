<style lang="less">
@import url("~assets/css/variables.less");
@import url("~assets/css/tangxin.less");
#page-approval {
    // 合同进度
    .contract-progress {
        // .flex;
        .contract-main {
            // height: 1.5rem;
            margin-left: 4%;
            .border(bottom);
            &:last-child {
                border-bottom: none;
            }
            .flow(row);
            .justify(space-between);
            .contract-information {
                // 用户信息和公司名称
                // width: 2rem;
                padding: 0.15rem 0;
                .flow;
                .justify(space-between);
                span {
                    font-size: @size-font-large;
                }
            }
            // 控制组件样式
            .comp-progress {
                width: 50%;
                margin-right: 1rem;
                padding: 0.3rem;
                li {
                    &::before,
                    &::after {
                        height: 0.05rem;
                        margin-top: 0.03rem;
                    }
                    p {
                        padding-top: 0.1rem;
                        width: 0.15rem;
                        &::after {
                            font-size: 0.14rem;
                        }
                        &::before {
                            width: 0.1rem;
                            height: 0.1rem;
                        }
                    }
                }
            }
        }
    }
    //付息时间
    .interest-payment {
        .payment-main {
            margin-left: 4%;
            .border(bottom);
            &:last-child {
                border-bottom: none;
            }
            .flow(row);
            .justify(space-between);
            .align;
            p {
                // 公司名称代号
                font-size: @size-font-large;
            }
            .payment-time {
                // 时间
                .flow(row);
                .justify(space-between);
                .align;
                span {
                    .flow;
                    .justify(space-between);
                    padding: 0.25rem 0.5rem 0.25rem 0;
                    .expiry-time {
                        // 到期时间
                        font-size: @size-font-larger;
                        color: @color-gold;
                    }
                    .payment {
                        // 付息时间
                        font-size: @size-font-larger;
                        color: @color-text-placeholder;
                    }
                    em {
                        font-size: @size-font-small;
                    }
                }
            }
        }
    }
}
</style>
<template>
  <div id="page-approval">
    <tabbar :items="items" :index="index" @switchTab="switchTab" />
    <div id="page-main">
      <template>
        <!-- 合同进度 -->
        <!-- 频换切换环境用v-show控制 -->
        <div v-show="index==0" class="contract-progress">
          <div class='contract-main' v-for="item in list" :key="item.id">
            <div class="contract-information">
              <span>{{item.username}}</span>
              <i>{{item.company}}</i>
            </div>
            <progressBar :progress="getItemProgress(item.index)" @progressChange="progressChange" />
          </div>
        </div>
        <!-- 付息时间 -->
        <div v-show="index==1" class="interest-payment">
          <div class="payment-main" v-for="item1 in date" :key="item1.id">
            <p>{{item1.companyNumber}}</p>
            <div class="payment-time">
              <span>
                <i class="expiry-time">{{item1.expiryTime}}</i>
                <em>到期时间</em>
              </span>
              <span>
                <i class="payment">{{item1.paymentTime}}</i>
                <em>付息时间</em>
              </span>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import tabbar from "~/components/layout/tabbar";
import progressBar from "~/components/progress";
export default {
    layout: "primary",
    components: { tabbar, progressBar },
    data() {
        return {
            index: 0,
            items: [
                { name: "进度", link: "/approval/progress" },
                { name: "付息时间", link: "/approval/payment" }
            ],
            list: [
                {
                    username: "张一鸣",
                    company: "新疆前海盈货币B",
                    index: 1
                    //请求的list数据里面的index 如何在progress取到
                },
                {
                    username: "窝窝头",
                    company: "新疆前海盈货币B",
                    index: 2
                },
                {
                    username: "阿尔萨斯",
                    company: "新疆前海盈货币B",
                    index: 1
                }
            ],
            date: [
                {
                    companyNumber: "新疆前海盈货币B(00248)",
                    expiryTime: "18/05/20",
                    paymentTime: "十天内"
                },
                {
                    companyNumber: "新疆前海盈货币B(00248)",
                    expiryTime: "18/05/20",
                    paymentTime: "十天内"
                },
                {
                    companyNumber: "新疆前海盈货币B(00248)",
                    expiryTime: "18/05/20",
                    paymentTime: "十天内"
                }
            ],
            progress: {
                //这里取到
                index: 2,
                // 进程是否可点击, 如果可点击, 组件会向外发射 progressChange 事件
                switchable: false,
                steps: ["城市营销支持", "总部", "归档", "城市营销支持"]
            }
        };
    },
    methods: {
        switchTab(i) {
            this.index = i;
        },
        // 组件事件
        progressChange(i) {
            let p = this.progress;
            console.log(`progress 从 ${p.steps[p.index]} 切换到 ${p.steps[i]}`);
            this.progress.index = i;
            // console.log(this.progress.index)
        },
        getItemProgress(i) {
            return {
                ...this.progress,
                index: i
            };
        }
    }
};
</script>
