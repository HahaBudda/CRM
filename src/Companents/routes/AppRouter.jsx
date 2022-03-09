import SignIn from "../../Pages/PageSingIN/SignIn"
import Createacc from "../../Pages/PageCreateAcc/Createacc"
import Main from "../Main/Main"
import Myproduct from "../Myproduct/Myproduct"
import MySales from "../MySales/MySales"
import PersonalCabinet from "../PersonalCabinet/PersonalCabinet"
import { MainPage } from "../../Pages/MainPage/MainPage"

export const privateRoutes = [
  { path: "/main-page", component: MainPage },
  { path: "/my-products", component: Myproduct },
  { path: "/my-sales", component: MySales },
  { path: "/personal-cabinet", component: PersonalCabinet },
  { path: "/sign-in", component: SignIn },
]
export const publicRoutes = [
  { path: "/sign-in", component: SignIn },
  { path: "/create-acc", component: Createacc },
]
