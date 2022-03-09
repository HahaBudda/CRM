import React, { useState } from "react"

import style from "./PersonalCabinet.module.scss"
import Input from "../Input/Input"
import Button from "../Button/Button"

const PersonalCabinet = ({ children }) => {
  const [formValue, setFormValue] = useState({
    email: {
      value: "",
      isValid: false,
    },
    password: {
      value: "",
      isValid: false,
    },
  })
  return (
    <>
      <form className={style.form}>
        <div className={style.form__label__wrapper}>
          <div className={style.form__input__info}>
            <Input
              type="email"
              name="email"
              label="Email"
              placeholder="Email"
              formValue={formValue}
              setFormValue={setFormValue}
              value=""
              location="/personal-cabinet"
            />
          </div>
          <div className={style.form__input__pass}></div>
        </div>
      </form>
      <label className={style.form__label__button}>
        <Button title={"Save change"} />
      </label>
    </>
  )
}

export default PersonalCabinet
