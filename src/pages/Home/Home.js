import React from 'react';

import { Carousel } from 'antd';
import "./home.css";
class Home extends React.Component {
    constructor() {
        super();
        this.state = {
           miaosha:"active_tab_item",
           ms:[
                {
                    time:"13:00",
                    todo:"即将开始"
                },
                {
                    time:"17:00",
                    todo:"正在秒杀"
                },
                {
                    time:"20:00",
                    todo:"即将开始"
                }
            ],
            mst:[
                true,false,false
            ]
        }
    }
    componentDidMount(){
        var timer = setInterval(() => {
            
        }, 1500);
    }
    changemiaosha(idx){
        this.setState({
            mst:this.state.mst.map((item,num)=>{

                if(num===idx) {
                    return true
                }else{
                    return false
                }
            })
        })
            
    }

    render() {
        return <div id="wrap">
        <div data-reactroot="" id="index" className="app-to-animat ">
        <Carousel autoplay>
            <div><h3 style={{width:"100%",height:"100%",fontSize:"0"}}>
                <img src={require("../../assets/img/banner1.png")} alt="" style={{width:"100%",height:"100%"}}/>
                </h3></div>
            <div><h3 style={{width:"100%",height:"100%",fontSize:"0"}}><img src={require("../../assets/img/banner2.jpg")} alt="" style={{width:"100%",height:"100%"}}/></h3></div>
            <div><h3 style={{width:"100%",height:"100%",fontSize:"0"}}><img src={require("../../assets/img/banner3.jpg")} alt="" style={{width:"100%",height:"100%"}}/></h3></div>
            <div><h3 style={{width:"100%",height:"100%",fontSize:"0"}}><img src={require("../../assets/img/banner4.jpg")} alt="" style={{width:"100%",height:"100%"}}/></h3></div>
        </Carousel>
        
          <div className="today_top"><img src={require("../../assets/img/headlines.png")} className="head_img" alt=""/>
            <div className="avi_out_box">
              <div className="auto_scroll_box" style={{"transform": "translate(0px, 0rem)"}}><a
                  href="https://m.cuixianyuan.com/activityWeek.html">4月第一周果品行情简报</a></div>
            </div>
          </div>
          <div>
            <div className="endTime_sole">
              <div className="limit-title limit-number">限量疯抢</div>
              <div className="end_container "><span className="tip_textz">限购数量</span><span className="limit_num_box">
                  500
    
                  件
                </span></div>
            </div>
            <div className="end_time_goods">
              <div className="endTime_goods_img"><img src="https://img.cuixianyuan.com/template/home/06082031347776900.png"
                  style={{"width": "2.12rem", height: "2.12rem"}}  alt=""/><span className="limit_video_icon" style={{"display": "none"}}></span>
              </div>
              <div className="goods_item_inf">
                <h4>云南麒麟西瓜</h4>
                <p className="desc_inf">皮薄瓤红 味甜多汁</p>
                <div className="pri_out_box">
                  <p className="pri_box"><span className="pri_num"><i style={{"color": "rgb(241, 142, 0)"}}>￥</i>
                      3.3
                      <i>
                        /
    
                        斤
                      </i></span></p>
                  <p className="old_pri_box">
                    原价:￥
                    <span>
                      3.9
    
                      /
    
                      斤
                    </span></p>
                </div><span className="to_buy_btnz startBtn"></span>
              </div>
            </div>
          </div>
          <div>
            <div className="endTime_sole">
              <div className="limit-title" style={{"width": "1rem"}}>限时疯抢</div>
              <div className="end_container  "><span className="tip_textz">剩余时间</span><span className="end_time_box">1</span><span
                  className="end_time_box">0</span><img src="https://m.cuixianyuan.com/img/index/maohao_h.png" className="tiem_btwwo "/><span
                  className="end_time_box">0</span><span className="end_time_box">5</span><img src="https://m.cuixianyuan.com/img/index/maohao_h.png"
                  className="tiem_btwwo "/><span className="end_time_box">1</span><span className="end_time_box">4</span></div>
              <div className="end_container hide"><span className="tip_textz">活动时间</span><span className="activeDate">4月10日 13:00 -- 10日
                  23:59</span></div>
            </div>
            <div className="end_time_goods">
              <div className="endTime_goods_img"><img src="https://img.cuixianyuan.com/template/home/06082055445469476.png"
                  style={{"width": "2.12rem", height: "2.12rem"}}/><span className="limit_video_icon" style={{"display": "none"}}></span>
              </div>
              <div className="goods_item_inf">
                <h4>丹东99草莓</h4>
                <p className="desc_inf">鲜美红嫩 酸甜多汁</p>
                <div className="pri_out_box">
                  <p className="pri_box"><span className="pri_num"><i style={{"color": "rgb(241, 142, 0)"}}>￥</i>
                      12.5
                      <i>
                        /斤
                      </i></span></p>
                  <p className="old_pri_box">
                    原价:￥
                    <span>16</span></p>
                </div><span className="to_buy_btnz startBtn"></span>
              </div>
            </div>
          </div>
          <div className="seckill_sole_box">
            <div className="secKill_sole">
              <div className="seckill-title">
                <div className="seckill_title"><img src="/img/home_seckill.png"/><span className="title">整点秒杀</span></div>
              </div>
              <div className="seckill_tab">
                
               
                {
                    this.state.ms.map((item,idx)=>{
                       return <div key={idx} className={["tab_item",this.state.mst[idx]&&"active_tab_item"].join(' ')} onClick={this.changemiaosha.bind(this,idx)}><span>
                    {item.time}
                  </span><span>{item.todo}</span></div>
                    })
                }
              
              </div>
            </div>
            <div className="seckill_goods_info">
              <div className="seckill_info">
                <div className="img"><img src="https://img.cuixianyuan.com/template/home/06082035872114181.png"/><span
                    className="seckill_video_icon" style={{"display": "none"}}></span></div>
                <div className="goods_item_info">
                  <p className="title" style={{"marginTop": "0px"}}>大连黄油桃</p>
                  <p className="goods_jingle">肉质细嫩 味美香甜</p>
                  <div className="progress_bar">
                    <div className="bar_box">
                      <div className="bar_inner" style={{"width": "0.048rem"}}></div>
                    </div><span className="sell_percent">
                      已抢
    
                      2
                      %
                    </span>
                  </div>
                  <p className="price_box">
                    >秒杀价：￥
                    <span className="activity_price">8.9</span>
    
                    /斤
    
                  </p>
                  <p className="original_price">
                    ￥9.5/斤
                  </p>
                  <div className="btn">去秒杀</div>
                </div>
                <div className="clearfix"></div>
                <div className="alert_box" style={{"opacity": "0"}}></div>
              </div>
            </div>
          </div>
          <div>
            <div className="week_great"><img src="https://m.cuixianyuan.com/img/index/selected.png" className="head_img"/></div>
            <div className="week_great_box">
              <ul>
                <li><a className="" href="#details/18017"><img
                      src="https://img.cuixianyuan.com/template/home/06082036148981879.png"/>
                    <h4>泰国山竹</h4>
                    <p className="now_pri" style={{"marginTop": "0rem"}}>
                      ￥
    
                      199/件
    
                    </p>
                    <p className="old_pri ">
                      ￥
    
                      239/件
    
                    </p>
                  </a></li>
                <li><a className="" href="#details/16431"><img
                      src="https://img.cuixianyuan.com/template/home/06082038709986242.png"/>
                    <h4>越南红心火龙果</h4>
                    <p className="now_pri" style={{"marginTop": "0rem"}}>
                      ￥
    
                      99/件
    
                    </p>
                    <p className="old_pri ">
                      ￥
    
                      110/件
    
                    </p>
                  </a></li>
                <li><a className="" href="#details/12963"><img
                      src="https://img.cuixianyuan.com/template/home/06082041331303912.png"/>
                    <h4>新西兰佳沛金果</h4>
                    <p className="now_pri" style={{"marginTop": "0rem"}}>
                      ￥
    
                      188/件
    
                    </p>
                    <p className="old_pri ">
                      ￥
    
                      195/件
    
                    </p>
                  </a></li>
                <li><a className="" href="#details/17906"><img
                      src="https://img.cuixianyuan.com/template/home/06082049602114031.png"/>
                    <h4>辽宁花生柿子</h4>
                    <p className="now_pri" style={{"marginTop": "0rem"}}>
                      ￥
    
                      137.5/件
    
                    </p>
                    <p className="old_pri ">
                      ￥
    
                      145.5/件
    
                    </p>
                  </a></li>
                <li><a className="" href="#details/17012"><img
                      src="https://img.cuixianyuan.com/template/home/06082043972737129.png"/>
                    <h4>云南黑提</h4>
                    <p className="now_pri" style={{"marginTop": "0rem"}}>
                      ￥
    
                      10.5/斤
    
                    </p>
                    <p className="old_pri ">
                      ￥
    
                      12.4/斤
    
                    </p>
                  </a></li>
                <li><a className="" href="#details/7464"><img
                      src="https://img.cuixianyuan.com/template/home/06081171866733418.png"/>
                    <h4>海南小台农芒果</h4>
                    <p className="now_pri" style={{"marginTop": "0rem"}}>
                      ￥
    
                      60/件
    
                    </p>
                    <p className="old_pri ">
                      ￥
    
                      65/件
    
                    </p>
                  </a></li>
                <li><a className="" href="#details/12829"><img
                      src="https://img.cuixianyuan.com/template/home/06082045637170233.png"/>
                    <h4>海南黄菠萝</h4>
                    <p className="now_pri" style={{"marginTop": "0rem"}}>
                      ￥
    
                      80/件
    
                    </p>
                    <p className="old_pri ">
                      ￥
    
                      98/件
    
                    </p>
                  </a></li>
                <li><a className="" href="#details/15059"><img
                      src="https://img.cuixianyuan.com/template/home/06082047447830256.png"/>
                    <h4>国产香蕉</h4>
                    <p className="now_pri" style={{"marginTop": "0rem"}}>
                      ￥
    
                      72/件
    
                    </p>
                    <p className="old_pri ">
                      ￥
    
                      85/件
    
                    </p>
                  </a></li>
                <li><a className="" href="#details/17829"><img
                      src="https://img.cuixianyuan.com/template/home/06078585912881178.png"/>
                    <h4>大连美早樱桃</h4>
                    <p className="now_pri" style={{"marginTop": "0rem"}}>
                      ￥
    
                      36/斤
    
                    </p>
                    <p className="old_pri ">
                      ￥
    
                      42/斤
    
                    </p>
                  </a></li>
              </ul>
            </div>
          </div>
          <div>
            <div className="hot_floruit"><img src="https://m.cuixianyuan.com/img/index/fruits.png" className="head_img" alt=""/></div>
            <div className="hot_floruit_slider" id="hot_floruit_slider">
              <div className="tempWrap" style={{"overflow":"hidden", position:"relative"}}>
                <div className="main_boxzzz"
                  style={{"width": "1125px", position: "relative", overflow: "hidden", padding: "0px", margin: "0px", transitionDuration: "0ms", transform: "translate(-375px, 0px) translateZ(0px)"}}>
                  <div className="hot_floruit_box" style={{"display":" table-cell", verticalAlign: "top", width: "375px"}}><a className=""
                      href="#/search_result/%E8%8D%89%E8%8E%93"><img
                        src="https://img.cuixianyuan.com/template/home/06030192995122225.png" alt=""/>
                      <p>草莓</p>
                    </a><a className="" href="#/search_result/%E8%8B%B9%E6%9E%9C"><img
                        src="https://img.cuixianyuan.com/template/home/05887038772553771.png" alt=""/>
                      <p>苹果</p>
                    </a><a className="" href="#/search_result/%E9%A6%99%E8%95%89"><img
                        src="https://img.cuixianyuan.com/template/home/05339202700647839.png" alt=""/>
                      <p>香蕉</p>
                    </a><a className="" href="#/search_result/%E5%B1%B1%E7%AB%B9"><img
                        src="https://img.cuixianyuan.com/template/home/06045868624711463.png" alt=""/>
                      <p>山竹</p>
                    </a><a className="" href="#/search_result/%E6%B2%B9%E6%A1%83"><img
                        src="https://img.cuixianyuan.com/template/home/06057014966644141.png" alt=""/>
                      <p>油桃</p>
                    </a><a className="" href="#/search_result/%E8%BF%9B%E5%8F%A3%E8%91%A1%E6%8F%90"><img
                        src="https://img.cuixianyuan.com/template/home/06045868818902683.png" alt=""/>
                      <p>葡提</p>
                    </a><a className="" href="#/search_result/%E6%A9%98%E5%AD%90"><img
                        src="https://img.cuixianyuan.com/template/home/05959420368425574.png" alt=""/>
                      <p>橘子</p>
                    </a><a className="" href="#/search_result/%E8%93%9D%E8%8E%93"><img
                        src="https://img.cuixianyuan.com/template/home/05959419220972857.png" alt=""/>
                      <p>蓝莓</p>
                    </a><a className="" href="#/search_result/%E6%A8%B1%E6%A1%83"><img
                        src="https://img.cuixianyuan.com/template/home/06057015148199098.png" alt=""/>
                      <p>樱桃</p>
                    </a><a className="" href="#/search_result/%E7%81%AB%E9%BE%99%E6%9E%9C"><img
                        src="https://img.cuixianyuan.com/template/home/05372730695060968.png" alt=""/>
                      <p>火龙果</p>
                    </a><a className="" href="#/search_result/%E6%A6%B4%E8%8E%B2"><img
                        src="https://img.cuixianyuan.com/template/home/05775356059317414.png" alt=""/>
                      <p>榴莲</p>
                    </a><a className="" href="#/search_result/%E8%A5%BF%E7%93%9C"><img
                        src="https://img.cuixianyuan.com/template/home/05430014105767717.png" alt=""/>
                      <p>西瓜</p>
                    </a></div>
                  <div className="hot_floruit_box" style={{"display":" table-cell", verticalAlign: "top", width: "375px"}}><a className=""
                      href="#/search_result/%E8%8D%89%E8%8E%93"><img
                        src="https://img.cuixianyuan.com/template/home/06030192995122225.png" alt=""/>
                      <p>草莓</p>
                    </a><a className="" href="#/search_result/%E8%8B%B9%E6%9E%9C"><img
                        src="https://img.cuixianyuan.com/template/home/05887038772553771.png" alt=""/>
                      <p>苹果</p>
                    </a><a className="" href="#/search_result/%E9%A6%99%E8%95%89"><img
                        src="https://img.cuixianyuan.com/template/home/05339202700647839.png" alt=""/>
                      <p>香蕉</p>
                    </a><a className="" href="#/search_result/%E5%B1%B1%E7%AB%B9"><img
                        src="https://img.cuixianyuan.com/template/home/06045868624711463.png" alt=""/>
                      <p>山竹</p>
                    </a><a className="" href="#/search_result/%E6%B2%B9%E6%A1%83"><img
                        src="https://img.cuixianyuan.com/template/home/06057014966644141.png" alt=""/>
                      <p>油桃</p>
                    </a><a className="" href="#/search_result/%E8%BF%9B%E5%8F%A3%E8%91%A1%E6%8F%90"><img
                        src="https://img.cuixianyuan.com/template/home/06045868818902683.png" alt=""/>
                      <p>葡提</p>
                    </a><a className="" href="#/search_result/%E6%A9%98%E5%AD%90"><img
                        src="https://img.cuixianyuan.com/template/home/05959420368425574.png" alt=""/>
                      <p>橘子</p>
                    </a><a className="" href="#/search_result/%E8%93%9D%E8%8E%93"><img
                        src="https://img.cuixianyuan.com/template/home/05959419220972857.png" alt=""/>
                      <p>蓝莓</p>
                    </a><a className="" href="#/search_result/%E6%A8%B1%E6%A1%83"><img
                        src="https://img.cuixianyuan.com/template/home/06057015148199098.png" alt=""/>
                      <p>樱桃</p>
                    </a><a className="" href="#/search_result/%E7%81%AB%E9%BE%99%E6%9E%9C"><img
                        src="https://img.cuixianyuan.com/template/home/05372730695060968.png" alt=""/>
                      <p>火龙果</p>
                    </a><a className="" href="#/search_result/%E6%A6%B4%E8%8E%B2"><img
                        src="https://img.cuixianyuan.com/template/home/05775356059317414.png" alt=""/>
                      <p>榴莲</p>
                    </a><a className="" href="#/search_result/%E8%A5%BF%E7%93%9C"><img
                        src="https://img.cuixianyuan.com/template/home/05430014105767717.png" alt=""/>
                      <p>西瓜</p>
                    </a></div>
                  <div className="hot_floruit_box" style={{"display":" table-cell", verticalAlign: "top", width: "375px"}}><a className=""
                      href="#/search_result/%E8%8D%89%E8%8E%93"><img
                        src="https://img.cuixianyuan.com/template/home/06030192995122225.png" alt=""/>
                      <p>草莓</p>
                    </a><a className="" href="#/search_result/%E8%8B%B9%E6%9E%9C"><img
                        src="https://img.cuixianyuan.com/template/home/05887038772553771.png" alt=""/>
                      <p>苹果</p>
                    </a><a className="" href="#/search_result/%E9%A6%99%E8%95%89"><img
                        src="https://img.cuixianyuan.com/template/home/05339202700647839.png" alt=""/>
                      <p>香蕉</p>
                    </a><a className="" href="#/search_result/%E5%B1%B1%E7%AB%B9"><img
                        src="https://img.cuixianyuan.com/template/home/06045868624711463.png" alt=""/>
                      <p>山竹</p>
                    </a><a className="" href="#/search_result/%E6%B2%B9%E6%A1%83"><img
                        src="https://img.cuixianyuan.com/template/home/06057014966644141.png" alt=""/>
                      <p>油桃</p>
                    </a><a className="" href="#/search_result/%E8%BF%9B%E5%8F%A3%E8%91%A1%E6%8F%90"><img
                        src="https://img.cuixianyuan.com/template/home/06045868818902683.png" alt=""/>
                      <p>葡提</p>
                    </a><a className="" href="#/search_result/%E6%A9%98%E5%AD%90"><img
                        src="https://img.cuixianyuan.com/template/home/05959420368425574.png" alt=""/>
                      <p>橘子</p>
                    </a><a className="" href="#/search_result/%E8%93%9D%E8%8E%93"><img
                        src="https://img.cuixianyuan.com/template/home/05959419220972857.png" alt=""/>
                      <p>蓝莓</p>
                    </a><a className="" href="#/search_result/%E6%A8%B1%E6%A1%83"><img
                        src="https://img.cuixianyuan.com/template/home/06057015148199098.png" alt=""/>
                      <p>樱桃</p>
                    </a><a className="" href="#/search_result/%E7%81%AB%E9%BE%99%E6%9E%9C"><img
                        src="https://img.cuixianyuan.com/template/home/05372730695060968.png" alt=""/>
                      <p>火龙果</p>
                    </a><a className="" href="#/search_result/%E6%A6%B4%E8%8E%B2"><img
                        src="https://img.cuixianyuan.com/template/home/05775356059317414.png" alt=""/>
                      <p>榴莲</p>
                    </a><a className="" href="#/search_result/%E8%A5%BF%E7%93%9C"><img
                        src="https://img.cuixianyuan.com/template/home/05430014105767717.png" alt=""/>
                      <p>西瓜</p>
                    </a></div>
                </div>
              </div>
              <div className="hot_circle">
                <ul>
                  <li className="on">1</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="advertisement"><img src="https://img.cuixianyuan.com/template/home/05654011074952009.jpg"  alt=""/></div>
          <nav className=""><a id="go_home" className="active" href="#/"></a><a id="go_class" className="" href="#/list/0/0"></a><a
              id="go_cart" className=" has_cart" data-num="1" href="#/cart"></a><a id="go_my" className="" href="#/user"></a></nav>
          <div id="searchBox" className="searchBoxs">
            <input type="text" placeholder="请输入您要搜索的内容"/>
            <span className="signButton">
                签到
            </span>
          </div>
         
          <div className="woAppContainer hideAppTo" id="woAppContainer"><span className="appTipClose"></span><img
              src="/img/download/icon_cxy.png"  alt=""/>
            <h3>翠鲜缘APP</h3>
            <p>专业水果采购平台</p><span className="openApp">立即打开</span>
          </div>
        </div>
      </div>
    }

}




export default Home;