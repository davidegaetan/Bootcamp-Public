import './App.css';
import { useState } from 'react';
import InputBar from './components/InputBar';
import ShowResults from './components/ShowResults';
import axios from "axios";
import ShowErr from './components/ShowErr';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ShowPerson from './components/ShowPerson';

function App() {
  const [data, setData] = useState({});
  const [err, setErr] = useState("");

  const newUrl = (url) => {
    setErr("")
    //setUrl(url)
    setData(axios.get(url)
      .then(res => {
        return res.data
      })
      .then(res => {
        setData(res)
        return data
      })
      .catch(err => {console.log(err)
        setErr(err)
        return err
  }))
  }
    ;

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<InputBar newUrl={(url) => newUrl(url)} />}/>
        <Route exact path="/:id" element={<ShowPerson/>}/>
      </Routes>
      <ShowResults data={data} />
      {
        err ? <ShowErr err={err}/> : <></>
      }
      </BrowserRouter>
    </div>
  );
}

export default App;
