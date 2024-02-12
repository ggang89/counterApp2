import "./App.css";
import {useState} from "react";

function App() {

  const [count,setCount] = useState(0);
  const handleMinus =()=>{
    setCount(count -1);
  }
  const handlePlus =()=>{
    setCount(count +1);
  }
  return (
    <div>
      <h1 className="headtitle">COUNTER</h1>

      <div className="countBox">
        <button onClick={handleMinus}>-1</button>
        <p className="countText">{count}</p>
        <button onClick={handlePlus}>+1</button>
      </div>
      

    </div>
  );
}

export default App;
