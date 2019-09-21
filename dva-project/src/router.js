import React from 'react';
import { Router, Route, Switch,Redirect } from 'dva/router';
import LoginIndex from './pages/home/login/index';
import Allexam from './pages/perspec/allexam/index';
import Charts from './pages/visualdisplay/charts/index';


function RouterConfig({history}) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={LoginIndex} />
        <Route path="/allexam" exact component={Allexam} />
        <Route path="/charts" exact component={Charts} />
        <Route path="/" exact Redirect={Charts} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
