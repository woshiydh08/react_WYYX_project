import React from 'react';
import connect from "react-redux/es/connect/connect";
import './Tab2.styl'
import {getTab2} from '../../../store/actions'

class Tab2 extends React.Component {
  componentDidMount(){
    this.props.getTab2()
  }
  render() {
    const {tab2} = this.props
    return (
      <div id="tab2Main">
        {tab2.length ? (
          <div>
          {tab2.map((item,index) => {
            return (
              <div className="item1" key={index}>
                <div className="itemBox">
                  <div className="left">
                    <div className="userName">
                      <span className="ava">
                        <img src={item.avatar} alt=""/>
                      </span>
                      <span className="name">{item.nickname}</span>
                    </div>
                    <div className="title">{item.subTitle}</div>
                    <div className="desc">{item.title}</div>
                    <div className="count">
                      <i className="icon"></i>
                      <span className="see">{item.readCount}人看过</span>
                    </div>
                  </div>
                  <div className="right">
                    <img src={item.picUrl} alt="" width="100%" height="100%"/>
                  </div>
                </div>
              </div>
            )
            })
            }
          </div>
            )
            :
            null
        }
      </div>
    )
  }
}
export default connect(
  state => ({tab2:state.tab2}),
  {getTab2}
)(Tab2)