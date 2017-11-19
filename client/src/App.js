import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import MainContent from "./components/MainContent";

const App = () => (
  <div>
    <Navbar />
    <Jumbotron />
    <MainContent />
  </div>
);

export default App;
