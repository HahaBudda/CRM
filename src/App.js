import React, { useCallback, useEffect, useState } from "react"

import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom"
import { privateRoutes, publicRoutes } from "./Companents/routes/AppRouter"
import { MainPage } from "./Pages/MainPage/MainPage"

function App() {
  const [isLogin, setIsLogin] = useState(localStorage.getItem("LOGIN_USER"))

  return !isLogin ? (
    <Switch>
      {publicRoutes.map((route) => (
        <Route component={route.component} path={route.path} />
      ))}
      <Redirect to={"/sign-in"} />
    </Switch>
  ) : (
    <Switch>
      {privateRoutes.map((route) => (
        <Route component={route.component} path={route.path} />
      ))}
      <MainPage children />
      <Redirect to={"/sign-in"} />
    </Switch>
  )
}

export default App
