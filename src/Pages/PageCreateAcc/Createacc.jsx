import React, {useEffect, useState} from 'react';

import styles from './Createacc.module.scss'
import Input from "../../Companents/Input/Input";
import Button from "../../Companents/Button/Button";
import PreviewImg from "../../Assets/preview.jpg";
import {Link} from "react-router-dom";
import {ValidEmail, ValidPassword, ValidLastName, ValidFirstName, ValidCompanyName, ValidRepeatPassword} from "../../appCreateAcc";


const Createacc = () => {

	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [companyName, setCompanyName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [repeatPassword, setRepeatPassword] = useState('')
	const [isFirstNameError, setIsFirstNameError] = useState(false)
	const [isLastNameError, setIsLastNameError] = useState(false)
	const [isCompanyNameError, setIsCompanyNameError] = useState(false)
	const [isEmailError, setIsEmailError] = useState(false)
	const [isPasswordError, setIsPasswordError] = useState(false)
	const [isRepeatPasswordError, setIsRepeatPasswordError] = useState(false)
	// const [formValid, setFormValid] = useState(false)

	// useEffect(() => {
	// 	const allError = [isFirstNameError,isLastNameError, isCompanyNameError, isEmailError, isPasswordError, isRepeatPasswordError]
	// 	allError.every(el => el === false) && setFormValid(true)
	//
	//
	// }, [isFirstNameError,isLastNameError, isCompanyNameError, isEmailError, isPasswordError, isRepeatPasswordError, formValid])


	// console.log('=>',isFirstNameError, firstName)

	const allError = [isFirstNameError,isLastNameError, isCompanyNameError, isEmailError, isPasswordError, isRepeatPasswordError]

	const obj = {firstName, lastName,companyName,email,password,repeatPassword}

	const onSubmit = (e) => {
		e.preventDefault()
		if(allError.every(el=>el===false)){
			console.log(obj)
			e.preventDefault(e)
		}


	};


	return (
		<main className={styles.main}>
			<div className={styles.main__page}>
				<h1 className={styles.main__title}>Create an account</h1>
				<div className={styles.main__signin}>
					<form className={styles.main__signin__form}>
						<div className={styles.main__signin__label__wrapper}>
							<Input type={'text'}
							       label={'First name'}
							       placeholder={'First name'}
							       value={firstName}
							       onChange={(e) => {
								       setFirstName(e.target.value)
								       !ValidFirstName.test(firstName) ? setIsFirstNameError(true) : setIsFirstNameError(false)
							       }}
							       isError={isFirstNameError}
							/>

							<Input type={'text'}
							       label={'Last name'}
							       placeholder={'last name'}
							       value={lastName}
							       onChange={(e) => {
											 setLastName(e.target.value)
								       !ValidLastName.test(lastName) ? setIsLastNameError(true) : setIsLastNameError(false)
							       }}
							       isError={isLastNameError}
							/>

						</div>

						<Input type={'text'}
						       label={'Company name'}
						       placeholder={'Company name'}
						       value={companyName}
						       onChange={(e) => {
										 setCompanyName(e.target.value)
							       !ValidCompanyName.test(companyName) ? setIsCompanyNameError(true) : setIsCompanyNameError(false)
						       }}
						       isError={isCompanyNameError}

						/>


						<Input type={'email'}
						       label={'Email'}
						       placeholder={'Email'}
						       value={email}
						       onChange={(e) =>{
										 setEmail(e.target.value)
							       !ValidEmail.test(email) ? setIsEmailError(true) : setIsEmailError(false)

									 }}
						       isError={isEmailError}
						/>


						<Input type={'password'}
						       label={'Password'}
						       placeholder={'Enter password'}
						       value={password}
						       onChange={(e) => {
							       setPassword(e.target.value)
							       !ValidPassword.test(password) ? setIsPasswordError(true) : setIsPasswordError(false)}}
						       isError={isPasswordError}

						/>

						<Input type={'password'}
						       label={'Repeat password'}
						       placeholder={'Repeat password'}
						       value={repeatPassword}
						       onChange={(e) =>{
							       setRepeatPassword(e.target.value)
							       !ValidRepeatPassword.test(repeatPassword) || (repeatPassword === password)
								       ? setIsRepeatPasswordError(true)
								       : setIsRepeatPasswordError(false)}}
						       isError={isRepeatPasswordError}
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