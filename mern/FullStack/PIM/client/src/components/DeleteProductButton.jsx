import React from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const DeleteProductButton = (props) => {
    const navigate = useNavigate();
    
    const deleteProduct = () => {
        axios.delete(`http://localhost:8000/api/product/${props.details}/delete`)
            .then((res)=>{
                console.log(props,"props")
                props.successCallback();
                if(props.goHome){
                    navigate("/")
                }
            })
            .catch(err=>console.log(err, "error"))
    }
    return (
        <div>
            <button className='btn btn-primary mt-2' type="submit" onClick={deleteProduct} formAction="/">Delete Product</button>
        </div>
    )
}

export default DeleteProductButton