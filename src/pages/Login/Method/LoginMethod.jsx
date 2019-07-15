import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import './LoginMethod.styl'
import {Route, Switch} from "react-router-dom";
import Phone from './Phone'
import Email from './Email'

class LoginMethod extends React.Component {
  render() {
    return (
      <div className="loginWrap">
        <div className="logo">
          <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png"/>
        </div>
        <Switch>
          <Route path='/login/login_method/phone' component={Phone}/>
          <Route path='/login/login_method/Email' component={Email}/>
        </Switch>
      </div>
    )
  }
}
export default connect(
  state => ({}),
  {}
)(LoginMethod)