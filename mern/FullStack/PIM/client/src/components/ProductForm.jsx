import React, {useState} from 'react'
import axios from 'axios'

const ProductForm = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

    const createProduct = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/product/new/',{
            title,
            price,
            description
        })
        .then(res=>console.log(res,"res"))
        .catch(err=>console.log(err,"err"))
        console.log({
            title,
            price,
            description
        })
    }
    
    return (
        <div>
            <h1 className='col-6 mx-auto'>Product Manager</h1>
            <form className='col-6 mx-auto'>
                <label htmlFor="title" className='form-label'>Title</label>
                <input type="text" name="title" id="title" onChange={e=>setTitle(e.target.value)} className='form-control'/>
                <label htmlFor="price" className='form-label'>Price</label>
                <input type="number" name="price" id="price" onChange={e=>setPrice(e.target.value)} className='form-control'/>
                <label htmlFor="description" className='form-label'>Description</label>
                <input type="text" name="description" id="description" onChange={e=>setDescription(e.target.value)} className='form-control'/>
                <button type="submit" className='mt-3 btn btn-primary' onClick={createProduct}>Create Product</button>
            </form>
        </div>
    )
}

export default ProductForm