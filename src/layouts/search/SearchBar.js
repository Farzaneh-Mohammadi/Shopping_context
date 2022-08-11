import React, { useState } from 'react'
import styles from "./SearchBar.module.css"

import { BiSearch } from 'react-icons/bi';
import { IconContext } from 'react-icons/';
import { useProductsActions } from '../../components/providers/ProductsProvider';

const SearchBar = ({ filter }) => {
	const [searchValue, setSearchValue] = useState("");

	const dispatch = useProductsActions()


	const changeHandler = (e) => {
		// console.log(e.target.value);
		dispatch({ type: "filter", selectedOption: filter })
		dispatch({ type: "search", event: e })
		setSearchValue(e.target.value)
	}

	return (
		<div className={styles.searchContainer}>

			<IconContext.Provider value={{ color: '#6d28d9', size: '25px' }}>
				<BiSearch />
			</IconContext.Provider>

			<label>Search: </label>

			<input type="text"
				placeholder="search for ..."
				onChange={changeHandler}
				value={searchValue}
			/>
		</div>
	)
}

export default SearchBar
