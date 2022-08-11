import React, { useState } from 'react'
import { useProductsActions } from '../providers/ProductsProvider'
import styles from "./FilterProducts.module.css"
import Select from "react-select"
import SelectComponent from '../../layouts/filter/SelectComponent'
import SearchBar from '../../layouts/search/SearchBar'


const filterOptions = [
	{ value: "", label: "All" },
	{ value: "S", label: "S" },
	{ value: "M", label: "M" },
	{ value: "L", label: "L" },
	{ value: "XL", label: "XL" },
	{ value: "XXL", label: "XXL" },
]

const sortOptions = [
	{ value: "ascending", label: "ascending" },
	{ value: "descending", label: "descending" },
]


export default function FilterProducts() {
	const [sizeValue, setSizeValue] = useState("")
	const [sortByCost, setSortByCost] = useState("")


	const dispatch = useProductsActions()

	const filterSizeHandler = (selectedOption) => {
		dispatch({ type: "filter", selectedOption })
		dispatch({ type: "sort", selectedOption: sortByCost })
		setSizeValue(selectedOption)
	}


	const sortHandler = (selectedOption) => {
		dispatch({ type: "sort", selectedOption })
		setSortByCost(selectedOption)
	}


	return (
		<section>

			<SearchBar filter={sizeValue} />

			<div className={styles.filterBox}>
				<h3>Filtered Products: </h3>

				<div className={styles.selectContainer}>
					<SelectComponent
						title="filter size by:"
						value={sizeValue}
						onChange={filterSizeHandler}
						options={filterOptions}
						
						 />

					<SelectComponent
						title="sort cost by:"
						value={sortByCost}
						onChange={sortHandler}
						options={sortOptions} />
				</div>

			</div>

		</section>
	)
}


