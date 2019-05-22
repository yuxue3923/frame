import React, { Component } from 'react';
import {Route,Switch,Redirect} from 'react-router';
import {BrowserRouter} from 'react-router-dom';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Reducer from '../reducers/index';

import login from '../login'
import APP from '../App.js'
import pagefir from '../pagefirst.js'

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
             <Route path="/app" component={APP}></Route>
             <Route path="/pagefir" component={pagefir}></Route>
          </Switch>
          </Page>
       </BrowserRouter>
       </Provider>
    )
  }
}

