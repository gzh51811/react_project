import React from 'react';
import './reglongin.css';
import  axios  from 'axios';
export default class Reg extends React.Component  {
        constructor(props,context){
            // 初始化
            super();
            this.state = {
                stated:'initialize',
                phonenum: '',
                yzm:'',
                sjyzm:'',
                password:'',
                classpassword:'classHide',
                classphone:'classShow',
                classyzm:'classHide',
                message:'',
                classnamesucess:'classHide',
                classNamexyb:'step_info',
                classNamexyb1:'',
                classNameclear:'clear_ipt classHide',
                classNamePasShow:'show_pwd regist_belong classHide',
              
            }
         this.change=this.change.bind(this);
         this.phonenum=this.phonenum.bind(this)
         this.passwordnum=this.passwordnum.bind(this)
         this.sjcsyzm=this.sjcsyzm.bind(this)
         this.clearphone=this.clearphone.bind(this)
         this.pasTypeChange=this.pasTypeChange.bind(this)
         this.gotohome=this.gotohome.bind(this)
         this.goback=this.goback.bind(this);
         
        }
        // 点击下一步
        change(e){
            if(this.state.stated==='initialize'){
                if(this.state.phone){ 
                    
                    axios.get('http://localhost:3001/reg', {
                        params: {
                        phone: this.state.phone,
                        state: 'initialize',
                        }
                    }).then(res=>{
                        if(res.data==='yes'){
                            this.text.innerHTML= '请输入验证码';
                            this.setState({
                            stated:'validate',
                            classphone:'classHide',
                            classyzm:'classShow',
                            })
                        }else{
                            let timer=null;
                            this.setState({
                                message:'手机号已注册',
                                classnamesucess:'classShow'
                                })
                            timer=setTimeout(()=>{
                                this.setState({
                                    classnamesucess:'classHide'
                                    })
                            },1000)
                        }    
                    }   
                                  
                     )
                }else{
                    let timer=null;
                    this.setState({
                        message:'手机号不正确，请重新输入',
                        classnamesucess:'classShow'
                        })
                    timer=setTimeout(()=>{
                        this.setState({
                            classnamesucess:'classHide'
                            })
                    },1000)
                        
                        
                }
                
            }
            if(this.state.stated==='validate'){
                let yzm = this.yzm0.value+this.yzm1.value+this.yzm2.value+this.yzm3.value;
                if(yzm===this.state.sjyzm.toLowerCase()){
                    this.text.innerHTML= '请输入密码';
                this.setState({
                   stated:'password',
                   classyzm:'classHide',
                   classpassword:'classShow',
                   classNamexyb:'classHide step_info',
                   classNamexyb1:'classHide',
                   type:'password'
                })
                }else{
                    let timer=null;
                    this.setState({
                        message:'验证码不正确',
                        classnamesucess:'classShow'
                        })
                    timer=setTimeout(()=>{
                        this.setState({
                            classnamesucess:'classHide'
                            })
                    },1000)
                    this.yzm0.value='';
                    this.yzm1.value='';
                    this.yzm2.value='';
                    this.yzm3.value='';
                    this.yzm0.focus();
                    this.sjcsyzm()
                }
                
            }      
        }
        phonenum(e){
            if(e.target.value.trim()){
                this.setState({
                    classNameclear:'clear_ipt '
                })
            }else{
                this.setState({
                    classNameclear:'clear_ipt classHide'
                })
            }
            if(!(/^1[34578]\d{9}$/.test(e.target.value))){ 
            }else{
                this.setState({
                phone:e.target.value
                })
            }
        }
        passwordnum(e){
            if(e.target.value.trim()){
                this.setState({
                    classNamePasShow:'show_pwd regist_belong '
                })
            }else{
                this.setState({
                    classNamePasShow:'show_pwd regist_belong classHide'
                })
            }
            
            if(!(/^[a-zA-Z]{1}([a-zA-Z0-9]){4,19}$/.test(e.target.value))){ 
           }else{
                this.setState({
                    password:e.target.value
                })
           }
        }
        sjcsyzm(){
            var res ='';
            var str ='0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
            for(var i=0;i<4;i++){
            res +=str[Math.floor(Math.random()*62)];
            }
            this.setState({
                sjyzm:res
            })
        }
        inputyzm(e){
            if(e.target.value.trim()){
                e.target.nextElementSibling.focus()
            }
        }
        componentDidMount(){
            this.sjcsyzm()
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
        gotohome(){
            if(this.state.password){ 
                var params = new URLSearchParams();
                params.append("phone", this.state.phone); //你要传给后台的参数值 key/value
                params.append("password", this.state.password);   
                axios({
                    method: "post",
                    url: "http://localhost:3001/reg",
                    data: params
                }).then(res=>{
                    localStorage.setItem('user',this.state.phone);
                    let timer=null;
                    this.setState({
                        message:'注册成功，正在跳转到首页',
                        classnamesucess:'classShow'
                        })
                    timer=setTimeout(()=>{
                        this.setState({
                            classnamesucess:'classHide'
                            })
                        this.props.history.push('/home')
                    },1500)
                }   
                              
                 )
            }else{
                let timer=null;
                this.setState({
                    message:'密码需要以字母开头不少于6位',
                    classnamesucess:'classShow'
                    })
                timer=setTimeout(()=>{
                    this.setState({
                        classnamesucess:'classHide'
                        })
                },1000)
                    
                    
            }
        }
        goback(){
            this.props.history.goBack();
        }
        render() {
    return (<div className="home">
            <div id="cover_module1"  className={this.state.classnamesucess}><p >{this.state.message}</p></div>
                <div id="wrap">
                    <div data-reactroot="" id="">
                        <div id="bigC">
                            <div className="nav_transprant">
                                <div style={{width: '1rem', height: '0.8rem'}}>
                                    <div className="nav_back" onTouchStart={this.goback}></div>
                                </div><a className="nav_singin" href="#login">登录</a>
                            </div>
                            <div className="join_type"><span className="setp_item" ref={(text) => { this.text = text }} >您的手机号是？</span>
                                <p className="join_info"></p>
                            </div>
                            <div className="form_content">
                                <div className={this.state.classphone}>
                                    <label htmlFor="phone_regist" className="lableInfo" >手机号</label>
                                    <input type="text" name="phone_regist" onChange={this.phonenum} ref={(phone) => { this.phonenum1 = phone }}/>
                                    <div className={this.state.classNameclear} onTouchStart={this.clearphone} ></div>
                                    <p className="info_service">
                                        如有问题请联系客服：
                                        <a href="tel:400-800-9519">400-800-9519</a>
                                    </p>
                                </div>
                                <div className={this.state.classyzm}>
                                    <label htmlFor="sms_code" className="lableInfo">验证码</label>
                                    <input type="tel" className="sms_item first_inp_item"  maxLength='1' onChange={this.inputyzm} ref={(yzm0)=>{this.yzm0=yzm0}} name="sms_code"/>
                                    <input type="tel" className="sms_item" name="sms_code" maxLength='1' onChange={this.inputyzm} ref={(yzm1)=>{this.yzm1=yzm1}}/>
                                    <input type="tel" className="sms_item" name="sms_code" maxLength='1'onChange={this.inputyzm} ref={(yzm2)=>{this.yzm2=yzm2}}/>
                                    <input type="tel" className="sms_item" name="sms_code" maxLength='1' onChange={this.inputyzm} ref={(yzm3)=>{this.yzm3=yzm3}}/>
                                    <p className="info_service" onTouchStart={this.sjcsyzm}><span style={{color:'pink'}}>重新获取验证码</span>
                                    </p>
                                    <p ref={(yzm)=>{this.yzm=yzm}} style={{fontSize:'26px',fontStyle:'oblique',textDecoration:'line-through',backgroundColor:'#ccc',width:'80px',textAlign:'center',marginTop:'20px'}}>{this.state.sjyzm}</p>
                                </div>
                                <div className={this.state.classpassword}>
                                    <label htmlFor="password" className="lableInfo" >密码</label>
                                    <input type={this.state.type} name="password" onChange={this.passwordnum}/>
                                    <div className={this.state.classNamePasShow} onTouchStart={this.pasTypeChange}></div>
                                    <div className="type_button_select" onTouchStart={this.gotohome}>进入首页</div>
                                </div>
                                <div className="setp_contr" onTouchStart={this.change}>
                                    <div className={this.state.classNamexyb} >
                                        <p >
                                            点击 ”下一步“ 既表示您同意协议：
                                            <a href="http://www.cuixianyuan.com/wap/tmpl/member/document.html">《翠鲜缘用户协议》</a>
                                        </p>
                                    </div>
                                    <div className={this.state.classNamexyb1}> <div className="step_button active" onClick={this.info}>下一步</div></div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}