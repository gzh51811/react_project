
import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import cartAction from '../../actions/cartAction';
// import cartAction from '../../actions/cartAction';
class Cart extends React.Component {
    constructor() {
        super();
        this.state = {

            checkbox_Act: "pub_checkbox active",
            checkbox: "pub_checkbox ",
            allCheckbox: [],
            noGoods: "withoutGoods_showBox  ",
            isPickAll: true,
            wait: "none",
            hidefirst: "none",
            showfirst: "block",
            isHide: true

        }
    }
    // componentDidUpdate() {
    //    



    // }

    async componentWillMount() {


        await axios.get("http://localhost:3001/checkcart", {

        }).then(res => {

            this.props.checkCartList(res);

            if (this.props.goodslist.data && this.props.goodslist.data.arr.length) {
                this.setState({
                    noGoods: "withoutGoods_showBox  hide"
                })
            } else {
                this.setState({
                    noGoods: "withoutGoods_showBox "
                })
            }
        })


        let arr1 = this.props.goodslist.data.arr.map(item => true)


        this.setState({
            allCheckbox: arr1,

        });





    }

    changeCheckbox(idx) {

        var arr = this.state.allCheckbox;
        arr[idx] = !this.state.allCheckbox[idx];
        this.setState({
            allCheckbox: arr
        });
        if (this.state.allCheckbox.every(item => item)) {
            this.setState({
                isPickAll: true
            })
        } else {
            this.setState({
                isPickAll: false
            })
        }

    }
    pickAll() {
        let { isPickAll } = this.state;

        isPickAll = !isPickAll;

        this.setState({
            isPickAll: isPickAll
        })
        var arr = this.state.allCheckbox;

        if (isPickAll) {
            arr = arr.map(item => true)

            this.setState({
                allCheckbox: arr
            })
        } else {
            arr = arr.map(item => false)

            this.setState({
                allCheckbox: arr
            })
        }

    }
    changeQty(item, idx) {

        let { changeqty } = this.props;
        let { goodslist: { data } } = this.props;
        let qty = item.goods_qty * 1 + 1;

        axios.get("http://localhost:3001/addcart", {
            params: {
                id: item.id,
                qty: qty,

            }
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
        changeqty(item._id, qty);


    }
    reduceQty(item, idx) {
        let { changeqty } = this.props;
        let { goodslist: { data } } = this.props;
        let qty = item.goods_qty * 1 - 1;
        clearTimeout(timer);
        this.setState({
            wait: "block"
        })
        axios.get("http://localhost:3001/addcart", {
            params: {
                id: item.id,
                qty: qty,

            }
        })
        var timer = setTimeout(() => {
            this.setState({
                wait: "none"
            })
        }, 500);
        changeqty(item._id, qty);
    }
    totalPrice() {
        let { allCheckbox } = this.state;
        let { goodslist: { data } } = this.props;
        let total = 0;

        if (data) {
            allCheckbox.map((item, idx) => {
                if (item) {

                    total += data.arr[idx].goods_price * data.arr[idx].goods_qty;

                }
            })
        }

        return total;
    }
    goToRemove(e) {
        let { isHide, allCheckbox } = this.state;

        if (isHide) {
            e.target.innerHTML = "完成";
            this.del.innerHTML = "删除";
            this.setState({
                hidefirst: "block",
                showfirst: "none",
                isHide: false,
                isPickAll: false,
                allCheckbox: allCheckbox.map(item => false)
            })
        } else {
            e.target.innerHTML = "编辑";
            this.del.innerHTML = "确认订单";
            this.setState({
                hidefirst: "none",
                showfirst: "block",
                isHide: true,
                isPickAll: true,
                allCheckbox: allCheckbox.map(item => true)
            })
        }
    }
    delChosen() {
        let { remove } = this.props;
        if (this.del.innerHTML === "删除") {
            let arr = [];
            for (var i = 0; i < this.state.allCheckbox.length; i++) {
                if (this.state.allCheckbox[i]) {
                    arr.push(i)
                }
            }
            let arr1 = arr.map(item => {

                return this.props.goodslist.data.arr[item].id
            })




            var hrr = this.props.goodslist.data.arr.filter(item => {
                var brr = [];
                for (var i = 0; i < arr1.length; i++) {
                    if (item.id != arr1[i]) {
                        brr[i] = false;
                    } else {
                        brr[i] = true
                    }
                }

                return !(brr.some((yes => yes)))
            })
            this.props.goodslist.data.arr = hrr;


            this.props.checkCartList(this.props.goodslist)

            var params = new URLSearchParams();
            params.append("id", arr1); //你要传给后台的参数值 key/value
            axios({
                method: "post",
                url: "http://localhost:3001/addcart",
                data: params
            }).then(res => {

                clearTimeout(timer);
                this.setState({
                    wait: "block",
                    allCheckbox: [],
                    isPickAll: false
                })
                var timer = setTimeout(() => {
                    this.setState({
                        wait: "none"
                    })
                }, 1000);
            })

            if (this.props.goodslist.data && this.props.goodslist.data.arr.length) {
                this.setState({
                    noGoods: "withoutGoods_showBox  hide"
                })
            } else {
                this.setState({
                    noGoods: "withoutGoods_showBox "
                })
            }



        }
    }
    goToList() {
        this.props.history.push("/list")
    }

    render() {

        let { goodslist, changeqty, remove } = this.props;


        let total = 0;

        if (goodslist.data && goodslist.data.arr.length) {
            total = this.totalPrice().toFixed(2);
        }




        return <div id="cart">
            <div className="nav_text is_fixed"><div className="nav_back"></div><div className="nav_tit">购物车</div><div className="nav_singin" onClick={this.goToRemove.bind(this)}>编辑</div></div>

            <ul id="cart_li" className="">
                <li className="li_con">
                    <div className="shop_tit">
                        <div className={this.state.isPickAll ? this.state.checkbox_Act : this.state.checkbox} onClick={this.pickAll.bind(this)}></div><a className="shop" href="#/store/49">北京亲哥俩儿商贸有限公司</a>
                    </div>
                    {
                        goodslist.data && goodslist.data.arr.map((item, idx) => <div className="cart_pro " key={item._id}>
                            <div className={this.state.allCheckbox[idx] ? this.state.checkbox_Act : this.state.checkbox} style={{ left: "-9px" }} onClick={this.changeCheckbox.bind(this, idx)}></div>
                            <div className="pro_info"><a className="" href="javascript:;">
                                <div className="goodsImgBox" style={{ margin: "0 0rem" }}><img
                                    src={item.goods_image} alt="" /></div>
                                <p className="tit" style={{
                                    position: "absolute",
                                    right: 0
                                }}>{item.goods_name}</p>
                                <p className="unit_pri" style={{
                                    position: "absolute",
                                    left: "108px",
                                    top: "25px"
                                }}>{item.goods_number}</p>
                            </a>
                                <p className="pri">{item.goods_price}</p>
                                <div className="change_num active"><span className="min" onClick={this.reduceQty.bind(this, item, idx)}>-</span><input type="text" className="num" value={item.goods_qty} onChange={changeqty.bind(this)} /><span
                                    className="add" onClick={this.changeQty.bind(this, item, idx)}>+</span></div>
                            </div>
                        </div>)
                    }

                </li>

            </ul>
            <div id="cover_module" style={{ display: this.state.wait }}></div>
            <div className={this.state.noGoods}><img src={require("../../assets/img/cart_none.png")} alt="" /><p>购物车还是空的哦</p><span onClick={this.goToList.bind(this)}>我要采购</span></div>

            <div className="go_pay"><div className={this.state.isPickAll ? this.state.checkbox_Act : this.state.checkbox} onClick={this.pickAll.bind(this)}></div><div className="check_all">全选</div><div className="pri_text" style={{ display: this.state.showfirst }}><span><span>合计:</span><i>{total}</i></span><span>(不含运费)</span></div><div className="comfirm_order" style={{ width: "2.2rem" }} ref={(del => this.del = del)} onClick={this.delChosen.bind(this)}>确认订单</div></div>

        </div >
    }

}

Cart = connect(
    state => ({
        goodslist: state.cart.goodslist,
        // total: state.cart.goodslist
    }),
    dispatch => bindActionCreators(cartAction, dispatch)
)(Cart)


export default Cart;