import React, {Component} from 'react'
import {Link, Redirect, Route, Switch} from 'react-router-dom'
import LoginSelect from "../Login/Method/LoginSelect";
import LoginMethod from "../Login/Method/LoginMethod";

import './Login.styl'
import connect from "react-redux/es/connect/connect";

class Login extends Component {
    render() {
        return (
          <div id="personalBody">
            <div className="headerWrapper">
              <div className="headerInner">
                <Link className="headerHome" to={'/home'}/>
                <div className="headerFind">
                  <div className="title"/>
                </div>
                <div className="headerSearch">
                  <i className="iconSearch"/>
                  <i className="iconCart"/>
                </div>
              </div>
              <div></div>

            </div>
            <Switch className="switchBody">
              <Redirect exact from='/login' to='/login/Login_select'/>
              <Route path='/login/Login_select' component={LoginSelect}/>
              <Route path='/login/login_method' component={LoginMethod}/>
            </Switch>
          </div>
        )
    }
}
export default connect(
  state => ({}),
  {}
)(Login)