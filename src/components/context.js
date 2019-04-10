import React from 'react';
import EchartsTest from './charts';
import '../pages/Goods/goods.css';
import  axios  from 'axios';
export default class Context extends React.Component {
    constructor(props,context){
        // 初始化
        super();   
        this.state = {
                classname:'classname',
                isok :false,
                num : 1,
                _id:0,
                classnameimg:'classname',
                classnamesucess:'classname',
                classnamefail:'classname'
              
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleClick1 = this.handleClick1.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);
        this.addnum = this.addnum.bind(this);
        this.minusnum = this.minusnum.bind(this);
        this.changenum = this.changenum.bind(this);
    }
    handleClick(e) {
        if(e.target.className==='btn_grouz add_cart '){
            this.setState({
                isok:false,
                classname:'',
            });
            this.setState({
                num : 1,
            });
                
        }if(e.target.className===' fade_up_box show_fd'){
            this.setState({
                isok:false,
                classname:'classname',
            }); 
        }
        if(e.target.className==='btn_grouz buy_now '){
            this.setState({
                isok:true,
                classname:'',
            });
            this.setState({
                num : 1,
            });
        }    
    }
    handleClick1(){
        let timer;
        let timer1;
        clearTimeout(timer);
        clearTimeout(timer1);
        if(this.state.isok){
            this.props.props.history.push('/cart');
        }else{
            this.setState({
                isok:false,
                classname:'classname',
                classnameimg:'classnameimg',
            }); 
        }
        axios.get('http://localhost:3001/goods', {
            params: {
            _id: this.state.id,
            state: 'addcart',
            goods_qty: this.state.num,
            goods_name: this.props.a.goods.goods_name,
            goods_number: this.props.a.goods.goods_number,
            goods_price:this.props.a.goods.goods_price,
            goods_image:this.props.a.goods.goods_image
            }
        }).then(timer=setTimeout(()=>{
            this.setState({
                classnameimg:'classname',
                classnamesucess:'classnameimg'
            })
        },1000)        
        )
        timer1=setTimeout(()=>{
            this.setState({
                classnamesucess:'classname'
            })
        },2000) 
        
    }
    handleClick2(){
        this.props.props.history.push('/cart');
    }
    addnum(e){
        let timer;
        clearTimeout(timer);
        let num = (this.state.num)+1;
        if(num>this.props.a.goods.user_goods_limit_num){
            num = this.props.a.goods.user_goods_limit_num;
        }
        if(num>5){
            num = 5;
            this.setState({
                classnamefail:'classnameimg'
            })
            timer=setTimeout(()=>{
                this.setState({
                    classnamefail:'classname'
                })
            },2000)
        }
        this.setState({
            num : num,
        }); 
    }
    minusnum(e){
        let num = this.state.num-1;
        if(num<=1){
            num=1
        }
        this.setState({
            num : num,
        }); 
    }
    changenum(e){
        let timer;
        clearTimeout(timer);
        let num = e.target.value*1;
        if(num<=1){
            num=1
        }
        if(num>5){
            num = 5;
            this.setState({
                classnamefail:'classnameimg'
            })
            timer=setTimeout(()=>{
                this.setState({
                    classnamefail:'classname'
                })
            },2000)
        }
        this.setState({
            num : num,
        }); 
    }
    

