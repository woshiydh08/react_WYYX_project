import React from 'react';
import connect from "react-redux/es/connect/connect";
import './Tab1.styl'
class Tab1 extends React.Component {
  render() {
    const {tab1} = this.props;

      return (
      <div id="tab1Main">
        <div className="mainBanner">
          {tab1.ad ?<img src={tab1.ad.picUrl} alt="" width="100%" height="100%"/> : null }
        </div>
        {tab1.topics ?
          <div>

            {tab1.topics.map((item,index) => {
              return(
                item.type === 1 ?
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
                          <i className="icon"/>
                          <span className="see">{item.readCount}人看过</span>
                        </div>
                      </div>
                      <div className="right">
                        <img src={item.picUrl} alt="" width="100%" height="100%"/>
                      </div>
                    </div>
                  </div>
                  :
                  <div className="item2" key={index}>
                    <div className="userName">
                      <span className="ava">
                        <img src={item.avatar} alt=""/>
                      </span>
                      <span className="name">{item.nickname}</span>
                    </div>
                    <div className="title">{item.subTitle}</div>
                    <div className="pic">
                      <img src={item.picUrl} alt="" width="100%" height="100%"/>
                    </div>
                  </div>
              )
            })}


          </div>



          : null}


      </div>
    )
  }
}
export default connect(
  state => ({tab1:state.tab1}),
  {}
)(Tab1)