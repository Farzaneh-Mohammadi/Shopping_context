import React from 'react'
import styles from "./Product.module.css"
import { FiTrash2 } from "react-icons/fi";

export default function Product(props) {
	return (
		<div className={styles.products}>

			<div  className={styles.productText}>
			<p>Product name: {props.product.title}</p>
			<p>Product price: {props.product.price}</p>
			{/* <p>discount: {props.children}</p> */}

			<span className={styles.quantityVal}> {props.product.quantity} </span>
			</div>


			<div className={styles.buttons}>
				<button onClick={props.onDecrement} className={`${styles.button}  ${props.product.quantity === 1 ? styles.remove : null}`}>
					{props.product.quantity > 1 ? "-" : <FiTrash2 />}
				</button>
				<button onClick={props.onIncrement} className={`${styles.button}  ${styles.incButton}`}> + </button>
				<button onClick={props.onDelete} className={`${styles.button}  ${styles.remove}`}> delete </button>
			</div>
		</div>
	)
}
