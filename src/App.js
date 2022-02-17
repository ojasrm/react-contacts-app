import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./routes";
// import "semantic-ui-css/semantic.min.css";
// import "semantic-ui-css/semantic.js";

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					{routes.map((route, index) => {
						return (
							<Route
								key={index}
								path={route.path}
								exact
								render={(props) => <route.component {...props} />}
							></Route>
						);
					})}
				</Switch>
			</Router>
		</div>
	);
}

export default App;
