import './App.css';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {privateRoutes,publicRoutes } from "./Companents/routes/AppRouter";



function App() {
	return (
		<BrowserRouter>
		<Switch>
			{privateRoutes.map(route =>
				<Route
					component={route.component}
					path={route.path}
				/>
			)}
			{publicRoutes.map(route =>
				<Route
					component={route.component}
					path={route.path}
				/>
			)}
			<Redirect to={"/sign-in"}/>
		</Switch>

		</BrowserRouter>
	);
}

export default App;
