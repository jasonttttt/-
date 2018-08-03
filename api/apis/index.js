const Router = require('koa-router')
const fs     = require('fs')
const path   = require('path')
const router = new Router()
let   apis   = {};


// 根据请求的 pathname 来 require 相应的模块
// 如 127.0.0.1:5555/test/getData, 会返回 ./test/getData.js 
router.all('*', function (ctx, next) {
  let pathname = ctx.req._parsedUrl.pathname.replace(/(.*)\/$/, '$1');
  let variname = pathname.replace(/\//g, '_')
  let moduname = `.${pathname}`

  // 获取数据
  try {
    apis[variname] = apis[variname] || require(moduname)
  } catch(e) {
    apis[variname] = {state:0, message:e.code}
  }

  apis[variname].serverTime = Date.now();

  ctx.body = apis[variname]
})

module.exports = router
