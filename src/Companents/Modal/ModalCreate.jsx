import React from 'react';


import styles from './Modal.module.scss'
import Input from "../Input/Input";
import Button from "../Button/Button";


const ModalCreate = ({setActive,}) => {


	return (<div className={styles.modal} onClick={() => setActive(false)}>
			<div className={styles.modal__content} onClick={e => e.stopPropagation()}>
				<form className={styles.modal__content__form}>
					<label><h1>Creating a product</h1></label>

					<Input type={'text'}
					       placeholder={'Store'}/>

					<Input type={'text'}
					       placeholder={'Price'}/>

					<Input type={'text'}
					       placeholder={'Product name'}/>

					<Input type={'text'}
					       placeholder={'Product category'}/>

					<Input type={'text'}
					       placeholder={'Quantity of goods'}/>

					<Input type={'text'}
					       placeholder={'Weight / Volume of one item'}/>

					<Button
						title={'Add product +'}

					/>
				</form>
			</div>
		</div>);
};

export default ModalCreate;