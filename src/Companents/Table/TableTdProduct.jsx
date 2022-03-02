import React from 'react';

import style from './TableTdProduct.module.scss'

import iconRedact from '../../Assets/Redact.svg'
import iconDell from  '../../Assets/Delete.svg'


const TableTdProduct = ({name}) => {
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
              <button className={style.td__button__sell}>Sell</button>
              <button className={style.td__button__redact}><img src={iconRedact}/></button>
              <button className={style.td__button__dell}><img src={iconDell}/></button>
            </td>
          </tr>
          </tbody>

      </>

);
};

export default TableTdProduct;