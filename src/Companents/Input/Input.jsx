import React from 'react';

import styles from './Input.module.scss'
import {useLocation} from "react-router-dom";
import {Patterns} from "../../appCreateAcc";
import classNames from "classnames";

const Input = (props) => {
	const {label, isError = false, ...restProps} = props

	const {pathname} = useLocation()

	switch (pathname){
		case '/create-acc':

	}


	return (
		<div className={styles.input__wrapper}>
			<label className={styles.input__label}>{label}</label>
			<input className={classNames(styles.input, {[styles.error]: isError})}
			       {...restProps}
			/>
		</div>
	);
};

export default Input;