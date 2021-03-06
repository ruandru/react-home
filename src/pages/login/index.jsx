import React from 'react';
import "./index.scss";
import Mutil from 'util/mm.jsx';
const _mm=new Mutil();
import User from 'service/user-service.jsx';
const _user=new User();
class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            username:'',
            password:'',
            redirect:_mm.getUrlParam('redirect') || '/'
        }
    }
    componentWillMount(){
      document.title="登陆-ruguoer"  
    }
    onInputChange(e){
        let inputName=e.target.name,
        valueInput=e.target.value;
        this.setState({
            [inputName]:valueInput
        })
    }
    onInputKeyUp(e){
      if(e.keyCode===13){
          this.onSubmit()
      } 
    }
    onSubmit(){
        let loginInfo={
            username:this.state.username,
            password:this.state.password
        },
        checkResult=_user.checkLoginInfo(loginInfo);
        if(checkResult.status){
            _user.login(loginInfo).then((res)=>{
                _mm.setStorage('loginInfo',res)
                this.props.history.push(this.state.redirect)
            },(errmsg)=>{
                _mm.errorTips(errmsg)
            })
        }else{
            _mm.errorTips(checkResult.msg) 
        }
      
    }
  render(){
    return(
          <div className="col-md-4 col-md-offset-4">
              <div className="panel panel-default login-panel">
                <div className="panel-heading">欢迎登陆</div>
                <div className="panel-body">
                    <div>
                    <div className="form-group">
                    <input type="email" className="form-control"  placeholder="请输入用户名" name="username" onChange={(e)=>this.onInputChange(e)} onKeyUp={e=>this.onInputKeyUp(e)}/>
                    </div>
                    <div className="form-group">
                    
                    <input type="password" className="form-control"  placeholder="请输入密码" name="password" onChange={(e)=>this.onInputChange(e)} onKeyUp={e=>this.onInputKeyUp(e)}/>
                    </div>
                    <button  className="btn btn-default" onClick={e=>{this.onSubmit(e)}}>登陆</button>
                    </div> 
                </div>
                </div>
          </div>

    )
  }
}
export default Login