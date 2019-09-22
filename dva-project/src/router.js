import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import  Login from './page/login';
import Headmaster from "./page/headmaster"
import Allexam from './pages/perspec/allexam/index';
import Charts from './pages/visualdisplay/charts/index';
import { Router, Route, Switch,Redirect } from 'dva/router';
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
