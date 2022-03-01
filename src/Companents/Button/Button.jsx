import React from 'react';

import styles from './Button.module.scss'

const Button = ({title, image}) => {
	return (

			<button className={styles.button}>
				{/*<svg src={image} className={styles.button__image} alt='File icon'/>*/}
				{title}
			</button>

	);
};

export default Button;