import React from "react";
import { persistor, store } from "./redux/store";
import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import { PersistGate } from "redux-persist/integration/react";

const rootElement = document.getElementById('root')!;

createRoot(rootElement).render(
  <Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
    <App />
  </PersistGate>
</Provider>
);