import { Button } from 'bootstrap';
import './App.css';

function App() {

  const tossCoin = () => {
    return Math.random() > 0.5 ? "heads" : "tails";
  }

  const fiveHeadsSync = () => {
    return new Promise((resolve, reject) => {
      let headsCount = 0;
      let attempts = 0;
      while (headsCount < 5) {
        attempts++;
        let result = tossCoin();
        if (result === "heads") {
          headsCount++;
        } else {
          headsCount = 0;
        }
        if(headsCount === 5){
          resolve(`It took ${attempts} tries to flip five "heads"`)
        }else if(attempts>100){
          reject(`Failed to to flip five "heads" in 100 attempts`)
        }
      }
    });
  }
  

  const startExperiment = () => {
    fiveHeadsSync()
    .then(res => console.log(res))
    .catch(err => console.log(err));
    alert("Open the console to see results")
    console.log("When does this run now?");
    console.log("This probably runs before the fiveHeadsSync function completes");
  }

  return (
    <div className="App">
      <button onClick={startExperiment}>Click me to see how many attempts it takes to flip five heads</button>
    </div>
  );
}

export default App;
