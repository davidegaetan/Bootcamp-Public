import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const EditProduct = () => {
    const [details, setDetails] = useState({})
    const { productId } = useParams();
    const [title, setTitle] = useState(details.title);
    const [price, setPrice] = useState(details.price);
    const [description, setDescription] = useState(details.description);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${productId}`)
            .then(res => {
                setDetails(res.data.Products)
            })
            .catch(err => console.log(err))
    }, [])

    const editProduct = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/product/${productId}/edit`,{
            title,
            price,
            description
        })
        .then(res=>console.log(res))
        .catch(err=>console.log(err,"err"))
    }

    return (
        <div>
            <h1 className='col-6 mx-auto'>Edit Product</h1>
            <form className='col-6 mx-auto'>
                <label htmlFor="title" className='form-label'>Title</label>
                <input type="text" name="title" id="title" onChange={e=>setTitle(e.target.value)} className='form-control' defaultValue={details.title}/>
                <label htmlFor="price" className='form-label'>Price</label>
                <input type="number" name="price" id="price" onChange={e=>setPrice(e.target.value)} className='form-control' defaultValue={details.price}/>
                <label htmlFor="description" className='form-label'>Description</label>
                <input type="text" name="description" id="description" onChange={e=>setDescription(e.target.value)} className='form-control' defaultValue={details.description}/>
                <button type="submit" className='mt-3 btn btn-primary' onClick={editProduct}>Edit Product</button>
            </form>
        </div>
    )
}

export default EditProduct