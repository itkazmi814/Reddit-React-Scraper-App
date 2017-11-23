import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Navbar from "./Navbar";
import MainPage from "./MainPage";
import SavedPage from "./SavedPage";

const MainContainer = () => (
	<Router>
		<div>
			<Navbar />
			<Redirect path="/" to="/main" />
			<Route path="/main" component={MainPage} />
			<Route path="/saved" component={SavedPage} />
		</div>
	</Router>
);

export default MainContainer;
