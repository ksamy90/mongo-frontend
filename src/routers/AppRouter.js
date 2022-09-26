import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CreateUser from "../components/createuser";
import Users from "../components/task";
import Header from "../components/header";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Users} />
          <Route path="/createuser" component={CreateUser} />
          <Route path="/users" component={Users} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
