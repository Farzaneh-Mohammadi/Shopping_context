import React, { useContext, useReducer } from 'react'
import { ProductsData } from '../../db/ProductsData';

import _ from "lodash";

const ProductContext = React.createContext();
const ProductContextDispatcher = React.createContext();


// const initialState = [
// 	{ id: 1, title: "Milk", price: "38$", quantity: 3 },
// 	{ id: 2, title: "Cake", price: "27$", quantity: 5 },
// 	{ id: 3, title: "Creame", price: "59$", quantity: 2 },
// ]


const reducer = (state, action) => {
	switch (action.type) {

		case "increment":
			{
				const index = state.findIndex((item) => item.id === action.id)

				const product = { ...state[index] }
				product.quantity++;

				const updatedProducts = [...state]
				updatedProducts[index] = product
				return updatedProducts
			}

		case "decrement":
			{
				const index = state.findIndex((item) => item.id === action.id)

				const product = { ...state[index] }

				if (product.quantity === 1) {
					const filteredProducts = state.filter((p) => p.id !== action.id)
					return filteredProducts
				}
				else {
					const updatedProducts = [...state]
					product.quantity--;
					updatedProducts[index] = product
					return updatedProducts
				}

			}

		case "remove":
			const filteredProducts = state.filter((p) => p.id !== action.id)
			return filteredProducts


		case "filter":
			{
				const value = action.selectedOption.value
				if (value === "") {
					return ProductsData;
				} else {
					const updateAfterFilter = ProductsData.filter(
						(p) => p.availableSizes.indexOf(value) >= 0
					);
					return updateAfterFilter
				}
			}

		case "sort":
			{
				const value = action.selectedOption.value
				const products = [...state]
				if (value === "ascending") {
					const sortedProducts = _.orderBy(products, ["price"], ["asc"])
					return sortedProducts
				}
				else {
					const sortedProducts = _.orderBy(products, ["price"], ["desc"])
					return sortedProducts
				}
			}



		case "search":
			{
				const value = action.event.target.value
				if (value === "") {
					return state;
				} else {
					const filteredProducts = state.filter(
						(p) => p.title.toLowerCase().includes(value.toLowerCase())
					);
					return filteredProducts
				}
			}


		default:
			return state
	}
}


const ProductsProviderWithReducer = ({ children }) => {

	const [products, dispatch] = useReducer(reducer, ProductsData)


	return (
		<ProductContext.Provider value={products}>
			<ProductContextDispatcher.Provider value={dispatch}>
				{children}
			</ProductContextDispatcher.Provider>
		</ProductContext.Provider>
	)
}

export default ProductsProviderWithReducer;



export const useProducts = () => useContext(ProductContext);

export const useProductsActions = () => {
	return useContext(ProductContextDispatcher)

}