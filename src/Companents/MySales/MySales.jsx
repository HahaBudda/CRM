import React from 'react';
import styles from "./MySales.module.scss"
import tableTd from "../../MockData/mockData";
import TableTdProduct from "../Table/TableTdSales";

const MySales = () => {
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
					<th>Sold items</th>
					<th>Weight/Volume</th>
					<th>Last sale</th>
				</tr>
				</thead>
				{tableTd.map((td) => {
					return (
						<TableTdProduct name={td.name}/>
					)
				})}
			</table>
		</main>
	);
};

export default MySales;