import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import UserForm from "./pages/UserForm";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/:id" element={<Detail />}></Route>
        <Route path="/form" element={<UserForm />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
