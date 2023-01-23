import { useParams } from 'react-router-dom'

const Show = () => {
    const { id } = useParams();
    const { textcolor } = useParams();
    const { bgcolor } = useParams();

    const myStyle = {
        color: textcolor,
        backgroundColor: bgcolor
    }
    console.log(myStyle)
    return (
        <>
            {
                isNaN(id) ? <div style={myStyle}>Showing Word {id} </div> : <div>Showing Number {id}</div>
            }
        </>
    )
}

export default Show