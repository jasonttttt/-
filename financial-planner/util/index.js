import Cookies from 'js-cookie'
const TokenKey = 'x-access-token'

export default {
  getToken() {
    return Cookies.get(TokenKey) || '';
  },
  setToken(token, expires={expires:30, path:'/'}) {
    Cookies.set(TokenKey, token, expires);
  },
  // 获取随机数, 包含 from, 不包含 to;
  // 如果 from 或 to 无效, 等同于 Math.random()
  getRandom(from,to) {
    return isNaN(from)||isNaN(to)||(from>=to)?
      Math.random():
      Math.floor(
        Math.random() * (to-from+1) + from
      )
  },
  // 手机号验证
  mobileValidate(mobile) {
    return typeof mobile === 'string'?
      /^1[3-9]\d{9}$/.test(mobile):
      false;
  },
  // 邮箱验证
  // 用户名: 支持数字字母汉字开头和结尾,中间支持._-
  // 邮箱名: 支持数字字母,支持多级,以.-联结
  emailValidate(email) {
    return typeof email === 'string'?
      /^[a-zA-Z0-9\u4e00-\u9fa5]+([\.\_\-]?[a-zA-Z0-9\u4e00-\u9fa5])+@([a-zA-Z0-9]+[\.\-])+[a-zA-Z0-9]+$/.test(email):
      false;
  },
  //密码验证
  passwordValidate(password) {
    return typeof password === 'string'?
      /^\w{8,16}$/.test(password):
      false;
  },
}
