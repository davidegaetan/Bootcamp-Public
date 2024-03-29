import './App.css';
import PersonCard from './components/personCard';

function App() {
  return (
    <div className="App">
      <div className = "Container">
      <PersonCard firstName = {"David"} lastName = {"Gaetan"} age = {26} hairColor = {"Brown"} />
      <PersonCard firstName = {"David"} lastName = {"Ortega"} age = {26} hairColor = {"Brown"} />
      <PersonCard firstName = {"David"} lastName = {"Arce"} age = {26} hairColor = {"Brown"} />
      <PersonCard firstName = {"David"} lastName = {"Cardozo"} age = {26} hairColor = {"Brown"} />
      </div>
    </div>
  );
}

export default App;
