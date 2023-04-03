import React, { Fragment } from "react";

import { Route, Switch } from "react-router-dom";
import Cart from "./components/Cart/Cart";

const App = () => {
  return (
    <Fragment>
      <Switch>
        <Route path="/" exact>
          <Cart />
        </Route>
      </Switch>
    </Fragment>
  );
};
export default App;
