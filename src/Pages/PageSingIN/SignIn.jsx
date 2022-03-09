import React, {useState} from 'react';

import styles from './SignIn.module.scss'

import PreviewImg from '../../Assets/preview.jpg'

import Input from "../../Companents/Input/Input";
import Button from "../../Companents/Button/Button";
import {Link, useHistory} from "react-router-dom";



const SignIn = () => {

	const [formValue, setFormValue] = useState({
		email: {
			value: '',
			isValid: false
		},
		password: {
			value: '',
			isValid: false
		},

	})
	const history = useHistory()
	const usersStorage = JSON.parse(localStorage.getItem('USERS_STORAGE')) || []



	const onSubmit=(e)=>{
		e.preventDefault()
		if(usersStorage.find((user) => user.email === formValue.email.value) && usersStorage.find((user)=>user.password === formValue.password.value))
		{
			history.push('/main-page')
			console.log('123')

		}else {
			formValue["password"].isValid=false;
			formValue["email"].isValid=false;
		}

	}



	return (
		<main className={styles.main}>
			<div className={styles.main__page}>
				<h1 className={styles.main__title}>Sign in</h1>
				<div className={styles.main__signin}>
					<form className={styles.main__signin__form}>
						<Input type='email'
						       name='email'
						       label='Email'
						       placeholder='Email'
						       formValue={formValue}
						       setFormValue={setFormValue}
						       value=''
						       location='/sign-in'
						/>

						<Input type='password'
						       name='password'
						       label='Password'
						       placeholder='Enter password'
						       formValue={formValue}
						       setFormValue={setFormValue}
						       value=''
						       location='/sign-in'
						/>

							<Button title={'Log in'} onClick={onSubmit}/>

							<Link to='/create-acc' className={styles.main__signin__forgot}>
								Create account?
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