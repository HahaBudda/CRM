import React from 'react';
import style from "./PageMain.module.scss"
import Navbar from "../../Companents/Navbar/Navbar";
import Header from "../../Companents/Header/Header";
import Main from "../../Companents/Main/Main";
import Modal from "../../Companents/Modal/Modal";

const PageMain = () => {
	return (
		<div className={style.main}>
			<div className={style.wrapper}>
				<Navbar/>
				<div className={style.container}>
					<Header title={'Sales statistics'} description={'Welcome to CRM dashboard'}/>
					<Main/>
				</div>
			</div>

		</div>
	);
};

export default PageMain;