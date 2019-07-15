import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import {Link} from "react-router-dom";
import {Toast} from 'antd-mobile'
import 'antd-mobile/lib/toast/style/index.css';

import {reqPwdLogin} from '../../../api/index'
import {saveUser} from "../../../store/actions";
import './Email.styl'
class Email extends React.Component {
  state = {
    name: '11', //用户名
    pwd: '',// 密码
  }
  handleChange(key,val){
    this.setState({
      [key]:val.target.value,
    })
    console.log(this.state);
  }


  async login () {
    // 1. 进行前台表单验证
    const {name, pwd} = this.state
    let result;
    if(!name) {
      Toast.info('账号不能为空',1)
      return
    } else if (!pwd) {
      return Toast.info('密码必须指定')
    }
    // 2. 发送登陆的请求
    result = await reqPwdLogin({name, pwd})
    if(result.code===0) { // 登陆请求成功
      const user = result.data
      this.props.saveUser(user)
      this.props.history.replace('/personal')
    } else { // 失败
      Toast.info('登陆失败')
    }
  }


  render() {
    return (
      <div className="content">
        <input type="text" onChange={v=>{this.handleChange("name",v)}} className="num" placeholder="账号"/>
          <div className="line"/>
          <input type="password" onChange={v=>{this.handleChange("pwd",v)}} className="code" placeholder="密码"/>
            <div className="line"/>
            <div className="other">
              <div className="question">注册账号</div>
              <div className="loginForPWD">忘记密码</div>
            </div>
            <div className="login" onClick={() => {this.login()}}>登录</div>
            <Link className="otherFun" to={'/login'} >
              其他登录方式
            </Link>
      </div>
    )
  }
}
export default connect(
  state => ({}),
  {saveUser}
)(Email)