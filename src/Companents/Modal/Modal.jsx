import React from 'react';
import classnames from 'classnames';

import styles from './Modal.module.scss'
import Input from "../Input/Input";

const Modal = ({setActive,}) => {


	return (
		<div className={styles.modal} onClick={() => setActive(false)}>
			<div className={styles.modal__content} onClick={e => e.stopPropagation()}>
				<form className={styles.modal__content__form}>
					<h1>Creating a product</h1>
					<label className={styles.modal__content__label}>
						<Input
							type={'text'}
							placeholder={'Store'}
						/>
					</label>
					<label className={styles.modal__content__label}>
						<Input
							type={'text'}
							placeholder={'Price'}
						/>
					</label>
					<label className={styles.modal__content__label}>
						<Input
							type={'text'}
							placeholder={'Product name'}
						/>
					</label>
					<label className={styles.modal__content__label}>
						<Input
							type={'text'}
							placeholder={'Product category'}
						/>
					</label>
					<label className={styles.modal__content__label}>
						<Input
							type={'text'}
							placeholder={'Quantity of goods'}
						/>
					</label>
					<label className={styles.modal__content__label}>
						<Input
							type={'text'}
							placeholder={'Weight / Volume of one item'}
						/>
					</label>
				</form>
			</div>
		</div>
	);
};

export default Modal;