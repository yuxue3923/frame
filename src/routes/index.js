import React, { Component } from 'react';
import {Route,Switch,Redirect} from 'react-router';
import {BrowserRouter} from 'react-router-dom';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Reducer from '../reducers/index';

import login from '../login'
import APP from '../App.js'
import pagefir from '../pagefirst.js'
import pagesec from '../pagesecond.js'
import pagethir from '../pagethird.js'
import pagefour from '../pagefour.js'
import Page from './Page.js';
const store=createStore(Reducer)
export default class RouteIndex extends Component {
  render() {
    return (
       <Provider store={store}>
       <BrowserRouter>
       <Page>
        {/* {<Redirect to="/"/>} */}
          <Switch>
             <Route exact path="/" component={login}></Route>
             <APP path="/app">
                <Switch>
                    <Route path="/app/pagefir" component={pagefir}></Route>
                    <Route path="/app/pagesec" component={pagesec}></Route>
                    <Route path="/app/pagethir" component={pagethir}></Route>
                    <Route path="/app/pagefour" component={pagefour}></Route>
                </Switch>
             </APP>
          </Switch>
          </Page>
       </BrowserRouter>
       </Provider>
    )
  }
}

