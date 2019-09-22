import React, { Component } from "react";
import { Redirect, Route, Switch, Router } from "dva/router";

class MapRouter extends Component {
    
  render() {

    let {routes,history} = this.props;
    
    let RedirectArr = routes.filter(item=>item.redirect);
    let redirectArr = RedirectArr.map((item,index)=>{
        return <Redirect key={index} from={item.path} to={item.redirect}></Redirect>
    })

    routes = routes.filter(item=>!item.redirect);

    return (
      <Router history={history}>
        <Switch>
          {routes.map((item, index) => {
            return (
              <Route path={item.path} key={index} render={(props)=>{
                  return <item.component routes={item.children} {...props}></item.component>
              }} />
            );
          })}
          {
              redirectArr.length!==0&&redirectArr
          }
        </Switch>
      </Router>
    );
  }
}

export default MapRouter;
