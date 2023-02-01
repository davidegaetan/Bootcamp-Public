import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import DeleteProductButton from './DeleteProductButton'
import axios from 'axios'

const GetProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                setProducts(res.data.Products)
            })
            .catch(err => console.log(err))
    }, [])

    const removeFromDom = productId => {
        console.log(products,"products1")
        setProducts(products.filter(product => product._id != productId))
        console.log(products,"products2")
    }

    return (
        <div>
            <h1 className='col-6 mx-auto mt-3'>All Products:</h1>
            {
                products.map((product, id) => {
                    return (<div key={product + id} className='col-6 mx-auto'> <p key={product + id} className='mt-2'>{product.title}</p><NavLink to={product._id} ><button className='btn btn-primary'>View Product Details Page</button></NavLink><DeleteProductButton details={product._id} goHome={true} successCallback={() => removeFromDom(product._id)} /></div>)
                })
            }
        </div>
    )
}

export default GetProducts