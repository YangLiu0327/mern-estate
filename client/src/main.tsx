import React from "react";
import { render } from "react-dom";
import { persistor, store } from "./redux/store";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import { PersistGate } from "redux-persist/integration/react";

render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);