module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'financial-planner',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // { rel:'stylesheet', href:"https://unpkg.com/element-ui@2.4.4/lib/theme-chalk/index.css" },
      // { rel:"stylesheet", href:"https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css"},
    ],
    script: [
      // rem2px
      { src:"/js/setSizeUnit.js" }
    ],
  },
  css: [
    { src:'~assets/css/common.less',lang:'less' }
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  env: {
    ENV_NAME:process.env.ENV_NAME
  },
  plugins:[
    // { src: '~plugins/element-ui',ssr:false },
    { src: '~plugins/vue-inject', ssr:false }
  ],
  build: {
  // vendor: ['element-ui'],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
