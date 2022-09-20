import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateUser from "../components/createuser";
import Task from "../components/task";
import Users from "../components/users";
import Header from "../components/header";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Task />} />
        <Route path="/createuser" element={<CreateUser />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
