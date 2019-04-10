const Router = require('koa-router');

const db = require('../db');

// 创建路由
var router = new Router();

// const ObjectId = require('mongodb').ObjectID;

/**
 * ctx
 */

router.get('/', async (ctx, next) => {
    ctx.set("Access-Control-Allow-Origin", "*");
    let { id, qty } = ctx.query;

    // console.log(id, qty, state)
    // console.log(list)

    // let res = await db.find('cartlist', { "id": id });
    // console.log(res)
    if (qty > 5) {
        qty = 5;
    } else if (qty <= 1) {
        qty = 1;
    }
    db.update('cartlist', { 'id': id }, { $set: { 'goods_qty': qty } });

    ctx.body = { msg: "添加成功", code: 1 };

    // ctx.body = { code: 1 };
});

router.post('/', async (ctx, next) => {
    ctx.set("Access-Control-Allow-Origin", "*");
    let { id } = ctx.request.body;
    let gid = id.split(",");
    // console.log(gid)
    for (var i of gid) {

        await db.delete('cartlist', { 'id': i });
    }




    ctx.body = { code: 1 };
});

module.exports = router;