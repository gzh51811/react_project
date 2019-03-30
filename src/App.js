import React, { Component } from 'react';
import Home from './pages/Home/Home';
import List from './pages/List/List';
import Goods from './pages/Goods/Goods';
import Cart from './pages/Cart/Cart';
import './App.css';
import { Menu, Icon, Badge } from 'antd';
import { Route, Redirect, Switch, NavLink, withRouter } from 'react-router-dom';
class App extends Component {
  constructor() {
    super();
    this.state = {
      navs: [
        {
          text: '首页',
          name: 'Home',
          path: '/home',
          icon: 'home'
        },
        {
          text: '全部分类',
          name: 'List',
          path: '/list',
          icon: 'appstore'
        },
        {
          text: '购物车',
          name: 'Cart',
          path: '/cart',
          icon: 'shopping-cart'
        },
        {
          text: '我的',
          name: 'Goods',
          path: '/goods',
          icon: 'user'
        },
      ],
      current: 'Home'
    }

  }
  handleClick(e) {
    // console.log(this)
    this.setState({
      current: e.key
    }, () => {
      //路由跳转：编程式导航
      // 利用withRouter()高阶组件实现history的传递

      this.props.history.push('/' + e.key.toLowerCase());
    });
  }
  render() {
    return (
      <div className="App">

        <Menu

          onClick={this.handleClick.bind(this)}
          mode="horizontal"
          selectedKeys={[this.state.current]}
          style={{ position: "fixed", bottom: 0, width: "100%", margin: 0, padding: 0, textAlign: "center" }}

        >
          {
            this.state.navs.map(item => <Menu.Item key={item.name} style={{ width: "25%", color: "#ccc", lineHeight: "27px" }}>
              <>

              </>
              {
                item.name == 'Cart'
                  ?
                  <Badge count={1}><Icon type={item.icon} style={{ display: "block", fontSize: "30px", margin: 0, padding: 0 }} />
                    <span style={{ fontSize: "12px" }}>{item.text}</span></Badge>
                  :
                  <>
                    <Icon type={item.icon} style={{ display: "block", fontSize: "30px", margin: 0, padding: 0 }} />
                    <span style={{ fontSize: "12px" }}>{item.text}</span>
                  </>
              }


            </Menu.Item>)
          }

        </Menu>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/list" component={List} />

          {/* 动态路由 */}
          <Route path="/goods/:id" component={Goods} />
          <Route path="/cart" component={Cart} />
          {/* <Route path="/" render={()=><div>我的首页</div>} exact/> */}
          <Redirect from="/" to="/home" />{/* 404 */}
        </Switch>
      </div>
    );
  }
}
App = withRouter(App);
export default App;
