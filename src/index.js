import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import reducer from "./store";
import { Provider } from "react-redux";

//라이브러리 설치후 index.js에서 추가
const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    {/* 최상위가 app 이 아닌 provider가 된다 */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
