import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

const ShowPerson = () => {
    const [data, setData] = useState("")
    const {id} = useParams();
    const url = "https://swapi.dev/api/people/"+ id

    useEffect(() => {

        setData(axios.get(url)
            .then(res => {
                return res.data
            })
            .then(res => {
                setData(res)
                console.log(data,"data")
                return data
            })
            .catch(err => {
                console.log(err)
                return err
            }))

    }, []);

    return (
        <div>
            <ul style={{ listStyle: "none" }}>
                {data.name ? <li>Name: {data.name}</li> : <></>}
                {data.created ? <li>Date Created: {data.created}</li> : <></>}
                {data.hair_color ? <li>Hair Color: {data.hair_color}</li> : <></>}
                {data.mass ? <li>Mass: {data.mass}</li> : <></>}
            </ul>
        </div>
    )
}

export default ShowPerson