    render() {
        
        return ( 
            <div className="context">
            <div id="cover_module" className={this.state.classnameimg} ><img  src={require('../assets/img/loading.gif')} alt=""/></div>
            <div id="cover_module1"  className={this.state.classnamesucess}><p >加入购物车成功</p></div>
            <div id="cover_module2" className={this.state.classnamefail} ><p>每人每天限购5件</p></div>
                <div id="details">
                    <div id="des">
                        <p className="des_tit"> <span className="is_presellGoodsz">[秒杀]</span>
                        {this.props.a.goods.goods_name}</p>
                        <p className="des_pri">{this.props.a.goods.goods_jingle}</p>
                        <div className="des_rul">
                            <div className="rul_con singelPri"><span className="is_pri_title">{((this.props.a.goods.goods_pricerange && this.props.a.goods.goods_pricerange[0].goods_type_price)*1).toFixed(2) + ''} <i>/{this.props.a.goods.goods_unit_name}</i><b  className="old_price ">￥{((this.props.a.goods.goods_pricerange && this.props.a.goods.goods_pricerange[0].goods_type_price)*1.2).toFixed(2) + ''}/{this.props.a.goods.goods_unit_name} </b></span><span className="">约￥{this.props.a.goods.goods_promotion_price}/件 </span><span><b  className="num_bg">≥1件</b></span>
                            </div>
                        </div>
                        <div className="des_loc">
                            <p className="is_key_value hide"><span className="is_title">状态</span><span></span><span className="has_pro hide">(预计发货)</span>
            
                            </p>
                            <p className="is_last_rol hide  hide"><span style={{ 'opacity': 0}}>补充</span><span>全款预付即可预订</span>
            
                            </p>
                            <p className=" "><span>限购</span><span style={{ 'color': 'rgb(241, 142, 0)'}}>每人每天限购5件 </span>
            
                            </p>
                            <p><span>销量</span><span className="has_pro"><b  className="has_pro_title">已售</b>{this.props.a.goods.goods_salenum}件 </span>
            
                            </p>
                            <p className=" hide"><span>流程</span><span>1.全款预订    2.等待发货</span>
            
                            </p>
                            <p className="addr_icon_z"><span>送至</span><span>北京</span><span className="has_pro">有货</span><span className="freeWay">满1200.00免运费</span>
            
                            </p>
                            <p><span>规格</span><span>{this.props.a.goods.goods_number}</span>
            
                            </p>
                            <p><span>产地</span><span>{this.props.a.str.goods_producingname}</span>
            
                            </p>
                            <p ><span>果径</span><span>85-90mm</span>
            
                            </p>
                            
                        </div>
                        <EchartsTest></EchartsTest>
                        <div id="go_store" ><a className="" href="javascript:void(0)"><span>{this.props.a.goods.store_name}</span></a></div>
                        <div id="store_mark"><div className="mark_con"><span className="con_up">描述相符<i>0</i></span><span className="con_low">服务态度<i>0</i></span><span className="con_eq">发货速度<i>0</i></span></div></div>
                        
                    </div>
                    <div id="cart_buy">
                        <div className="btn_grouz service"><a href="javascript:void(0)" style={{display: 'block', height: '100%'}}><span style={{color:'#7f7f7f'}}>客服</span></a>
                        </div>
                        <div className="btn_grouz cart" onClick={this.handleClick2}><span>购物车</span>
                        </div>
                        <div className="btn_grounpbox">
                            <div className="btn_grouz add_cart " onClick={this.handleClick}>加入采购车</div>
                            <div className="btn_grouz buy_now "onClick={this.handleClick}>立即购买</div>
                        </div>
                    </div>
                    <div  className={this.state.classname +' fade_up_box show_fd' } onClick={this.handleClick}>
                        <div className="detailContainer" >
                            <div className="fade_body">
                                <div className="handerz">
                                    <div className="goodsImgBox">
                                        <img src={this.props.a.goods.goods_image} alt=''/>
                                    </div>
                                    <h4>{this.props.a.goods.goods_name}</h4>
            
                                    <p className="weightz">规格：{this.props.a.goods.goods_number}</p>
                                    <p className="priceAnum">{this.props.a.goods.goods_promotion_price}/件<span>{this.props.a.goods.user_goods_limit_num}</span>
            
                                    </p>
                                </div>
                                <div className="addnumbox" data-key="数量:"><span className="add" onClick={this.addnum} ></span>
            
                                    <input type="number" className="numGoods"  value={this.state.num} onChange={this.changenum} /><span className="minus" onClick={this.minusnum}> </span>
            
                                </div>
                            </div>
                            <button onClick={this.handleClick1}>确定</button>
                        </div>
                    </div>
                </div>
            </div>
        );
  }
        
//   Context = withAxios(Context); 
}