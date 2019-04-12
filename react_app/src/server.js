const Koa = require('koa');
const static1 = require('koa-static');

// 路由
const routers = require('./api/routers');

// 创建koa应用
const app = new Koa();//app.context

app.context.myname = 'cxy'

// 创建静态资源服务
app.use(static1('./'));
// 处理status为404或null时，完善response信息
app.use(routers.allowedMethods());
app.use(routers.routes());


// 监听端口
app.listen(3001, () => {
    console.log('server is running on http://localhost:3001');
})