import React from 'react'
import { useProducts, useProductsActions } from '../providers/ProductsProvider'
import Product from './Product'
import styles from "./ProductList.module.css"


const ProductLisFunc = () => {

	const products = useProducts()
	// const setProducts = useProductsActions()



	// const { removeHandler, incrementHandler, decrementHandler } = useProductsActions()
	// ---- for use with reducer :
	const dispatch = useProductsActions()



	if (products.length === 0)
		return <div className={styles.empty}>list is empty</div>

	return (
		<div className={styles.container}>

			{/* <Navbar totalItems={products.length} /> */}


			{products.map((product) => {
				return (
					<Product
						product={product}
						key={product.id}

						// onDelete={() => removeHandler(product.id)}
						// onIncrement={() => incrementHandler(product.id)}
						// onDecrement={() => decrementHandler(product.id)}
						// ---- for use with reducer :
						onDelete={() => dispatch({ type: "remove", id: product.id })}
						onIncrement={() => dispatch({ type: "increment", id: product.id })}
						onDecrement={() => dispatch({ type: "decrement", id: product.id })}


					/>
				)
			})}
		</div>
	)
}

export default ProductLisFunc;

