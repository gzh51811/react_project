const Koa = require('koa');
const Router = require('koa-router');
const koaBody = require('koa-body');

// 创建路由
var router = new Router();

// 引入页面路由

const listRouter = require('./goodslist');
const cartRouter = require('./checkcart');
const addcartRouter = require('./addcart');
const listToCartRouter = require('./listToCart');

let url = '';
router.use('/', koaBody({
    // 支持formdata
    multipart: true,

    // 文件支持
    formidable: {
        // 指定保存路径
        uploadDir: './img',
        keepExtensions: true,
        // 改文件名
        onFileBegin(filename, file) {
            // filename: 上传文件的原始名
            // file:文件信息对象
            //   * path:
            // console.log(file.path)
            url = file.path;
            // file.path = './images/' + filename;
        }
    }
}));
router.use('/addcart', addcartRouter.routes());
router.use('/goodslist', listRouter.routes());
router.use('/checkcart', cartRouter.routes());
router.use('/listToCart', listToCartRouter.routes());
module.exports = router;