import React, {useState} from 'react';

import style from './TableTdProduct.module.scss'

import iconRedact from '../../Assets/Redact.svg'
import iconDell from  '../../Assets/Delete.svg'
import ModalCreate from "../Modal/ModalCreate";
import ModalRedact from "../Modal/ModalRedact";
import ModalSell from "../Modal/ModalSell";




const TableTdProduct = ({name}) => {
  const [modalActiveS, setModalActiveS] = useState(false)
  const [modalActiveR, setModalActiveR] = useState(false)

  return (
      <>

          <tbody>
          <tr>
            <td>{name}</td>
            <td>Adidas</td>
            <td>Krylatskaya</td>
            <td>Sportswear</td>
            <td>0.5.07.2021</td>
            <td>$1000</td>
            <td>40</td>
            <td>5kg</td>
            <td className={style.td}>
              <button className={style.td__button__sell} onClick={() => setModalActiveS(true)}>Sell</button>
              <button className={style.td__button__redact} onClick={() => setModalActiveR(true)}><img src={iconRedact}/></button>
              <button className={style.td__button__dell}><img src={iconDell}/></button>
            </td>
          </tr>
          </tbody>
        {
          (modalActiveS
          &&
          <ModalSell active={modalActiveS} setActive={setModalActiveS}/>)
          ||
          (modalActiveR
          &&
          <ModalRedact active={modalActiveR} setActive={setModalActiveR}/>)
        }
      </>

);
};

export default TableTdProduct;