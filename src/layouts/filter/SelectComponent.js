
import React, { useState } from 'react'
import styles from "./SelectComponent.module.css"
import Select from "react-select"
import { useProductsActions } from '../../components/providers/ProductsProvider'




const SelectComponent = ({ title, ...rest }) => {

	// console.log(rest);



	return (
		<div className={styles.selectContainer}>
			<label> {title} </label>

			<Select {...rest} className={styles.selectTag} />

		</div>
	)
}

export default SelectComponent
