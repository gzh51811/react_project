const Router = require('koa-router');

const db = require('../db');

// 创建路由
var router = new Router();


/**
 * ctx
 */
// const ObjectId = require('mongodb').ObjectID;
// function check() {

// }
router.get('/', async (ctx, next) => {
    ctx.set("Access-Control-Allow-Origin", "*")
    // console.log(ctx.query)
    // let { currentList, currentCate } = ctx.query;
    // let res = await db.find('goodslist', {});
    // console.log(currentList, currentCate)

    let arr = await db.find("cartlist", {});

    // console.log(arr)
    ctx.body = { arr };
});

module.exports = router;