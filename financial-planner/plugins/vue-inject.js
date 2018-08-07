import Vue from 'vue'
import axios from '~/plugins/axios'
import util from '~/util'

Vue.prototype.$http = axios
Vue.prototype.$util = util

export default null
