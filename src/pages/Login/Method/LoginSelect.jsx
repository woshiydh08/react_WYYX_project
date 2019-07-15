import React, {component} from 'react';
import connect from "react-redux/es/connect/connect";
import './LoginSelect.styl'
import {Link} from "react-router-dom";

class LoginSelect extends React.Component {
  render() {
    return (
      <div id="selectBody">
        <div className="loginContent">

          <div className="logoWrap">
            <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png"/>
          </div>

          <div className="btnWrap">
            <Link className="phoneLogin" to={'/login/login_method/phone'}>
              <i className="icon"></i>
              <span className="text">手机号码登录</span>
            </Link>

            <Link className="emailLogin" to={'/login/login_method/email'}>
              <i className="icon"></i>
              <span className="text">邮箱账号登录</span>
            </Link>

            <div className="fastLogin">
              <span className="text">手机号快捷注册</span>
              <i className="icon"></i>
            </div>
          </div>
        </div>
        <div className="thirdWrap">
          <div className="itemWrap">
            <div className="item">
              <i className="icon"></i>
              <span className="text">微信</span>
            </div>
          </div>
          <div className="itemWrap">
            <div className="item">
              <i className="icon"></i>
              <span className="text">QQ</span>
            </div>
          </div>
          <div className="itemWrap">
            <div className="item">
              <i className="icon"></i>
              <span className="text">微博</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default connect(
  state => ({}),
  {}
)(LoginSelect)