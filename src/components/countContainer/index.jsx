import {useState} from "react";


export default function CountContainer (){
  const [count,setCount] = useState(0);
  const handleMinus =()=>{
    setCount(count -1);
  }
  const handlePlus =()=>{
    setCount(count +1);
  }
  return (
    
     
      <div className="countBox">
        <button onClick={handleMinus}>-1</button>
        <p className="countText">{count}</p>
        <button onClick={handlePlus}>+1</button>
      </div>
      

   
  );
}