import { useEffect, useState } from 'react'
import axios from 'axios'
import { Header } from '../../components/Header'
import { ProductsGrid } from './ProductsGrid'
// import { products } from '../../data/products.js'
import './HomePage.css'
import '../index.css'

export function HomePage({ cart }) {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('/api/products').then((res) => {
            setProducts(res.data)
        })
    }, [])


    return (
        <>
            <link rel="icon" href="/images/home-favicon.png" />
            <Header cart={cart} />
            <div className="home-page">
                <ProductsGrid products={products} />
            </div>
        </>
    )
}