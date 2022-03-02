import React from 'react';

import styles from './Createacc.module.scss'
import Input from "../../Companents/Input/Input";
import Button from "../../Companents/Button/Button";
import PreviewImg from "../../Assets/preview.jpg";
import {Link} from "react-router-dom";

const Createacc = () => {
	return (
		<main className={styles.main}>
			<div className={styles.main__page}>
				<h1 className={styles.main__title}>Create an account</h1>
				<div className={styles.main__signin}>
					<form className={styles.main__signin__form}>
						<div className={styles.main__signin__label__wrapper}>
							<label className={styles.main__signin__label__firstname}>
							First name
							<Input
								type={'text'}
								placeholder={'First name'}
							/>
						</label>
							<label className={styles.main__signin__label__lastname}>
								Last name
								<Input
									type={'text'}
									placeholder={'Last name'}

								/>
							</label>
						</div>

						<label className={styles.main__signin__label}>
							Company name
							<Input
								type={'text'}
								placeholder={'Company name'}

							/>
						</label>
						<label className={styles.main__signin__label}>
							Email
							<Input
								type={'email'}
								placeholder={'Email'}
							/>
						</label>
						<label className={styles.main__signin__label}>
							Enter password
							<Input
								type={'password'}
								placeholder={'Enter password'}

							/>
						</label>
						<label className={styles.main__signin__label}>
							Repeat password
							<Input
								type={'password'}
								placeholder={'Repeat password'}

							/>
						</label>
						<label className={styles.main__signin__button}><Button title={'Create account'}/></label>
						<label className={styles.main__signin__label__forgot}>Already have an account?  <Link to='/sign-in' className={styles.main__signin__forgot__a}> Log in</Link></label>
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