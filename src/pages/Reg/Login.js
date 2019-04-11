import React from 'react';
import './reglongin.css';
import  axios  from 'axios';
// import cartAction from '../../actions/cartAction';
export default class Login extends React.Component {
    constructor(props,context){
        // 初始化
        super();
        this.state = {
            type:'password',
            classNameclear:'clear_ipt classHide',
            classNamePasShow:'show_pwd  classHide',  
            phone:'',
            password:'',  
            classnamesucess:'classHide'
        }
        this.phonenum=this.phonenum.bind(this)
        this.passwordnum=this.passwordnum.bind(this) 
        this.pasTypeChange=this.pasTypeChange.bind(this)   
        this.clearphone=this.clearphone.bind(this)
        this.login=this.login.bind(this)
        this.goback= this.goback.bind(this)
    }
    phonenum(e){
        if(e.target.value.trim()){
            this.setState({
                classNameclear:'clear_ipt ',
                phone:e.target.value
            })
        }else{
            this.setState({
                classNameclear:'clear_ipt classHide'
            })
        }
    }
    passwordnum(e){
        if(e.target.value.trim()){
            this.setState({
                classNamePasShow:'show_pwd  ',
                password:e.target.value
            })
        }else{
            this.setState({
                classNamePasShow:'show_pwd  classHide'
            })
        }
    }
    clearphone(){
        this.phonenum1.value=''
        this.phonenum1.focus()
    }
    pasTypeChange(){
        if(this.state.type==='password'){
            this.setState({
                type:'text'
            })
        }else{
            this.setState({
                type:'password'
            })
        }
        
    }
    login(){
        axios.get('http://localhost:3001/reg', {
            params: {
            phone: this.state.phone,
            password: this.state.password,
            state: 'login',
            }
        }).then(res=>{
            if(res.data==='yes'){
                localStorage.setItem('user',this.state.phone);
                let timer=null;
                this.setState({
                    message:'登录成功',
                    classnamesucess:'classShow'
                    })
                timer=setTimeout(()=>{
                    this.setState({
                        classnamesucess:'classHide'
                        })
                    this.props.history.push('/mine');
                },1000)
                
            }else{
                let timer=null;
                this.setState({
                    message:'手机号或密码不正确,请重新输入',
                    classnamesucess:'classShow'
                    })
                timer=setTimeout(()=>{
                    this.setState({
                        classnamesucess:'classHide'
                        })
                },1500)
            }    
        })
    }
    goback(){
        this.props.history.goBack();
    }
    componentDidMount(){
        let user = localStorage.getItem('user');
        if(user){
            this.props.history.push('/cart');
        }
    }
    render() {
        return (
            <div className="login">
            <div id="cover_module1"  className={this.state.classnamesucess}><p >{this.state.message}</p></div>
                    <div id="wrap">
                        <div data-reactroot="" id="">
                            <div id="bigC">
                                <div className="nav_transprant">
                                    <div className="nav_back" onTouchStart={this.goback}></div>
                                </div>
                                <div className="join_type"><span className="item active">密码登录</span><span className="item ">验证码登录</span>
                                </div>
                                <div id="log_form">
                                    <label htmlFor="tel" className="lableInfo" >手机号</label>
                                    <input type="text" name="tel" onChange={this.phonenum} ref={(phone) => { this.phonenum1 = phone }}/>
                                    <div className={this.state.classNameclear} onTouchStart={this.clearphone}></div>
                                    <label htmlFor="pwd" className="lableInfo">密码</label>
                                    <input type={this.state.type} name="pwd" className="isPwdInp"  onChange={this.passwordnum} /><span><a className="bt-regist-line" href="javascript(0)">忘记密码?</a><a className="" href="#/reg">注册账号</a></span>
                                    <div className={this.state.classNamePasShow} onTouchStart={this.pasTypeChange}></div>
                                    <input type="submit" value="登录" className="active" onTouchStart={this.login}/>
                                </div>
                            </div>
                            <div className="alert_box" style={{opacity: 0}}></div>
                        </div>
                    </div>
            </div>
        )
    }
    
}
