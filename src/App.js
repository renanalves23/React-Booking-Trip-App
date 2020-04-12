import React from "react";

import { Provider } from "react-redux";

import store from "./store";

import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Routes from "./routes";

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}
