import React from 'react';

import styles from './TableTdSales.module.scss'


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
            <td>04.07.2021</td>
          </tr>
          </tbody>

      </>

);
};

export default TableTdProduct;