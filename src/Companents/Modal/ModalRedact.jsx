import React from 'react';
import styles from "./Modal.module.scss";
import Input from "../Input/Input";
import Button from "../Button/Button";


const ModalRedact = ({setActive,}) => {
	return (<div className={styles.modal} onClick={() => setActive(false)}>

		<div className={styles.modal__content} onClick={e => e.stopPropagation()}>

			<form className={styles.modal__content__form}>
				<label><h1>Editing a product</h1></label>

				<Input type={'text'}
				       placeholder={'Store'}/>



				<Button
					title={'Add product +'}

				/>
			</form>
		</div>
	</div>);
};



export default ModalRedact;