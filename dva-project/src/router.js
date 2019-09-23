import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import  Login from './pages/login';
import Headmaster from "./pages/headmaster"
import Allexam from './pages/perspec/allexam/index';
import Charts from './pages/visualdisplay/charts/index';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/headmaster" exact component={Headmaster}/>
        <Route path="/allexam" exact component={Allexam} />
        <Route path="/charts" exact component={Charts} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
