import React, { Component }  from 'react';


class Search extends Component {
    constructor() {
        super();
        this.state={
            isHide:false,
            CName:"nav_menu_box",
            Close:"nav_menu"
        }
    }

    showSearch(){
        console.log(this)
        if(this.state.isHide){
            this.setState({
                isHide:false,
                CName:"nav_menu_box",
                Close:"nav_menu"
            })
        }else{
            this.setState({
                isHide:true,
                CName:"nav_menu_box fadeInshow",
                Close:"nav_menu close"
            })
        }
        
    }

    render(){
        return (<div className="home">

        <div>
            <div className="nav_search">
                <div className="nav ">

                    <input type="text" className="nav_ipt fullInp" placeholder="请输入您要搜索的内容" />
                    <div className={this.state.Close}  onClick={this.showSearch.bind(this)}><span></span></div>
                    <div className="ser_img fullSerImg"></div>
                </div>
                <div className="toSearchInput "></div>
            </div>
            <div className={this.state.CName}>
                <div className="menu_content"><a className="m_home" href="#/"> </a><a className="m_class" href="#list"> </a><a
                    className="m_cart" href="#cart"> </a><a className="m_user" href="#mine"> </a></div>
            </div>
        </div>

    </div>)
    }
   
};

export default Search;