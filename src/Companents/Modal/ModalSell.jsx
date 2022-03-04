import React from 'react';
import styles from "./Modal.module.scss";
import Input from "../Input/Input";
import Button from "../Button/Button";

const ModalSell = ({setActive,}) => {
	return (<div className={styles.modal} onClick={() => setActive(false)}>

		<div className={styles.modal__content} onClick={e => e.stopPropagation()}>

			<form className={styles.modal__content__form}>
				<label><h1>Sell the product</h1></label>

				<Input type={'text'}
				       placeholder={'Number of products'}/>

				<Input type={'text'}
				       placeholder={'Date of sale'}/>



				<Button
					title={'Sell product'}

				/>
			</form>
		</div>
	</div>);
};

export default ModalSell;