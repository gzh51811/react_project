const Router = require('koa-router');

const db = require('../db');

// 创建路由
var router = new Router();


/**
 * ctx
 */
router.post('/',async (ctx,next)=>{
    ctx.set("Access-Control-Allow-Origin", "*");
    // 解构
    console.log(ctx.request.body);
    let {password,phone} = ctx.request.body;
    let data = {phone,password,regtime:Date.now()}
    let res = await db.insert('users',data);
    ctx.body = res.result;

    // 存入数据库

});

// 判断用户名是否存在
router.get('/',async (ctx,next)=>{
    ctx.set("Access-Control-Allow-Origin", "*");
    let {phone,state} = ctx.query;
    if(state==='initialize'){
        let res = await db.find('users',{phone});
        if(res.length>0){
            ctx.body = 'no'
        }else{
            ctx.body = 'yes'
        }
    }
    if(state==='login'){
        let {password} = ctx.query;
        let res = await db.find('users',{phone,password});
        console.log(res,password,phone)
        if(res.length>0){
            ctx.body = 'yes'
        }else{
            ctx.body = 'no'
        }
    }
    
});

module.exports = router;