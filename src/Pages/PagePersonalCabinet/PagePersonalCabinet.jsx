import React from "react";


import Navbar from "../../Companents/Navbar/Navbar";
import Header from "../../Companents/Header/Header";
import PersonalCabinet from "../../Companents/PersonalCabinet/PersonalCabinet";

import style from './PagePersonalCabinet.module.scss'



function PagePersonalCabinet() {
	return (

		<div className={style.main}>
			<div className={style.wrapper}>
				<Navbar/>
				<div className={style.container}>
					<Header title={'Personal Cabinet'} description={'Information about your account'}/>
					<PersonalCabinet/>
				</div>
			</div>
		</div>

	);
}

export default PagePersonalCabinet;
