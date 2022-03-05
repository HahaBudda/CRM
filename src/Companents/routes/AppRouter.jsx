
import SignIn from "../../Pages/PageSingIN/SignIn";
import Createacc from "../../Pages/PageCreateAcc/Createacc";
import Main from "../Main/Main";
import Myproduct from "../Myproduct/Myproduct";
import MySales from "../MySales/MySales";
import PersonalCabinet from "../PersonalCabinet/PersonalCabinet";


export const privateRoutes=[
	{path:'/main-page',component: Main},
	{path: '/my-products',component:Myproduct},
	{path: '/my-sales',component: MySales},
	{path: '/personal-cabinet',component: PersonalCabinet},
]
export const publicRoutes=[
	{path:'/sign-in',component:SignIn},
	{path: '/create-acc',component:Createacc}
]