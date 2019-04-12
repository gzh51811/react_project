import React from 'react';
import { Icon } from 'antd';
import '../pages/Goods/goods.css';
export default class GoodsHeader extends React.Component {
    constructor(props, context) {
        // 初始化
        super();



        this.state = {
            top: 0,
            bottom: 0,
            classname1: '',
            classname2: 'classname',
            classname3: '',
            classname4: 'classname',
            classname5: 'nav_menu_box fadeInshow classname',
            classname6: 'nav_menu_box fadeInshow ',
            goodsHeader: 'goodsHeader',
            isok: true

        }

        this.handleClick1 = this.handleClick1.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);
        this.handleClick3 = this.handleClick3.bind(this);
        this.handleClick4 = this.handleClick4.bind(this);
    }
    handleClick1() {
        this.setState({
            classname1: 'classname',
            classname2: '',
        });
    }
    handleClick2() {
        this.setState({
            classname1: '',
            classname2: 'classname',
        });
    }
    handleClick3() {
        this.setState({
            classname3: 'classname',
            classname4: '',
            classname5: 'nav_menu_box fadeInshow ',
            goodsHeader: 'goodsHeader1',

        });
    }
    handleClick4() {
        this.setState({
            classname3: '',
            classname4: 'classname',
            classname5: 'nav_menu_box fadeInshow classname',
            goodsHeader: 'goodsHeader',
        });
    }
    render() {
        return (<div className={this.state.goodsHeader}>
            <div style={{ 'zIndex': '999', margin: 0, height: '60px' }}>
                <span style={{ 'width': '40px', 'height': '36px', 'borderRadius': '50%', 'display': 'inline-block', 'opacity': 0.5, 'textAlign': "center", 'marginTop': "5px", 'marginLeft': "10px", "lineHeight": "36px", border: '1px solid #ccc' }}><Icon type="left" /></span>
                <span style={{ 'width': '40px', 'height': '36px', 'borderRadius': '50%', 'display': 'inline-block', 'opacity': 0.5, 'textAlign': "center", 'marginLeft': "220px", 'marginTop': "5px", "lineHeight": "36px", border: '1px solid #ccc' }}><Icon type="heart" onClick={this.handleClick1} className={this.state.classname1} /><Icon type="heart" theme="filled" className={this.state.classname2} onClick={this.handleClick2} /></span>
                <span style={{ 'width': '40px', 'height': '36px', 'borderRadius': '50%', 'display': 'inline-block', 'opacity': 0.5, 'textAlign': "center", 'marginLeft': "20px", 'marginTop': "5px", "lineHeight": "36px", border: '1px solid #ccc' }}><Icon type="bars" onClick={this.handleClick3} className={this.state.classname3} /><Icon type="close" className={this.state.classname4} onClick={this.handleClick4} /></span>
            </div>
            <div className={this.state.classname5} style={{ margin: 0, padding: 0, top: '48px' }}>
                <div className="menu_content" style={{ margin: 0, padding: 0, top: '-58px' }}>
                    <a className="m_home" href="#/"></a>
                    <a className="m_class" href="#list"></a>
                    <a className="m_cart" href="#cart"></a>
                    <a className="m_user" href="#mine"></a>
                </div>
            </div>
        </div>
        );
    }
}