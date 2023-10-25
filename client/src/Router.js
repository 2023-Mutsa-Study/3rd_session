import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import UserForm from "./pages/UserForm";
import Update from "./pages/Update";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/:id" element={<Detail />}></Route>
        <Route path="/form" element={<UserForm />}></Route>
        <Route path="/update/:id" element={<Update />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
