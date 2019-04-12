import React from 'react';
// import cartAction from '../../actions/cartAction';
export default class Mine extends React.Component  {
        constructor(props,context){
            // 初始化
            super();
            this.state = {
                classnameuser:'user-info hide',
                classnamelogin:'withoutLogin',
                username:'',
                classnametuichu:'module hide'
            }
            this.tuichu= this.tuichu.bind(this);
            this.tuichuNo= this.tuichuNo.bind(this);
            this.tuichuYes= this.tuichuYes.bind(this);
        }
        componentWillMount(){
            let user = localStorage.getItem('user');
            if(user){
                this.setState({
                    username:user,
                    classnamelogin:'withoutLogin hide',
                    classnameuser:'user-info ',
                    classnametuichu:'module hide'
                })
                
            }
        }
        tuichu(){
            this.setState({
                classnametuichu:'module '
            })
        }
        tuichuNo(){
            this.setState({
                classnametuichu:'module hide'
            })
        }
        tuichuYes(){
            this.setState({
                classnametuichu:'module hide',
                classnameuser:'user-info hide',
                classnamelogin:'withoutLogin',
            })
            localStorage.removeItem('user');
        }
        render(){
            return (<div className="home" style={{backgroundColor:"#ffffff"}}>
                    <div id="wrap">
                        <div data-reactroot="" id="user">
                        <div className={this.state.classnametuichu}><div className="form"><div className="tit ">退出登录</div><div className="con">你确认退出登录吗？</div><input type="text" style={{display: 'none'}}/><div className="btn"><p className="selected" onTouchStart={this.tuichuNo}>取消</p><p className="" onTouchStart={this.tuichuYes}>确定</p></div></div></div>    
                            <div className="user_bar">
                                <div className={this.state.classnameuser}>
                                    <div className="member_avatar">
                                        <img src={require('../../assets/img/profile_icon.png')} className="user_head"/>
                                        <div className="vip_icon hide"></div>
                                    </div>
                                    <div className="name-gread">
                                        <p className="name ">
                                            欢迎，
                                            {this.state.username}
                                        </p>
                                        <p style={{color:'#ccc',marginLeft:'200px'}} onTouchStart={this.tuichu}>退出登录</p>
                                        <div className="vip_great vip0"></div><span className="signFlag">签到</span>
                                    </div>
                                </div>
                                <div className={this.state.classnamelogin}><a className="to-login-button" href="#login">登录</a><a className="to-login-button" href="#reg">注册</a>
                                </div>
                                <div className="user-account-info">
                                    <div className="account-item" data-value="0.00元" data-title="余额"></div>
                                    <div className="account-item" data-value="0个" data-title="红包"></div>
                                    <div className="account-item" data-value="0分" data-title="积分"></div>
                                </div>
                            </div>
                            <div className="order_full">
                                <a className="" href="javascript:void(0);">
                                    <div className="my_order_all" data-title="全部订单" data-info="查看全部订单"></div>
                                </a>
                                <ul>
                                    <li className="" data-num="">
                                        <a className="" href="javascript:void(0);">
                                            <img src={require('../../assets/img/user_payment.png')}/>
                                        </a>
                                    </li>
                                    <li className="" data-num="">
                                        <a className="" href="javascript:void(0);">
                                            <img src={require('../../assets/img/user_receive.png')}/>
                                        </a>
                                    </li>
                                    <li className="" data-num="">
                                        <a className="" href="#order_list/3">
                                            <img src={require('../../assets/img/user_yourself.png')}/>
                                        </a>
                                    </li>
                                    <li className="" data-num="">
                                        <a className="" href="javascript:void(0);">
                                            <img src={require('../../assets/img/user_evaluation.png')}/>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="" href="javascript:void(0);">
                                            <img src={require('../../assets/img/user_refund.png')}/>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="user_content without-boder">
                                <a className="user_item" href="javascript:void(0);">
                                    <img src={require('../../assets/img/user_all.png')}/>
                                    <p className="name">今日订单</p>
                                    <p className="point_inf">您的今日订单</p>
                                </a>
                                <a className="user_item" href="javascript:void(0);">
                                    <img src={require('../../assets/img/user_all.png')}/>
                                    <p className="name">发货单</p>
                                    <p className="point_inf">您的发货单</p>
                                </a>
                                <a className="user_item" href="javascript:void(0);">
                                    <img src={require('../../assets/img/pre_sale.png')}/>
                                    <p className="name">预售订单</p>
                                    <p className="point_inf">您的预售订单</p>
                                </a>
                                <a className="user_item" href="javascript:void(0);">
                                    <img src={require('../../assets/img/buchongxinxi.png')}/>
                                    <p className="name">完善信息</p>
                                    <p className="point_inf">您的店铺信息</p>
                                </a>
                                <a className="user_item" href="javascript:void(0);">
                                    <img src={require('../../assets/img/user_collect.png')}/>
                                    <p className="name">我的收藏</p>
                                    <p className="point_inf">收藏的店铺和商品</p>
                                </a>
                                <a className="user_item" href="javascript:void(0);">
                                    <img src={require('../../assets/img/user_adress.png')}/>
                                    <p className="name">收货地址</p>
                                    <p className="point_inf">编辑收货地址</p>
                                </a>
                                <a className="user_item" href="javascript:void(0);">
                                    <img src={require('../../assets/img/user_setting.png')}/>
                                    <p className="name">用户设置</p>
                                    <p className="point_inf">基本操作设置</p>
                                </a>
                            </div>
                            <div className="regist_select_module hide">
                                <div className="module_content_regist">
                                    <div className="close_btn_regist"></div>
                                    <div className="type_select is_supplier ">我是企业</div>
                                    <div className="type_select is_cums ">我是个人</div>
                                    <div className="sure_select_btn ">确定</div>
                                </div>
                            </div>
                            <div className="alert_box" style={{opacity: 0}}></div>
                        </div>
                    </div>
                </div>
            )
        }
    }
