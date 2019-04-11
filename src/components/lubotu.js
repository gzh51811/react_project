import React from 'react';
import { Carousel } from 'antd';
import '../pages/Goods/goods.css';
import  axios  from 'axios';
export default class Lubotu extends React.Component  {
    constructor(props,context){
        // 初始化
        super();
        this.state = {
            // goods:{},
          
    }
    }
    
    render() {
        return ( <div className="lubotu" style={{ 'fontSize': '24px','color':'orange'}}>
                    <Carousel autoplay>
                        <div><h3><img src={this.props.a.goods.goods_image} style={{ 'width': '100%','height': '100%'}} alt=""/></h3></div>
                        <div><h3><img src={require('../assets/img/2.jpg')} style={{ 'width': '100%','height': '100%'}} alt=""/></h3></div>
                        <div><h3><img src={require('../assets/img/3.jpg')} style={{ 'width': '100%','height': '100%'}} alt=""/></h3></div>
                    </Carousel>
                    </div>
                )  
    } 
}