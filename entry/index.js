
import React, { Component, Fragment } from 'react'
import {
  IndexRoute,
  Route,
  BrowserRouter as Router,
  Link,
  Switch,
  HashRouter,
  Redirect
} from 'react-router-dom';

import { List } from 'antd';

const createBrowserHistory = require('history').createBrowserHistory
const customHistory = createBrowserHistory();

// import { asyncComponent } from 'react-async-component';
import AsyncComponent from './../src/asyncComponent/index.js';


// const One = AsyncComponent(() => import('./../src/one/index.js'))
// const Two = AsyncComponent(() => import('./../src/two/index.js'))
// const Three = AsyncComponent(() => import('./../src/three/index.js'))
// const Assign = AsyncComponent(()=>import("./../src/assign/index.js"))
import One from "./../src/one/index.js";
import Two from "./../src/two/index.js";
import Three from "./../src/three/index.js";
import Assign from "./../src/assign/index.js";
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Store } from './../src/store/store.js'

export default class App extends React.Component {
  
  render() {
    return (
      <Fragment>
        {this.props.children ? this.props.children : null}

      </Fragment>
    )
  }
}

class Routers extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <Fragment>
        111111111111
        {location.pathname}
        <br />
        <Router basename="/">
          <ul>
            <li>
              <Link to="/one/123">one====123会显示在url中</Link>
            </li>
            <li>
              <Link to="/two">two====</Link>
            </li>
            <li>
              <Link to="/three">three==重定向到assign页面==</Link>
            </li>
            <li>
              <Link to="/assign">assign====</Link>
            </li>
          </ul>



          <br />
          <Switch>

            <Route exact path={'/'} component={One} />
            <Route path={'/one/:id'} render={(props) => <One  {...props} />} />
            <Route path={'/two'} children={(props) => {
              console.log("w我不管匹不匹配， 都会执行children的改变", this, props)
              return <Two {...this.props}{...props} />
            }} />
            <Route path={'/three'} children={(props) => <Three {...props} />} />
            <Route path={'/assign'} component={Assign} />


          </Switch>
          {/* <Switch> */}
          {/* <Route exact path={'/'} component={App} /> */}

          {/* <Route exact path={'/one'} render={()=>(<One/>)} /> */}

          {/* </Switch> */}

        </Router>
      </Fragment>
    )
  }
}

ReactDOM.render(<Provider store={Store()}>
  <Routers />
</Provider>, document.getElementById("app"))

