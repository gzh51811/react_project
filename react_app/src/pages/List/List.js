import React from 'react';
// import { Switch, Route } from 'react-router-dom';

// import "regenerator-runtime/runtime";
import Search from "../../components/search"
import Categroy from "../../components/category"
import Goodslist from "../../components/goodslist"
import withAxios from '../../hoc/withAxios';
import "./list.css"
import { List, Avatar, Menu, Layout } from 'antd';
import axios from 'axios';
const { Header, Content, Sider } = Layout;

// import withAxios from '../../hoc/withAxios';



// const { Header, Content, Sider } = Layout;


class MyList extends React.Component {
    constructor() {
        super();
        this.state = {
            scrollClassName: "",
            goodslist: [

            ],
            currentList: "a",
            currentCate: 0,
            wait: "none",
        }
    }

    screenScroll() {



    }
    async componentWillMount() {

        let { currentList, currentCate } = this.state;
        var params = new URLSearchParams();
        params.append("currentList", currentList); //你要传给后台的参数值 key/value
        params.append("currentCate", currentCate);
        await axios({
            method: "post",
            url: "http://localhost:3001/goodslist",
            data: params
        }).then(res => {

            this.setState({
                goodslist: res.data.code,
                wait: "none"
            })
        })

    }


    async currentCategory(currentList = "a", currentCate = 0) {

        this.setState({
            currentList: currentList,
            currentCate: currentCate,
            wait: "block"
        })
        // let { data } = await axios.get("http://47.107.182.207:3001:3001:3001/goodslist", {
        //     params: {
        //         currentList,
        //         currentCate
        //     }
        // })
        var params = new URLSearchParams();
        params.append("currentList", currentList); //你要传给后台的参数值 key/value
        params.append("currentCate", currentCate);
        await axios({
            method: "post",
            url: "http://localhost:3001/goodslist",
            data: params
        }).then(res => {
            this.setState({
                goodslist: res.data.code,
                wait: "none"
            })
        })



    }

    render() {



        return <div id="list" className={this.state.scrollClassName}

        >
            <Search></Search>
            <Categroy currentCategory={this.currentCategory.bind(this)}></Categroy>
            <Goodslist {...this.props} {...this.state} screenScroll={this.screenScroll.bind(this)}></Goodslist>
            <div id="cover_module" style={{ "display": this.state.wait }}></div>
        </div >
    }
}

// 高阶组件的应用
// List = withAxios(List);

export default MyList;