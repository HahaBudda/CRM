import Navbar from "../../Companents/Navbar/Navbar";
import Header from "../../Companents/Header/Header";
import React from "react";
import './MainPage.css';

export const MainPage = ({children}) => {
	return (
		<div className="main">
			<div className="wrapper">
				<Navbar/>
				<div className="container">
					<Header
						title={'dsds'}
						description={'dsdsd'}
					/>
					{children}
				</div>
			</div>
		</div>
	)
}