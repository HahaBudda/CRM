import React from 'react';

import styles from './SignIn.module.scss'

import PreviewImg from '../../Assets/preview.jpg'

import Input from "../../Companents/Input/Input";
import Button from "../../Companents/Button/Button";
import {Link} from "react-router-dom";



const SignIn = () => {

	return (
		<main className={styles.main}>
			<div className={styles.main__page}>
				<h1 className={styles.main__title}>Sign in</h1>
				<div className={styles.main__signin}>
					<form className={styles.main__signin__form}>
						<Input type={'email'}
						       label={'Email'}
						       placeholder={'Email'}/>

						<Input type={'password'}
						       label={'Password'}
						       placeholder={'Enter password'}/>

							<Button title={'Log in'}/>

							<Link to='/create-acc' className={styles.main__signin__forgot}>
								Forgot password?
							</Link>

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