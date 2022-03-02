
import PageMyproduct from "../../Pages/PageMyproduct/PageMyproduct";
import PageMain from "../../Pages/PageMain/PageMain";
import PageMySales from "../../Pages/PageMySales/PageMySales";
import PagePersonalCabinet from "../../Pages/PagePersonalCabinet/PagePersonalCabinet";
import SignIn from "../../Pages/PageSingIN/SignIn";
import Createacc from "../../Pages/PageCreateAcc/Createacc";


export const privateRoutes=[
	{path:'/main-page',component: PageMain},
	{path: '/my-products',component:PageMyproduct},
	{path: '/my-sales',component: PageMySales},
	{path: '/personal-cabinet',component: PagePersonalCabinet},
	{path: '/sign-in', component: SignIn},
]
export const publicRoutes=[
	{path:'/sign-in',component:SignIn},
	{path: '/create-acc',component:Createacc}

]