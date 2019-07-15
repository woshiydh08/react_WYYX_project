import React from 'react';
import connect from "react-redux/es/connect/connect";
import './Tab4.styl'
class Tab4 extends React.Component {
  render() {
    return (
      <div id="tab4Main">
        <iframe src="https://m.you.163.com/topic/static/look/index" frameBorder="0" name="mframe2"/>
      </div>
    )
  }
}
export default connect(
  state => ({}),
  {}
)(Tab4)