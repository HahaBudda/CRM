import './App.css';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import SignIn from "./Pages/PageSingIN/SignIn";
import PageMyproduct from "./Pages/PageMyproduct/PageMyproduct";
import PageMain from "./Pages/PageMain/PageMain";
import PageMySales from "./Pages/PageMySales/PageMySales";
import PersonalCabinet from "./Companents/PersonalCabinet/PersonalCabinet";
import PagePersonalCabinet from "./Pages/PagePersonalCabinet/PagePersonalCabinet";
import {privateRoutes,publicRoutes } from "./Companents/UI/AppRouter";



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
