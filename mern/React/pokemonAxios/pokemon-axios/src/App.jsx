import {useState} from "react";
import './App.css';
import axios from 'axios';


function App() {
  const [poke,setPoke] = useState([]);
  const url = 'https://pokeapi.co/api/v2/pokemon/?limit=807';
  
    const fetchPokemon =()=>{
      
      axios.get(url).then(res=>{
        return res.data.results
      })
      .then(res=>{
        setPoke(res);
      })
      .catch(err=> {
        return err
      })
    }

  return (
    <div className="App">
      <button className="btn btn-primary mt-2 mb-2" onClick={fetchPokemon}>Get em all!</button>
      {
        poke.map((pokemon,id)=> <p key={id}>{pokemon.name}</p>)
      }
    </div>
  );
}

export default App;
