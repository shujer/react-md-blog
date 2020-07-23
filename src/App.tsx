import React from "react";
import { routes, RouterRender } from "./routers";
import "./App.css";
import { Article } from "./pages";

//1247462818
const App = () => {
  return <RouterRender routes={routes}></RouterRender>;
};

export default App;
