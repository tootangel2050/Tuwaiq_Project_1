import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM, { render } from "react-dom";
import "./index.css";
import App from "./App";
import Index from "./component/Index";
import Recipes from "./component/Recipes";
import Recipe from "./component/Recipe";
import Login from "./component/Login";
import Register from "./component/Register";
const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/recipes" element={<Index />} />
        <Route path="/recipes/:recipeName" element={<Recipe />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>}/>
  
      </Route>
      <Route path="*" />
    </Routes>
  </BrowserRouter>,
  rootElement
);
