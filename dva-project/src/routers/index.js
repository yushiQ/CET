import React from "react";
import routes from "./routes"
import MapRouter from "./map";

function RouterView(props) {
  return  <MapRouter routes={routes} {...props}/>
}

export default RouterView;