import React from 'react';
import connect from "react-redux/es/connect/connect";
import './Tab3.styl'
import {getTab3} from '../../../store/actions'

class Tab3 extends React.Component {
  componentDidMount(){
    this.props.getTab3()
  }
  render() {
    const {tab3} = this.props

    return (
      <div id="tab3Main">
        {tab3.length ?
          <div>
            {
              tab3.map((item,index) => {
                return(
                  <div className="item1" key={index}>
                    <div className="title">{item.nickname}</div>
                    <div className="desc">{item.subTitle}</div>
                    <div className="pic">
                      {item.itemList.map((i,index) =>{
                        return(
                          <img src={i.itemUrl} alt="" key={index} />
                        )
                      })}
                    </div>
                    <div className="see">
                      <i className="icon"></i>
                      <span className="count">{item.readCount}人看过</span>
                    </div>
                  </div>
                )
              })
            }
          </div>
          :
          null
        }
      </div>
    )
  }
}
export default connect(
  state => ({tab3:state.tab3}),
  {getTab3}
)(Tab3)