const Koa  = require('koa')
const app  = new Koa()
const cors = require('koa2-cors')
const apis = require('./apis')

const host = '';
const port = 5550

app
 .use(cors())
 .use(apis.routes())
 .use(apis.allowedMethods());

app.listen(port, host)
console.log( `server running at ${host||'localhost'}:${port||'3000'}` );
