import React, {useEffect, useState} from 'react';

import styles from './Createacc.module.scss'
import Input from "../../Companents/Input/Input";
import Button from "../../Companents/Button/Button";
import PreviewImg from "../../Assets/preview.jpg";
import {Link, useHistory, useLocation} from "react-router-dom";


const Createacc = () => {
	const [formValue, setFormValue] = useState({
		firstName: {
			value: '',
			isValid: false
		},
		lastName: {
			value: '',
			isValid: false
		},
		companyName: {
			value: '',
			isValid: false
		},
		email: {
			value: '',
			isValid: false
		},
		password: {
			value: '',
			isValid: false
		},
		confirmPassword: {
			value: '',
			isValid: false
		},
	})
	const usersStorage = JSON.parse(localStorage.getItem('USERS_STORAGE')) || []
	const [isFormValid, setIsFormValid] = useState([])
	const history = useHistory()

	const onSubmit = (e) => {
		e.preventDefault()

		Object.keys(formValue).map((input) => {
			isFormValid.push(formValue[input].isValid)
		})
		if (!isFormValid.filter((el) => !el).length ) {
			const newUser = {
				firstName: formValue.firstName.value,
				lastName: formValue.lastName.value,
				companyName: formValue.companyName.value,
				email: formValue.email.value,
				password: formValue.password.value,
				confirmPassword: formValue.confirmPassword.value
			}

			if(usersStorage.find((user) => user.email === formValue.email.value)){
				alert('такой email уже существует')
				formValue["email"].isValid=false;
			}else {
				localStorage.setItem('USERS_STORAGE', JSON.stringify([...usersStorage, newUser]))
				localStorage.setItem('LOGIN_USER', JSON.stringify(newUser))
				history.push('/sign-in')


			}
		} else {

		}


		setIsFormValid([])
	}


	return (
		<main className={styles.main}>
			<div className={styles.main__page}>
				<h1 className={styles.main__title}>Create an account</h1>
				<div className={styles.main__signin}>
					<form className={styles.main__signin__form}>
						<div className={styles.main__signin__label__wrapper}>
							<Input type='text'
							       name='firstName'
							       label='First name'
							       placeholder='First name'
							       formValue={formValue}
							       setFormValue={setFormValue}
							       value=''
							       location='/create-acc'
							/>
							<Input type='text'
							       name='lastName'
							       label='Last name'
							       placeholder='last name'
							       formValue={formValue}
							       setFormValue={setFormValue}
							       value=''
							       location='/create-acc'
							/>
						</div>
						<Input type='text'
						       name='companyName'
						       label='Company name'
						       placeholder='Company name'
						       formValue={formValue}
						       setFormValue={setFormValue}
						       value=''
						       location='/create-acc'

						/>
						<Input type='email'
						       name='email'
						       label='Email'
						       placeholder='Email'
						       formValue={formValue}
						       setFormValue={setFormValue}
						       value=''
						       location='/create-acc'
						/>
						<Input type='password'
						       name='password'
						       label='Password'
						       placeholder='Enter password'
						       formValue={formValue}
						       setFormValue={setFormValue}
						       value=''
						       location='/create-acc'
						/>
						<Input type='password'
						       name='confirmPassword'
						       label='Repeat password'
						       placeholder='Repeat password'
						       formValue={formValue}
						       setFormValue={setFormValue}
						       value=''
						       location='/create-acc'
						/>
						<Button title={'Create account'} onClick={onSubmit}/>
						<label className={styles.main__signin__label__forgot}>Already have an account?
							<Link to='/sign-in' className={styles.main__signin__forgot__a}> Log in</Link>
						</label>
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