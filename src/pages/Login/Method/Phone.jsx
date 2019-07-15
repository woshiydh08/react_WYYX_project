import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {reqSendCode} from '../../../api/index'
import connect from "react-redux/es/connect/connect";
import './Phone.styl'
class Phone extends React.Component {
  state = {
    phoneNum: '', //手机号码
    code: '',// 验证码
  }
  handleChange(key,val){
    this.setState({
      [key]:val.target.value,
    })
    console.log(this.state);
  }
  isRightNumber(num){
    return /^1\d{10}$/.test(num)
  }
  async getCode(){
    const {phoneNum} = this.state
    if(this.isRightNumber(phoneNum)){
      console.log("发送验证码中",phoneNum);
      const result = await reqSendCode(phoneNum)
      if(result.code === 0){
        console.log('发送验证码成功');
      }else {
        console.log('发送验证失败');
      }
    }else {
      console.log('手机号码格式不正确');
    }
  }



  render() {
    return (
      <div className="content">
        <input type="text" onChange={v=>{this.handleChange("phoneNum",v)}} className="num" placeholder="请输入手机号码" maxLength="11"/>
          <div className="line"/>
          <div className="msg">
            <input type="text" onChange={v=>{this.handleChange("code",v)}} className="code" placeholder="请输入短信验证码" maxLength="6"/>
            <button onClick={v => {this.getCode()}}>获取验证码</button>
          </div>
          <div className="line"/>
          <div className="other">
            <div className="question">遇到问题</div>
            <Link to={'/login/login_method/email'} className="loginForPWD" >使用邮箱登录</Link>
          </div>
          <div className="login">登录</div>
          <Link to={'/login'} className="loginForPWD">其他登录</Link>
        </div>
    )
  }
}
export default connect(
  state => ({}),
  {}
)(Phone)