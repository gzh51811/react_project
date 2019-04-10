import React from 'react';
import Context from '../../components/context';
import GoodsHeader from '../../components/goodsHeader';
import Lubotu from '../../components/lubotu';
import  axios  from 'axios';
// import { Route, Redirect, Switch,  withRouter } from 'react-router-dom';
import withAxios from '../../hoc/withAxios'
 class Goods extends React.Component  {
    constructor(props,context){
        // 初始化
        super();
        this.state = {
            goods:{}, 
            str: {}    
        }
    }
    async componentWillMount(){
        let id =(this.props.props.location.pathname).slice(7);
        this.setState({
            id : id,
        })
        await axios.get('http://localhost:3001/goods', {
            params: {
            _id: id,
            state: 'initialize'
            }
        }).then(res=>{
            this.setState({
                goods : res.data.code[0],
                str: JSON.parse(res.data.code[0].goods_extension)
            }); 
        }   
                      
         )
    }
    render() {
    return (<div className="goods">
    <GoodsHeader></GoodsHeader>
    <Lubotu {...this.props} a={this.state} ></Lubotu>
    <Context {...this.props} a={this.state}></Context>
    </div>) 

    }}
    export default withAxios(Goods);