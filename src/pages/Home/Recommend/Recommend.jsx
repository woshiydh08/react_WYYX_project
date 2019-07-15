import React, {Component} from 'react';
import './Recommend.styl'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import {connect} from 'react-redux'

import {getMsite} from "../../../store/actions";


class Recommend extends Component {
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
  };

  componentDidMount(){
    // this.props.getMsite(this.callback)
  }
  render() {
    const {msite,focusList,bigPromotionModule} = this.props
    return (
      <div>
        <div className="swiper-container">
          <div className="swiper-wrapper">
            { focusList ?
              focusList.map((item,index) => {
                return (
                  <div className="swiper-slide"  key={index}><img src={item.picUrl} alt=""/></div>
                )
              }): null
            }
          </div>
          <div className="swiper-pagination"></div>
        </div>
        <div className="bulletin">
          <ul className="g-grow">
            <li>
              <i></i>
              <span  onClick={() => this.handle()}>30天无忧退货</span>
            </li>
            <li>
              <i></i>
              <span>30天无忧退货</span>
            </li>
            <li>
              <i></i>
              <span>48小时快速退款</span>
            </li>
          </ul>
        </div>
        <div className="product-list">
          <ul>
            { msite.kingKongModule ?
              msite.kingKongModule.map((item,index) => {
                return (
                  <li key={index}>
                    <img src={item.picUrl} alt=""/>
                    <span>{item.text}</span>
                  </li>
                )
              }) : null
            }
          </ul>
        </div>
        <img src="https://yanxuan.nosdn.127.net/15441037919268395.gif?imageView&thumbnail=750x0&quality=75" alt="" className="promItem"/>
        {bigPromotionModule ?
          (<div className="sales01">
          <div className="sales01-item01">
            <img src={bigPromotionModule[1].data.contents[0].picUrl} alt=""/>
          </div>
          <div className="sales01-item02">
            <img src={bigPromotionModule[1].data.contents[1].picUrl} alt=""/>
            <img src={bigPromotionModule[1].data.contents[2].picUrl} alt=""/>
          </div>
        </div>) : null}


        <div className="sales02">
          <img className="sales02-item01" src="https://yanxuan.nosdn.127.net/15438955793172733.png" alt=""/>
          <img className="sales02-item01" src="https://yanxuan.nosdn.127.net/15435903918604513.png" alt=""/>
        </div>


          <div className="freshmanModule">
            <div className="title">
              <span className="txt">新人专享</span>
            </div>
            <div className="freshmanContent">
          <span className="left">
            <span className="left-txt">
              新人专享礼包
            </span>
            <span className="img-warp">
              <img src="//yanxuan.nosdn.127.net/d074d02fb86bff9bfbf4fa3010d1e1e6.png" alt=""/>
            </span>
          </span>
              <span className="right">
            <span className="right-item1">
              <span className="activityItem1">福利社</span>
              <span className="activityItem2">今日特价</span>
              <img src="http://yanxuan.nosdn.127.net/2aa6c2c0c74258a3c895de220c79a875.png" alt=""/>
              <span className="price">
                <span className="price1">￥9.99</span>
                <span className="price2">￥299</span>
              </span>
            </span>
            <span className="right-item2">
              <span className="activityItem1">新人拼团</span>
              <span className="activityItem2">1元起包邮</span>
              <img src="http://yanxuan.nosdn.127.net/c95a4d1daa62d7a9004208752a1a2098.png" alt=""/>
              <span className="price">
                <span className="price1">￥9.99</span>
                <span className="price2">￥299</span>
              </span>
            </span>
          </span>
            </div>
          </div>
          <div className="manufacturer">
            <div className="moduleTitle">
              <span className="title">品牌制造商直供</span>
              <span className="more">更多</span>
            </div>
            <div className="moduleList">
          <span className="item">
            <span className="item-top">海外制造商</span>
            <span className="item-middle">9.9元起</span>
          </span>
              <span className="item">
            <span className="item-top">海外制造商</span>
            <span className="item-middle">9.9元起</span>
          </span>
              <span className="item">
            <span className="item-top">海外制造商</span>
            <span className="item-middle">9.9元起</span>
          </span>
              <span className="item">
            <span className="item-top">海外制造商</span>
            <span className="item-middle">9.9元起</span>
          </span>
            </div>
          </div>
      </div>
    )
  }
}

export default connect(
  state => ({
    msite: state.msite,
    kingKongModule: state.msite.kingKongModule,
    focusList: state.msite.focusList,
    bigPromotionModule: state.msite.bigPromotionModule
  }),
  {getMsite}
)
(Recommend)