import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './components/Home';
import Show from './components/Show';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <Routes> 
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/home" element={<Home/>} />
        <Route exact path="/:id" element={<Show/>}>
          <Route exact path=":textcolor" element={<Show/>}>
            <Route exact path=":bgcolor" element={<Show/>}/>
          </Route>
        </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
