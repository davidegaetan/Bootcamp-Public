import React from 'react'


const ShowResults = ({ data }) => {
    return (
        <div>
            {
                data === {} ? <div>  </div> : <div>
                    <ul style={{listStyle: "none"}}>
                        {data.name ? <li>Name: {data.name}</li> : <></>}
                        {data.created ? <li>Date Created: {data.created}</li> : <></>}
                        {data.hair_color ? <li>Hair Color: {data.hair_color}</li> : <></>}
                        {data.mass ? <li>Mass: {data.mass}</li> : <></>}
                        {data.climate ? <li>Climate: {data.climate}</li> : <></>}
                        {data.terrain ? <li>Terrain: {data.terrain}</li> : <></>}
                        {data.title ? <li>Title: {data.title}</li> : <></>}
                        {data.producer ? <li>Producer: {data.producer}</li> : <></>}
                        {data.release_date ? <li>Release Date: {data.release_date}</li> : <></>}
                        {data.classification ? <li>Classification: {data.classification}</li> : <></>}
                        {data.average_lifespan ? <li>Average Lifespan: {data.average_lifespan}</li> : <></>}
                        {data.crew ? <li>Crew: {data.crew}</li> : <></>}
                        {data.model ? <li>Model: {data.model}</li> : <></>}
                    </ul>
                </div>
            }

        </div>
    )
}

export default ShowResults