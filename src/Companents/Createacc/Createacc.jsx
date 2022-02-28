import React from 'react';

import styles from './Createacc.module.scss'
import Input from "../Input/Input";
import Button from "../Button/Button";
import PreviewImg from "../../Assets/preview.jpg";

const Createacc = () => {
	return (
		<main className={styles.main}>
			<div className={styles.main__page}>
				<h1 className={styles.main__title}>Create an account</h1>
				<div className={styles.main__signin}>
					<form className={styles.main__signin__form}>
						<div className={styles.main__signin__label__wrapper}>
							<label className={styles.main__signin__label__firstname}>
							Email
							<Input/>
						</label>
							<label className={styles.main__signin__label__lastname}>
								Email
								<Input/>
							</label>
						</div>

						<label className={styles.main__signin__label}>
							Email
							<Input/>
						</label>
						<label className={styles.main__signin__label}>
							Password
							<Input/>
						</label>
						<label className={styles.main__signin__label}>
							Email
							<Input/>
						</label>
						<label className={styles.main__signin__label}>
							Password
							<Input/>
						</label>
						<label className={styles.main__signin__button}><Button/></label>
						<label className={styles.main__signin__label}><a href="#" className={styles.main__signin__forgot}>Forgot password?</a></label>
					</form>

				</div>
			</div>
			<div className={styles.main__preview}>
				<img className={styles.main__preview__img} alt={"PreviewImg"} src={PreviewImg}/>
			</div>

		</main>


	);
};

export default Createacc;