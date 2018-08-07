export default {
  data() {
    return {
      someData:'data from mixins'
    }
  },
  beforeCreate() {
    console.log('_____hook beforeCreate from mixins')
  },
  mounted() {
    console.log('_____hook mounted from mixins')
  }
}
