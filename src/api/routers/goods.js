const Router = require('koa-router');

const db = require('../db');

// 创建路由
var router = new Router();

const ObjectId = require('mongodb').ObjectID;

/**
 * ctx
 */

router.get('/', async (ctx, next) => {
    ctx.set("Access-Control-Allow-Origin", "*");
    let { _id, state } = ctx.query;
    if (state === 'initialize') {
        let res = await db.find('goodslist', { "_id": new ObjectId(_id) });
        ctx.body = { code: res };
    }

    if (state === 'addcart') {
        console.log(_id)
        let res = await db.find('cartlist', { "id": _id });

        // console.log(res.length);
        if (res.length > 0) {
            let { goods_qty } = ctx.query;
            goods_qty = res[0].goods_qty * 1 + goods_qty * 1;
            if (goods_qty > 5) {
                goods_qty = 5
            }
            db.update('cartlist', { 'id': _id }, { $set: { 'goods_qty': goods_qty } });
        } else {
            let { goods_qty: qty, goods_name, goods_number, goods_price, goods_image } = ctx.query;
            db.insert('cartlist', { 'id': _id, 'goods_qty': qty, 'goods_name': goods_name, 'goods_number': goods_number, 'goods_price': goods_price, 'goods_image': goods_image });
        }
        ctx.body = { code: res };
    }

});

module.exports = router;