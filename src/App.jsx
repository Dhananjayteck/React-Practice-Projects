import { useState } from "react";
import "./App.css";
import State from "./components/state";
import Card from "./components/card";
import ColorChange from "./components/project1-color/ColorChange";
import PasswordGenerator from "./components/project2-password/PasswordGenerator";
import SwapCurrency from "./components/project3-swap-currency/SwapCurrency";
import ReactRouter from "./components/project4-react-router/ReactRouter";
import ContextApi from "./components/project5-contextApi/ContextApi";
import ThemeSwitch from "./components/project6-theme-switch/ThemeSwitch";
import Todo from "./components/project7-todoContextLocal/Todo";

function App() {
  return (
    <>
      {/* <State/> */}
      {/* <Card author="Dhananjay"/> */}
      {/* <ColorChange /> */}
      {/* <PasswordGenerator /> */}
      {/* <SwapCurrency /> */}
      {/* <ReactRouter /> */}
      {/* <ContextApi /> */}
      {/* <ThemeSwitch /> */}
      <Todo />
    </>
  );
}

export default App;
