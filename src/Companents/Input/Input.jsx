import React, {useState} from 'react';

import styles from './Input.module.scss'
import {useLocation} from "react-router-dom";
import {Patterns} from "../../appCreateAcc";
import classNames from "classnames";

const Input = (props) => {
  const {label, name, setFormValue, formValue, placeholder, type} = props
  const {pathname} = useLocation()

  switch (pathname) {
    case '/create-acc':

  }
  const changeInput = (e) => {
    if (e.target.name === 'confirmPassword') {
      setFormValue({
        ...formValue, confirmPassword: {
          value: e.target.value,
          isValid: e.target.value !== '' && e.target.value === formValue.password.value && formValue.password.isValid
        }
      })
    } else {
      setFormValue({
        ...formValue, [name]: {
          value: e.target.value,
          isValid: Patterns[name].test(e.target.value)
        }
      })
    }
  }

    return (
        <div className={styles.input__wrapper}>
          <label className={styles.input__label}>{label}</label>
          <input
              name={name}
              type={type}
              placeholder={placeholder}
              onChange={(e) => changeInput(e)}
              className={classNames(styles.input, {[styles.error]: !formValue[name].isValid && formValue[name].value})}
          />
        </div>
    );
}
export default Input