import React from 'react';

import styles from './Button.module.scss'

const Button = ({title, image, onClick}) => {
	return (

			<button className={styles.button} onClick={onClick}>
				{/*<svg src={image} className={styles.button__image} alt='File icon'/>*/}
				{title}
			</button>

	);
};

export default Button;