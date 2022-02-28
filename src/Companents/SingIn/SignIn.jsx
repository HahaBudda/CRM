import React from 'react';

import styles from './SignIn.module.scss'

import PreviewImg from '../../Assets/preview.jpg'

import Input from "../Input/Input";
import Button from "../Button/Button";

const SignIn = () => {
	return (
		<main className={styles.main}>
			<div className={styles.main__page}>
				<h1 className={styles.main__title}>Sign in</h1>
				<div className={styles.main__signin}>
					<form className={styles.main__signin__form}>
						<label className={styles.main__signin__label}>
							Email
							<Input/>
						</label>
						<label className={styles.main__signin__label}>
							Password
							<Input/>
						</label>
						<label className={styles.main__signin__button}><Button/></label>
						<label className={styles.main__signin__label}><a href="#" className={styles.main__signin__forgot}>Forgot
							password?</a></label>
					</form>
				</div>
			</div>
			<div className={styles.main__preview}>
				<img className={styles.main__preview__img} alt={"PreviewImg"} src={PreviewImg}/>
			</div>

		</main>
	);
};

export default SignIn;