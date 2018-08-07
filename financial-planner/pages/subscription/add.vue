<style lang="less">
  @import url("~assets/css/variables.less");
  @import url("~assets/css/lhw_common.less");
  @import url("~assets/css/user.less");
  #page-demo{
    .progress{
      .comp-progress{
        li{
          &::before,&::after{height: 0.05rem; margin-top: 0.03rem; }
          p{ padding-top: 0.1rem; width:0.2rem;
            &::after{ font-size: .14rem;}
            &::before{width: 0.1rem; height: 0.1rem;
            }
          }
        }
      }
    }
    .content{margin: 0 auto;
      .content-card{.flow(row);
        .front{margin: .1rem auto;
          .front-left{
            background:url(../../assets/images/1.jpg);
            background-size: cover;
            .radius(5px);
          }
          .front-video{
            background:url(../../assets/images/3.jpg);
            background-size: cover;
          }
        }
        .against{margin: .1rem auto;
          .against-right{
            background:url(../../assets/images/2.jpg);
            background-size: cover;
            .radius(5px);
          }
        }
      }
      .look{.text-right();margin: .1rem .25rem;
        .notice{
          color: @color-primary;
          text-decoration: underline;
        }
      }
      .next{
        width: .4rem;
        height: .4rem;
        display: block;
        line-height: .4rem;
        .text-center();
        font-weight: bold;
        .radius(50%);
        margin: .2rem auto;
        border: 1px solid @color-text-primary;
      }
    }
    .btn{
      width: 100%;
      color: @color-light;
      background: @color-warning;
      position: absolute;
      bottom: 0;
    }
    .success{
      width: 100%;
      height: 100%;
      .flow; .justify; .align;
    }
  }
  .abc-container .outer-wrapper {
    .flow; .justify; .align;
  }
  .abc-container .main{
    width: 6rem;
    height: 6rem;
    .flow; .justify; .align;
    background: @color-light;
    .main-title{
      font-size: @size-font-big-big;
      margin-bottom: .3rem;
    }
    .con{width: 80%;
      .con-list{
        .con-li{.flow(row); margin-bottom: .2rem;
          .con-img{margin-right: .3rem;}
          .con-text{
            .con-title{font-size: @size-font-large;}
            .con-txt{
              color: @color-text-secondary;
              line-height: .4rem;
            }
          }
        }
      }
    }
    .con-btn{
      width: 30%;
      height: .5rem;
      line-height: .5rem;
      .text-center();
      color: @color-light;
      background: @color-warning;
      .radius(.3rem)
    }
  }
</style>


