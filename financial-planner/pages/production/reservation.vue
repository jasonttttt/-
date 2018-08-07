<style lang="less">
@import url("~assets/css/variables.less");
@import url("~assets/css/tangxin.less");
#page-reservation {
    // 整体内容分为两个模块，上面固定高度，下面余下拉满自适应
    .page-main {
        height: 100%;
        .flow;
        & > img {
            // 上面模块目前作为一个图片
            // height: 5rem;
            padding: 0 2.5% 2%;
            border-bottom: 0.15rem solid @color-font-disabled-base;
        }
        .reservation {
            // 下面模块整体的全部
            // height: 100%;
            .flow;
            flex:1;
            font-size: @size-font-large;
            .reservation-bubble{
                //气泡
                .flow(row);
                .justify;
                .align;
                .small-bubble{
                    width: .09rem;
                    height: .09rem;
                    .dispaly(block);
                    .radius(50%);
                    background-color: @color-font-disabled-base;
                    margin-right: .05rem;
                }
                .middle-bubble{
                    width: .14rem;
                    height: .14rem;
                    .dispaly(block);
                    .radius(50%);
                    background-color: @color-font-disabled-base;
                    margin-right: .05rem;
                }
                .large-bubble{
                    width: .18rem;
                    height: .18rem;
                    .dispaly(block);
                    .radius(50%);
                    background-color: @color-font-disabled-base;
                    margin-right: .05rem;
                }
                p{
                    margin: 2% .1rem;
                    .text-center;
                }
            }
            .reservation-layout{
                flex: 1;
                // width: 100%;
                // height: 70%;
                //内容垂直水平居中
                // .content-center;
                .flow;.align;
                .reservation-info {
                    //预约信息
                    margin-bottom: .1rem;
                    width: 100%;
                    padding: 0 5%;
                    .flow(row);
                    .justify(space-between);
                    input {
                      //客户姓名 客户电话
                      width: 49%;
                      padding-left: 2%;
                      height: 0.7rem;
                      .border(around);
                    }
                }
                & > input {
                    //预约金额
                    padding-left: 2%;
                    height: 0.7rem;
                    .border(around);
                    width: 90%;
                    margin-bottom: 0.15rem;
                }
                .btn {
                    // 立即预约按钮
                    height: 0.5rem;
                    width: 2rem;
                    // background-color: @color-warning;
                    color: @color-light;
                    a{
                        line-height: 0.5rem;
                    }
                }
                
            }
            .reservation-success{
                flex:1;
                // 预约成功的页面
                color: @color-success;
                //内容垂直水平居中
                .content-center;
            }
            
        }
    }
}
</style>

<template>
  <div id="page-reservation">
    <div class="page-main">
      <img src='~/assets/img/details.png'>
      <template v-if="reservations==false">
        <div class="reservation">
          <!-- 预约 -->
           <div class="reservation-bubble">
              <span class="small-bubble"></span>
              <span class="middle-bubble"></span>
              <span class="large-bubble"></span>
              <p>预约</p>
              <span class="large-bubble"></span>
              <span class="middle-bubble"></span>
              <span class="small-bubble"></span>
          </div>
          <div class="reservation-layout">
            <div class="reservation-info">
                <input type="text" placeholder="客户姓名" v-model="user">
                <input type="text" placeholder="客户电话" v-model="mobile">
            </div>
            <input type="text" placeholder="预约金额" v-model="reservationAmount">
            <div class="btn-wrapper">
                <a class="btn highlight warning" href="javascript:void(0);" @click="order">立即预约</a>
            </div>
          </div>
        </div>
      </template>
      <template v-else-if="reservations==true">
        
        <div class="reservation">
          <!-- 预约成功 -->
           <div class="reservation-bubble">
              <span class="small-bubble"></span>
              <span class="middle-bubble"></span>
              <span class="large-bubble"></span>
              <p>预约</p>
              <span class="large-bubble"></span>
              <span class="middle-bubble"></span>
              <span class="small-bubble"></span>
          </div>
          <div class="reservation-success">
                预约成功
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            reservations: false,
            user:'',
            mobile:'',
            reservationAmount:''
        };
    },
    computed: {
        loginable() {
            return this.mobile.trim() && this.reservationAmount.trim();
        }
    },
    methods: {
        order() {
            let mobile = this.mobile.trim(),
                reservationAmount = this.reservationAmount.trim(),
                user = this.user.trim(),
                error = "";
            if(!user){
                error = '请输入您的姓名'
            }else if (!mobile) {
                error = '请输入您的手机号码'
            }else if ( !this.$util.mobileValidate(mobile) ) {
                error = '手机号错误'
            }else if(!reservationAmount){
                error = '请输入您的预约金额'
            }else {
                return this.reservations = true;
            }
            if (error) {
                this.$store.commit("showDialog", { text: error });
            }
        }
    }
};
</script>

