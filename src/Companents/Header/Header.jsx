import React, {useState} from 'react';

import Button from "../Button/Button";

import style from './Header.module.scss'
import Modal from "../Modal/Modal";
import {useLocation} from "react-router-dom";
// import fileSvg from '../../Assets/doc.svg'

const Header = ({title, description}) => {

	const [modalActive, setModalActive] = useState(false)

	const {pathname} = useLocation()


	function renderHeadings() {
		// return pathname.includes('sales') && 'Sales statistics';
		switch (pathname) {
			case '/main-page':
				return {title:'Sales statistics', description: 'Welcome to CRM dashboard'};
			case '/my-products':
				return {title:'My product', description: 'Product table'};
			case '/my-sales':
				return {title:'My sales', description: 'Sales table'};
			case '/personal-cabinet':
				return {title:'Personal Cabinet', description: 'Information about your account'};
		}
	}

	return (
		<>
			<header className={style.header}>
				<div className={style.header__wrapper}>
					<div className={style.header__title}>
						<h1>{renderHeadings().title}</h1>
						<span>{renderHeadings().description}</span>
					</div>
					<div className={style.header__button_wrapper}>
						<Button title='Create a product' onClick={() => setModalActive(true)}/>
					</div>
				</div>
			</header>
			{
				modalActive
				&&
				<Modal active={modalActive} setActive={setModalActive}/>
			}
		</>
	);
};

export default Header;