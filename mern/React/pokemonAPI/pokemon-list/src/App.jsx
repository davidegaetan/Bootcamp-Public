import {useState} from "react";
import './App.css';


function App() {
  const [poke,setPoke] = useState([]);
  const url = 'https://pokeapi.co/api/v2/pokemon/?limit=807';
  
    const fetchPokemon =()=>{
      fetch(url)
      .then((res)=>{
        return res.json()
      })
      .then((res)=>{
        console.log(res.results);
        setPoke(res.results);
      })
      .catch((err)=> {
        return err
      })
    }

  return (
    <div className="App">
      <button className="btn btn-primary mt-2 mb-2" onClick={fetchPokemon}>Fetch em all!</button>
      {
        poke.map((pokemon,id)=> <p key={id}>{pokemon.name}</p>)
      }
    </div>
  );
}

export default App;
