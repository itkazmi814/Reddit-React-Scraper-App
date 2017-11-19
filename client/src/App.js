import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
import Navbar from "./components/Navbar";

import MainPage from "./components/MainPage";
import SavedPage from "./components/SavedPage";

const App = () => <Navbar />;

export default App;
