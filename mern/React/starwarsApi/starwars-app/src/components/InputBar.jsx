import React, {useEffect, useState} from 'react'
import axios from "axios";


const InputBar = ({newUrl}) => {
    const [options, setOptions] = useState([])
    const [id, setId] = useState("")
    const [option, setOption] = useState("")

    useEffect(() => {
        axios.get("https://swapi.dev/api/")
        .then((res) => {
            return (Object.keys(res.data));
        })
        .then(res => {
            setOptions(res)  
            return options
        })
    },[]);

    const createApiCall = (e) =>
    {
        e.preventDefault()
        if(id && option){
            const url = "https://swapi.dev/api/" + option + "/" + id
            newUrl(url)
        }
    }
    
    return (
        <div>
            <form>
                <label>Search for: </label>
                <select  onChange={(e)=>setOption(e.target.value)}>
                    <option value="">Pick an option</option>
                    {
                        options.map((option,id) => {
                            return <option  key={option} value={option}>{option}</option>
                        })
                    }
                </select>
                <label>Id: </label>
                <input type="text" onChange={(e)=>setId(e.target.value)} />
                <button onClick={createApiCall} >Search</button>
            </form>
        </div>
    )
}

export default InputBar