import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    userInfo:null,
    dialog: {
      show:false,
      text:'',
      delay:2000,
      timer:-1,
    }
  },
  mutations: {
    setUserInfo( state, obj ){
      state.userInfo = obj
    },
    showDialog(state, obj) {
      let dialog = state.dialog;
      clearTimeout(dialog.timer);
      dialog.timer = setTimeout(()=>{
        dialog.show = false;
      }, obj.delay||dialog.delay);
      dialog.text = obj.text;
      dialog.show = true;
    }
  }
})

export default store
