import React from "react";

import Home from "./pages/Home";
import Bookings from "./pages/Bookings";

import { Switch, Route } from "react-router-dom";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/bookings" exact component={Bookings} />
    </Switch>
  );
}
