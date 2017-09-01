const Koa = require("koa");
const koacors = require("koa2-cors");//允许跨域
const bodyParser = require("koa-bodyparser");//用来解析body的中间件
const app = new Koa();
const config = require('./config');
const routers = require('./routers/index')
//添加格式化处理响应结果的中间件，在添加路由之前调用
app.use(koacors());
app.use(bodyParser());
// 初始化路由中间件
app.use(routers.routes()).use(routers.allowedMethods());

app.listen(config.port);
console.log('app started at port '+ config.port+' ...');