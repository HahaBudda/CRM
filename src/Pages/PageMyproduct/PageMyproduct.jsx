import React from "react";


import Navbar from "../../Companents/Navbar/Navbar";
import Myproduct from "../../Companents/Myproduct/Myproduct";
import Header from "../../Companents/Header/Header";

import style from './PageMyproduct.module.scss'


function PagegeMyproduct() {
	return (

		<div className={style.main}>
			<div className={style.wrapper}>
				<Navbar/>
				<div className={style.container}>
					<Header title={'My product'} description={'Product table'}/>
					<Myproduct/>
				</div>
			</div>
		</div>

	);
}

export default PagegeMyproduct;
