import React from 'react';

import tableTd from "../../MockData/mockData";
import TableTd from "../Table/TableTd";

import styles from './Myproduct.module.scss'

const Myproduct = () => {
	return (
		<main className={styles.main}>
			<table className={styles.main__table}>
				<thead>
				<tr>
					<th>Product name</th>
					<th>Store</th>
					<th>Address</th>
					<th>Category</th>
					<th>Creation date</th>
					<th>Price</th>
					<th>Remains</th>
					<th>Weight/Volume</th>
					<th>Actions</th>
				</tr>
				</thead>
				{tableTd.map((td) => {
					return (
							<TableTd name={td.name}/>
					)
				})}
			</table>
		</main>


	);
};

export default Myproduct;