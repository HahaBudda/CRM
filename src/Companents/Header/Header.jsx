import React from 'react';

import Button from "../Button/Button";

import style from './Header.module.scss'
// import fileSvg from '../../Assets/doc.svg'

const Header = ({title,description}) => {
	return (
		<header className={style.header}>
			<div className={style.header__wrapper}>
			<div className={style.header__title}>
				<h1>{title}</h1>
				<span>{description}</span>
			</div>
				<div className={style.header__button_wrapper}>
			<Button title='Create a product' />
				</div>
			</div>

		</header>
	);
};

export default Header;