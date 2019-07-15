import React from 'react';
import connect from "react-redux/es/connect/connect";
import './Tab5.styl'

class Tab5 extends React.Component {
  render() {
    const {tab5} = this.props
    return (
      <div id="tab5Main">
        {tab5.length ?
          <div>
            {tab5.map((item,index) => {
              return(
                <div className="item2" key={index}>
                  <div className="title">{item.subTitle}</div>
                  <div className="pic">
                    <img src={item.picUrl} alt="" width="100%" height="100%"/>
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
  state => ({tab5: state.tab5}),
  {}
)(Tab5)