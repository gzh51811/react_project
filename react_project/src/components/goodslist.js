import React, { Component } from 'react';

import axios from 'axios';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import cartAction from '../actions/cartAction';

class Goodslist extends Component {
    constructor() {
        super();
        this.state = {
            goods: [

            ],
            wait: "none"



        }

    }
    async componentWillMount() {
        await axios.get("http://localhost:3001/checkcart", {

        }).then(res => {

            this.props.checkCartList(res);


        })

    }
    addCart(item) {

        clearTimeout(timer)
        axios.get('http://localhost:3001/listToCart', {
            params: {
                _id: item._id,
                goods_qty: 1,
                goods_name: item.goods_name,
                goods_number: item.goods_number,
                goods_price: item.goods_price,
                goods_image: item.goods_image,
                user_goods_limit_num: item.user_goods_limit_num
            }
        }).then(res => {
            axios.get("http://localhost:3001/checkcart", {
            }).then(res => {
                this.props.checkCartList(res);
            })
        })
        clearTimeout(timer);
        this.setState({
            wait: "block"
        })
        var timer = setTimeout(() => {
            this.setState({
                wait: "none"
            })
        }, 500);

    }
    render() {

        return <><div className="scroll_component" style={{ height: "7rem" }}
            onTouchMove={this.props.screenScroll.bind(this)}
        >
            <div className="scroll_inner">
                <ul id="list_content">
                    {
                        this.props.goodslist.map(item => <li className="content_info  seckill" key={item.goods_id}>

                            <a className="" href={"#goods/" + item._id}>
                                <div className="goodsImgBox">
                                    <img src={item.goods_image} alt="" />

                                </div>
                            </a><a className="" href={"#goods/" + item._id}>
                                <p className="info_tit flag_nz">
                                    <img alt="" src="https://m.cuixianyuan.com/img/flag/1.png" className="flag_icon" />
                                    {item.goods_name}

                                </p>
                                <p className="info_des">{item.goods_jingle}</p>
                            </a><a className="" href={"#goods/" + item._id}>
                                <p className="info_spec">规格:{item.goods_number}</p>
                                <p className="info_weight hide">{item.goods_weight}</p>
                            </a>
                            <p className="pri mtlinebt"><b>{item.goods_pricerange[0].price}/件</b><i className="old_price ">￥{item.goods_pricerange[0].origin_price}/斤</i></p>
                            <p className="pri is_rang "><span>
                                约￥
                  {item.goods_pricerange[0].goods_type_price}/斤
                </span><i className="parse_rate">
                                    {item.goods_praise_rate}

                                    好评
                </i></p>
                            <p className="store_name_box" style={{ color: "rgb(255, 160, 0)" }}><img
                                src="https://img.cuixianyuan.com/store/icon/056854880109738891328.png" alt="store" />
                                {item.store_name}

                            </p>
                            <div className="add_cart" onClick={this.addCart.bind(this, item)} style={{ backgroundImage: "url(https://m.cuixianyuan.com/img/product_list/cart.png)" }}></div>

                        </li>)
                    }


                </ul>
            </div>
        </div>
            <div id="cover_module" style={{ display: this.state.wait }}></div>
        </>
    }
}

Goodslist = connect(
    state => ({

        total: state.cart.goodslist
    }),
    dispatch => bindActionCreators(cartAction, dispatch)
)(Goodslist)

export default Goodslist;
