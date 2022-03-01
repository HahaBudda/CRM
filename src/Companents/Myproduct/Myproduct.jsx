import React from 'react';

import Navbar from "../Navbar/Navbar";
import Button from "../Button/Button";

import styles from './Myproduct.module.scss'
import Header from "../Header/Header";


const Myproduct = () => {
	return (
		<main className={styles.main}>
			<div className={styles.div}>
			<Navbar/>
				<Header/>
			</div>

		</main>
	);
};

export default Myproduct;