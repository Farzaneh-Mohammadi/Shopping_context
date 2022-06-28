import React from 'react'
import { useProducts } from '../providers/ProductsProvider'
import styles from "./Navbar.module.css"


const Navbar = () => {
	const products = useProducts();
	const totalItems = products.filter((p) => p.quantity > 0).length;

	return (
		<div className={styles.navbar}>
			<h1>Shopping App</h1>
			<p className={styles.cart}>
				You have now
				<span className={styles.cartnum}>
					{totalItems}
				</span>
				products in your cart
			</p>
		</div>
	)
}

export default Navbar;
