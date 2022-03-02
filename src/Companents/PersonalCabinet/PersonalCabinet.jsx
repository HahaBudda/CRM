import React from 'react';

import style from './PersonalCabinet.module.scss'
import Input from "../Input/Input";
import Button from "../Button/Button";

const PersonalCabinet = () => {
	return (
		<>
			<form className={style.form}>
				<div className={style.form__label__wrapper}>
					<label className={style.form__label}>
						First name
						<Input/>
					</label>
					<label className={style.form__label}>
						Company name
						<Input/>
					</label>
					<label className={style.form__label}>
						Address
						<Input/>
					</label>
					<label className={style.form__label}>
						Enter old password
						<Input/>
					</label></div>
				<div className={style.form__label__wrapper}>
					<label className={style.form__label}>
						Last name
						<Input/>
					</label>
					<label className={style.form__label}>
						Product category
						<Input/>
					</label>
					<label className={style.form__label__pas}>
						Enter a new password
						<Input/>
					</label></div>

			</form>
			<label className={style.form__label__button}>
				<Button title={'Save change'}/>
			</label>

		</>
	);
};

export default PersonalCabinet;