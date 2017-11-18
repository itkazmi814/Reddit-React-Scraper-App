import React from "react";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch,
	Redirect
} from "react-router-dom";

const App = () => (
	<Router>
		<div>
			<Nav />
			<Switch>
				<Redirect path="/" exact component="/books" />
				<Route path="/books" component={Books} />
				<Route path="/book/:id" component={Detail} />
				<Route component={NoMatch} />
			</Switch>
		</div>
	</Router>
);

export default App;
