<style lang="less">
  @import url("~assets/css/variables.less");
  @hei:60px;
  #page-sign {
    font-size:20px;
    h1 {
      font-size:40px; line-height:150px;
    }
    .input-container {
      padding:0 30px;
      &>.input-wrapper,
      &>input { margin-bottom:10px; .border(bottom); }
      .input-wrapper {
        .flow(row);  
        line-height:@hei;
        input { flex:1; }
      }
      input {
        padding:0 15px; height:@hei;
      }
      // .el-input { margin:10px 0; }
      // .el-input input { height:@hei; }
    }
    .btn-wrapper {
      margin-top:30px;
      padding:0 30px;
      // .el-button { width:100%; height:@hei; }
      .btn { line-height:@hei; }
    }
  }
</style>

<template>
  <div id="page-sign">
    <!-- 登录 -->
    <template v-if="signType==='in'">
      <h1 class="text-center">登录</h1>
      <div class="input-container">
        <input class="block" type="text" v-model="mobile" placeholder="请输入手机号码" />
        <input class="block" type="password"  v-model="password" placeholder="请输入密码" />
      </div>
      <p class="text-right">
        <nuxt-link to="findPassword"></nuxt-link>
      </p>
      <div class="btn-wrapper">
        <a class="btn primary block" href="javascript:void(0);" @click="login">登录</a>
      </div>
      <p class="text-center">
        <a class="btn text size-m" href="javascript:void(0);" @click="signType='up'">创建账号</a>
      </p>
    </template>
    <!-- 注册 -->
    <template v-else-if="signType==='up'">
      <h1 class="text-center">注册</h1>
      <div class="input-container">
        <input class="block" type="text" v-model="mobile" placeholder="请输入手机号码" />
        <div class="input-wrapper">
          <input class="block" type="text" v-model="vfcode.value" placeholder="请填写收到的验证码" />
          <a class="btn text size-s primary" href="javascript:void(0);" @click="getVfcode">
            {{vfcode.countdownText||vfcode.placeholder}}
          </a>
        </div>
        <div class="input-wrapper">
          <input class="block" type="password" v-model="regPassword" placeholder="请设置密码" />
        </div>
      </div>
      <div class="btn-wrapper">
        <a class="btn primary block" href="javascript:void(0);" @click="register">注册</a>
      </div>
      <p class="text-center">
        <a class="btn text size-m" href="javascript:void(0);" @click="signType='in'">已有账号登录></a>
      </p>
    </template>
  </div>
</template>

<script>
export default {
  asyncData({query}) {
    return { signType:query.type||'in' }
  },
  data() {
    return {
      mobile:'',
      password:'',
      regPassword:'',
      vfcode: {
        countdowning:false,
        value:'',
        placeholder:'获取验证码',
        countdownText:'',
        countdownTextTemplate:'*s 后获取',
        timer:-1,
        counter:0,
        interval:5
      }
    }
  },
  computed: {
    loginable() {
      return this.mobile.trim()&&this.password.trim()
    }
  },
  methods: {
    login() {
      let mobile   = this.mobile.trim(),
          password = this.password.trim(),
          error    = '';

      if ( !this.commonValidate([
        {name:'mobile', value:mobile},
        {name:'password', value:password}
      ]) ) {
        return;
      }

    },
    register() {
      let mobile   = this.mobile.trim(),
          vfcode   = this.vfcode.value.trim(),
          password = this.regPassword.trim();

      if ( !this.commonValidate([
        {name:'mobile', value:mobile},
        {name:'vfcode', value:vfcode},
        {name:'regPassword', value:password}
      ])) {
        return;
      }
      
    },
    getVfcode() {
      if ( this.vfcode.countdowning ) return;

      let mobile = this.mobile.trim(),
          error  = '';

      if ( !mobile ) {
        error = '请输入手机号'
      } else if ( !this.$util.mobileValidate(mobile) ) {
        error = '手机号错误'
      }


      this.vfcode.countdowning  = true;
      this.countdown();
    },

    commonValidate(items=[]) {
      let vm         = this
      let error      = ''
      let temp       = null
      let validater  = {
        mobile: {
          validate(val) {
            if ( !val ) {
              return { result:false, error:'请输入手机号' }
            } else if ( !vm.$util.mobileValidate(val) ) {
              return { result:false, error:'手机号码错误', }
            } else {
              return { result:true }
            }
          }
        },
        vfcode: {
          error :'请输入验证码'
        },
        password: {
          error :'请输入密码'
        },
        regPassword: {
          error :'请输入密码'
        }
      }


      items.some(item=>{
        temp = validater[item.name]
        if ( !temp ) {
          console.error( `${item.name} 无法验证, 请确认是否存在相应的 validater` )
        } else {
          if ( typeof temp.validate === 'function' ) {
            error = temp.validate(item.value).error
          } else {
            error = item.value.trim()? '' : temp.error
          }
        }
        return error;
      })

      if ( error ) {
        this.$store.commit('showDialog', {text:error})
      }

      return !error;
    },
    countdown() {
      let vfcode = this.vfcode;
      if ( vfcode.counter === vfcode.interval ) {
        vfcode.counter = 0;
        vfcode.countdownText = '';
        vfcode.countdowning  = false;
        return;
      }
      vfcode.countdownText = vfcode.countdownTextTemplate.replace('*',vfcode.interval-vfcode.counter++);
      clearTimeout(vfcode.timer)
      vfcode.timer = setTimeout(this.countdown, 1000);
    }
  }
}
</script>

