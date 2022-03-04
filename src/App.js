import React, {useState} from "react";

import './App.css';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {privateRoutes,publicRoutes } from "./Companents/routes/AppRouter";
import Header from "./Companents/Header/Header";
import Navbar from "./Companents/Navbar/Navbar";




function App() {
	const [isLogin, setIsLogin] = useState(localStorage.getItem('LOGIN_USER'))
	return (
		<BrowserRouter>
			<Switch>
				{publicRoutes.map(route =>
					<Route
						component={route.component}
						path={route.path}
					/>
				)}


			<div className="main">
			<div className="wrapper">
				<Navbar/>
				<div className="container">
					<Header
						title={ 'dsds'}
						description={'dsdsd'}
					/>
					{privateRoutes.map(route =>
						<Route
							component={route.component}
							path={route.path}
						/>
					)}
				</div>
			</div>
			</div>
				<Redirect to={"/sign-in"}/>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
