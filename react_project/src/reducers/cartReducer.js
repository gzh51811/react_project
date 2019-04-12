/**
 * Cart Reducer
 * 关于购物车的规则
 */

import { ADD_TO_CART, REMOVE_FROM_CART, CHANGE_QTY, CLEAR_CART, DATA_IN_CART } from '../actions/cartAction'
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';

// 初始状态
let initState = {
    goodslist: [

    ]
}


// state的修改逻辑
let reducer = (state = initState, { type, payload }) => {
    // state: 上一次的状态
    // action: 修改指令
    // 返回值：返回新的state
    switch (type) {
        // 添加商品到购物车
        case DATA_IN_CART:
            return {
                ...state,
                goodslist: payload
            }

        case ADD_TO_CART:
            return {
                ...state,
                goodslist: [...state.goodslist, payload]
            }

        // 删除购物车商品
        case REMOVE_FROM_CART:
            var { data: { arr } } = state.goodslist;
            return {
                ...state,
                arr: arr.filter(item => {
                    var brr = [];
                    for (var i = 0; i < payload.id.length; i++) {
                        if (item.id != payload.id[i]) {
                            brr[i] = false;
                        } else {
                            brr[i] = true
                        }
                    }
                    return !(brr.some((yes => yes)))
                })


            }

        // 修改购物车商品数量
        case CHANGE_QTY:
            // console.log(state.goodslist)
            var { data: { arr } } = state.goodslist;
            payload.qty = payload.qty.toString();
            // console.log(arr, payload)
            return {
                ...state,
                arr: arr.map(item => {
                    if (payload.qty >= 5) {
                        payload.qty = 5
                    } else if (payload.qty <= 1) {
                        payload.qty = 1
                    }
                    item._id === payload.id ? item.goods_qty = payload.qty : item.goods_qty = item.goods_qty;
                    // console.log('1231231', item)
                    return item;
                }

                )
            }

        // 清空购物车
        case CLEAR_CART:
            return {
                ...state,
                goodslist: []
            }

        default:
            return state;
    }
}

export default reducer;