import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const GetOneProduct = () => {
    const [details, setDetails] = useState({})
    const { productId } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${productId}`)
            .then(res => {
                setDetails(res.data.Products)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div className='d-flex flex-column justify-content-center'>
            <div>{details.title}</div>
            <div>Description: {details.description}</div>
            <div>Price: {details.price}</div>
        </div>
    )
}

export default GetOneProduct