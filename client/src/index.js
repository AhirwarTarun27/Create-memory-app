import React from "react";
import ReactDOM from "react-dom";
// provider is keep track to the store which is that global state and that allow us to acess the store from anywere inside of the app we dont have to be exactly in the parent component or in child component
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