<template>
  <div id="page-demo">
    <div class="progress" v-show="isShow2">
      <progress-bar :progress="progress" />
    </div>

     <!-- 拍照页面 -->
    <template v-if="signType==='add-card'">
    <!-- 中间内容区 -->
    <div class="content">
      <div class="content-card">
        <!-- 正面 -->
        <div class="front">
          <div class="card-text">身份证人像面</div>
          <div class="front-left card"></div>
        </div>
        <!-- 反面 -->
        <div class="against">
          <p class="card-text">身份证国徽面</p>
          <div class="against-right card"></div>
        </div>
      </div>
      
      <p class="look">查看<span class="notice" @click="showModel()">拍摄须知</span></p>
      <a href="javascript:void(0);" class="next" @click="signType='add-video'" v-on:click="addCard()">→</a>
      
    </div>
    </template>



    <!-- 录视频页面 -->
    <template v-else-if="signType==='add-video'">
        <!-- 中间内容区 -->
        <div class="content">
          <div class="content-card">
            <div class="front">
              <div class="card-text">双录视频</div>
              <div class="front-video card"></div>
            </div>
          </div>
          <p class="look">查看<span class="notice"  @click="showModel()">拍摄须知</span></p>
          <a href="javascript:void(0);" class="next" @click="signType='add-compact'" v-on:click="addVideo()">→</a>
        </div>
    </template>


    <!-- 合同签署及出资页面 -->
    <template v-else-if="signType==='add-compact'">
        <!-- 中间内容区 -->
        <div class="content">
          <div class="content-card">
            <div class="front">
              <div class="card-text">合同签署及出资</div>
              <div class="front-video card"></div>
            </div>
          
          </div>
          <p class="look">查看<span class="notice"  @click="showModel()">拍摄须知</span></p>
          <a href="javascript:void(0);" class="next" @click="signType='add-other'" v-on:click="other()">→</a>
        </div>
    </template>



    <!-- 其它页面 -->
    <template v-else-if="signType==='add-other'">
        <!-- 中间内容区 -->
        <div class="content">
          <div class="content-card">
            <div class="front">
              <div class="card-text">其它</div>
              <div class="front-video card"></div>
            </div>
          
          </div>
          <p class="look">查看<span class="notice"  @click="showModel()">拍摄须知</span></p>
          <a href="javascript:void(0);" class="next" @click="signType='add-success'" v-on:click="success()">→</a>
        </div>
    </template>


    
     <!-- 提交成功页面 -->
    <template v-else-if="signType==='add-success'">
      <div class="success">
        提交成功
      </div>
    </template>



    
    <!-- 按钮 -->
    <div class="btn" v-show="isShow2">
      <a href="javascript:void(0);" v-show="isShow3">暂存</a>
      <a href="javascript:void(0);" v-show="isShow4">提交</a>
    </div>
    

    
    <!-- 弹出框内容 -->
    <div class="modal-container abc-container" :data-show="isShow" data-fullscreen="true">
      <div class="outer-wrapper">
        <div class="main">
          <div class="main-title">证件拍摄须知</div>
          <div class="con">
            <ul class="con-list">
              <li class="con-li" v-for="(item,key) in list" :key="key">
                <div class="con-img"><img :src="item.img" style="width:1.5rem;heigth:1.2rem"></div>
                <div class="con-text">
                  <h3 class="con-title">{{item.title}}</h3>
                  <p class="con-txt">{{item.text}}</p>
                </div>
              </li>
            </ul>
          </div>
          <div class="con-btn" @click="closeModel()">
            <a href="javascript:void(0);">确定</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


   


<script>
import progressBar from '~/components/progress'
export default {
  components: { progressBar },
  asyncData({ query }) {
    return { signType: query.type ||'add-card' };
  },
  data() {
    return {
      isShow:false,
      isShow2:true,
      isShow3:true,
      isShow4:false,
      progress: {
        index:0,
        // 进程是否可点击, 如果可点击, 组件会向外发射 progressChange 事件
        switchable:true,
        steps:[
          '身份证','银行转账凭证','双录视频','基金分险揭示','合格投资者揭示','合同签署及出资','其它'
        ]
      },
      list:[
        {
          img:require("~/assets/images/card1.jpg"),
          title:"边角完整",
          text:'确认证件完全处于图片中'
        },
        {
          img:require("~/assets/images/card2.jpg"),
          title:"字体清晰",
          text:'保证精准对焦，使证件上文字和照片清晰'
        },
        {
          img:require("~/assets/images/card3.jpg"),
          title:"亮度均匀",
          text:'避免图片出现遮挡光线、反光等情况'
        }
      ],
      btn:['暂存','暂存','暂存','提交']
    }
  },
  methods: {
    // 组件事件
    progressChange(i) {
      let p = this.progress;
      console.log(`progress 从 ${p.steps[p.index]} 切换到 ${p.steps[i]}`)
      this.progress.index = i;
    },
    addCard(){
      this.progress.index = 2;
    },
    addVideo(){
      this.progress.index = 5;
    },
    other(){
      this.progress.index = 6;
      this.isShow3 = false;
      this.isShow4 = true;
    },
    success(){
      this.isShow2 = false;
      console.log('点击了')
    },
    showModel(){
      console.log('----------弹框打开了------------------');
      this.isShow = true;
    },
    closeModel(){
      console.log("弹框关闭了")
      this.isShow = false;
    }
  }
}
</script>

