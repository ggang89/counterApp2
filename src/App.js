import "./App.css";
import CountContainer from "./components/countContainer/index";

function App() {
  return (
    <div>
      <header>
        <h1 className="headtitle">COUNTER</h1>
      </header>

      <div className="wrap">
        <CountContainer />
        <CountContainer />
      </div>
   
    </div>

  );
}

export default App;
