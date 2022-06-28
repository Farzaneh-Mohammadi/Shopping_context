import React, { Component } from 'react'

import Product from './Product'
import styles from "./ProductList.module.css"


class ProductListClass extends Component {
	constructor(props) {
		super(props);

		this.state = {
			products: [
				{ id: 1, title: "Milk", price: "38$", quantity: 3 },
				{ id: 2, title: "Cake", price: "27$", quantity: 5 },
				{ id: 3, title: "Creame", price: "59$", quantity: 2 },
			]
		}
	}


	removeHandler = (id) => {
		console.log("removed id:", id);
		const filteredProducts = this.state.products.filter((p) => p.id !== id)
		this.setState({ products: filteredProducts })
	}

	incrementHandler = (id) => {

		const index = this.state.products.findIndex((item) => item.id === id)
		// console.log(index);

		const product = { ...this.state.products[index] }
		product.quantity++;

		const products = [...this.state.products]
		products[index] = product
		this.setState({ products })
	}


	decrementHandler = (id) => {
		const index = this.state.products.findIndex((item) => item.id === id)

		const product = { ...this.state.products[index] }

		if (product.quantity === 1) {
			const filteredProducts = this.state.products.filter((p) => p.id !== id)
			this.setState({ products: filteredProducts })
		}
		else {
			const products = [...this.state.products]
			product.quantity--;
			products[index] = product
			this.setState({ products })
		}

	}


	render() {
		if (this.state.products.length === 0)
			return <div>list is empty</div>

		return (
			<div className={styles.container}>

				{/* <Navbar totalItems={this.state.products.length} /> */}

				{this.state.products.map((product) => {
					return (
						<Product
							product={product}
							key={product.id}
							onDelete={() => this.removeHandler(product.id)}
							onIncrement={() => this.incrementHandler(product.id)}
							onDecrement={() => this.decrementHandler(product.id)}
						/>
					)
				})}
			</div>
		)
	}
}

export default ProductListClass

