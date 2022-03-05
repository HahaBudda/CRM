import React, {useEffect, useState} from "react";

import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {privateRoutes, publicRoutes} from "./Companents/routes/AppRouter";
import {MainPage} from "./Pages/MainPage/MainPage";
import route from "react-router-dom/es/Route";

function App() {
	const [isLogin, setIsLogin] = useState(localStorage.getItem('LOGIN_USER'))

	console.log(`====>isLogin`, isLogin)

	return (
		<BrowserRouter>
			<Switch>
			{
				!isLogin ?
						publicRoutes.map(route =>
						<Route
							component={route.component}
							path={route.path}
						/>
						)
						:
						<MainPage>
							{privateRoutes.map(route =>
								<Route
									component={route.component}
									path={route.path}
								/>
							)}
						</MainPage>
			}
				<Redirect to={'/sign-in'}/>
					</Switch>
		</BrowserRouter>
	);
}

export default App;
