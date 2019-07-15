import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Route, Switch, Redirect} from 'react-router-dom'
import {getMsite} from '../../store/actions'
//导入组件
import Recommend from './Recommend/Recommend'

import './Home.styl'
import Swiper from "swiper";
import BScroll from 'better-scroll'



class Home extends Component {
  callback = () =>{
    new Swiper(".swiper-container",{
      effect : "slide",
      direction: 'horizontal',
      loop: true, // 循环模式选项
      autoplay: {
        disableOnInteraction : false,
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
    })
  }
  componentDidMount(){
    new BScroll('.nav-list', {
      click: true, // 触发自定义click
      scrollX: true
    });

    //请求数据
    this.props.getMsite(this.callback)
  }


  render() {
    const {count, inrement, incrementAsync,getMsite, msite ,cateList} = this.props
    return (
      <div className="homeBody">
        <div className="topHeader">
          <div className="search">
            <a><span className="logo"/></a>
            <div className="input" >
            <i className="icon"></i>
            <span className="placeholder">搜索商品, 共19914款好物</span>
          </div>
          <a href="javascript:;" className="loginButton">登录</a>
        </div>
          <div className="nav-list">
            <div className="listWarp">
              <ul className="listInner">
                <li><a href="javascript:;">推荐</a></li>
                { cateList ?
                  cateList.map((item,index) => {
                    return (
                      <li key={index}><a href="javascript:;">{item.name}</a></li>
                    )
                  }): null
                }
              </ul>
            </div>
              <span className="more">
                <i></i>
              </span>
            </div>
          </div>
          <Switch>
            <Redirect exact from='/home' to='/home/recommend'/>
            <Route path='/home/recommend' component={Recommend}/>
          </Switch>
      </div>
    )
  }
}

export default connect(
  state => ({
    count: state.count,
    msite: state.msite,
    cateList: state.msite.cateList
  }), // 一般属性
  /*(dispatch) => ({
    inrement: (number) =>  dispatch(inrement(number)),
    incrementAsync: dispatch(incrementAsync(number)),
  })*/
  {getMsite}, // 函数属性
)(Home)



