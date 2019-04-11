const Router = require('koa-router');

const db = require('../db');

// 创建路由
var router = new Router();


/**
 * ctx
 */

router.post('/', async (ctx, next) => {
    // ctx.set("Access-Control-Allow-Origin", "*");
    ctx.set("Access-Control-Allow-Origin", "*");
    // console.log(ctx.query)
    let { currentList, currentCate } = ctx.request.body;
    // let res = await db.find('goodslist', {});

    if (currentList === "a") {
        if (currentCate === "1") {
            var res = await db.find("goodslist", { 'goods_name': /苹果/ });
        } else {
            res = await db.find("goodslist", {});
        }

    } else {

        res = await db.find("goodslist", { 'goods_name': /梨/ });

    }


    // console.log(res)
    ctx.body = { code: res };
});

module.exports = router;