import React, {Component} from 'react'
import {Link, Redirect, Route, Switch} from 'react-router-dom'
import Tab1 from "../Know/Tab1/Tab1";
import Tab2 from "../Know/Tab2/Tab2";
import Tab3 from "../Know/Tab3/Tab3";
import Tab4 from "../Know/Tab4/Tab4";
import Tab5 from "../Know/Tab5/Tab5";
import './Know.styl'

import {getTab1,getTab2,getTab3,getTab5} from '../../store/actions'
import connect from "react-redux/es/connect/connect";


class Know extends Component {
  componentDidMount(){
    this.props.getTab1()
    this.props.getTab2()
    this.props.getTab3()
    this.props.getTab5()
  }
  render() {
    const path = this.props.location.pathname

    return (
      <div id="knowBody">
        <div className="headerWrapper">
          <div className="headerInner">
            <Link to={'/home'}  className="headerHome"/>
            <div className="headerFind">
              <span className="title">发现</span>
              <span className="text">甄选家</span>
            </div>
            <div className="headerSearch">
              <i className="iconCart"/>
              <i className="iconSearch"/>
            </div>
          </div>

        </div>
        <div className="headerTab">
          <ul>
            <li className={path==='/know/tab1' ? 'on':''}><Link to={'/know/tab1'}>推荐</Link></li>
            <li className={path==='/know/tab2' ? 'on':''}><Link to={'/know/tab2'}>达人</Link></li>
            <li className={path==='/know/tab3' ? 'on':''}><Link to={'/know/tab3'}>上新</Link></li>
            <li className={path==='/know/tab4' ? 'on':''}><Link to={'/know/tab4'}>晒单</Link></li>
            <li className={path==='/know/tab5' ? 'on':''}><Link to={'/know/tab5'}>HOME</Link></li>
          </ul>
        </div>
        <Switch>
          <Redirect exact from='/know' to='/know/tab1'/>
          <Route path='/know/tab1' component={Tab1}/>
          <Route path='/know/tab2' component={Tab2}/>
          <Route path='/know/tab3' component={Tab3}/>
          <Route path='/know/tab4' component={Tab4}/>
          <Route path='/know/tab5' component={Tab5}/>

        </Switch>
      </div>
    )
  }
}


export default connect(
  state => ({
    tab1: state.tab1,
  }), // 一般属性
  {getTab1,getTab2,getTab3,getTab5}, // 函数属性
)(Know)
