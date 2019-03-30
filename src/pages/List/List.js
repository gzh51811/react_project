import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import "regenerator-runtime/runtime";

import withAxios from '../../hoc/withAxios';

import { List, Avatar, Menu, Layout } from 'antd';

const { Header, Content, Sider } = Layout;


class MyList extends React.Component {

    render() {
        // console.log(this.props)
        let { match } = this.props;
        return <div className="home">

        </div>
    }
}

// 高阶组件的应用
// List = withAxios(List);

export default MyList;