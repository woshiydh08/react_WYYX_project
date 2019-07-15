import React, {Component} from 'react'
import './ShopCart.styl'
export default class ShopCart extends Component {
  render() {
    return (
      <div id="cartMain">
        <div className="headerWrapper">
          <div className="headerInner">
            <div className="title">
              购物车
            </div>
            <div className="right">
              <div className="text">
                领券
              </div>
            </div>
          </div>
        </div>
        <div className="reactid">
          <ul>
            <li>
              <i className="icon"></i>
              <span className="text">30天无忧退款</span>
            </li>
            <li>
              <i className="icon"></i>
              <span className="text">40小时快速退款</span>
            </li>
            <li>
              <i className="icon"></i>
              <span className="text">满88元免邮费</span>
            </li>
          </ul>
        </div>
        <div className="loginContent">
          <div className="container">
            <div className="img"></div>
            <div className="txt">
              <div className="login">
                <div className="title">去添加点什么吧</div>
                <div className="btn">登录</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}