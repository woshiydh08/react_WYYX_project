import React, {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import FootGuide from './components/foot-guide/foot-guide'
import Home from './pages/Home/Home'
import Category from './pages/Category/Category'
import Know from './pages/Know/Know'
import ShopCart from './pages/ShopCart/ShopCart'
import Personal from './pages/Personal/Personal'
import Login from './pages/Login/Login'
import NotFound from './pages/not-found/not-found'


import {withRouter} from 'react-router-dom'

class App extends Component {
  render() {
    const path = this.props.location.pathname
    const showPaths = ['/home', '/category', '/know', '/shopcart','/home/recommend','/know/tab1','/know/tab2','/know/tab3','/know/tab4','/know/tab5']
    const showFooter = showPaths.indexOf(path)>=0
    return (
      <div style={{backgroundColor:'#f3f3f3'}}>
        <Switch>
          <Redirect exact from='/' to='/home'/>
          <Route path='/home' component={Home}/>
          <Route path='/category' component={Category}/>
          <Route path='/know' component={Know}/>
          <Route path='/shopcart' component={ShopCart}/>
          <Route path='/personal' component={Personal}/>
          <Route path='/login' component={Login}/>
          <Route component={NotFound}/>
        </Switch>
        {showFooter ? <FootGuide/> : null}
      </div>
    )
  }
}

export default withRouter(App)