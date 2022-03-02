import React from 'react';

import styles from './Modal.module.scss'

const Modal = ({active, setActive}) => {
	return (
		<div className={styles.modal}>
			<div className={styles.modal__content} onClick={e => e.stopPropagation()}>
				123
			</div>

		</div>
	);
};

export default Modal;