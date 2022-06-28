import React from 'react'
import './App.css';
import FilterProducts from './components/filter/FilterProducts';
import Navbar from './components/navbar/Navbar';
import ProductListClass from './components/product/ProductListClass';
import ProductListFunc from './components/product/ProductListFunc';
import ProductsProvider from './components/providers/ProductsProvider';
import SearchBar from './layouts/search/SearchBar';
// import CountReducer from './components/reducer/CountReducer';
// 
const App = () => {

	return (
		<div className=''>
			{/* <ProductListClass /> */}
			{/* <CountReducer /> */}

			<ProductsProvider >
				<Navbar />
				{/* <SearchBar /> */}
				<FilterProducts />
				<ProductListFunc />
			</ProductsProvider>
		</div>
	)
}

export default App;