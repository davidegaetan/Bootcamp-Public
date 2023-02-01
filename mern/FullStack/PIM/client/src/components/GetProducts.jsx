import React  from 'react'
import {NavLink} from 'react-router-dom'

const GetProducts = ({products}) => {
    return (
        <div>
            <h1 className='col-6 mx-auto mt-3'>All Products:</h1>
            {
                products.map((product,id) => {
                    return (<div key={product + id} className='col-6 mx-auto'> <p key={product + id} className='mt-2'>{product.title}</p><NavLink to={product._id} ><button className='btn btn-primary'>View Product Details Page</button></NavLink></div> )
                })
            }
        </div>
    )
}

export default GetProducts