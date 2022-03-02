import React from "react";


import Navbar from "../../Companents/Navbar/Navbar";

import Header from "../../Companents/Header/Header";

import style from './PageMySales.module.scss'
import MySales from "../../Companents/MySales/MySales";


function PageMySales() {
	return (

		<div className={style.main}>
			<div className={style.wrapper}>
				<Navbar/>
				<div className={style.container}>
					<Header title={'My sales'} description={'Sales table'}/>
					<MySales/>

				</div>
			</div>
		</div>

	);
}

export default PageMySales;
