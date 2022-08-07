// import logo from './logo.svg'; 
import React, {useState} from 'react'; 
import './App.css';

function App() {

  const [result, setResult] = useState("");

  const clickHandler=(event)=>{
    setResult(result.concat(event.target.value))
  }

  const clearDisplay=()=>{
    setResult("");
  }

  const calculate=()=>{
    setResult(eval(result).toString());
  }

  const del=()=>{
    setResult(result.slice(0,-1));
  }

  return (
    <div className="calc">
        <input type="text" placeholder="Calculate" id="answer" value={result}></input>
        <input type="button" value="9" className="btn" onClick={clickHandler}></input>
        <input type="button" value="8" className="btn" onClick={clickHandler}></input>
        <input type="button" value="7" className="btn" onClick={clickHandler}></input>
        <input type="button" value="6" className="btn" onClick={clickHandler}></input>
        <input type="button" value="5" className="btn" onClick={clickHandler}></input>
        <input type="button" value="4" className="btn" onClick={clickHandler}></input>
        <input type="button" value="3" className="btn" onClick={clickHandler}></input>
        <input type="button" value="2" className="btn" onClick={clickHandler}></input>
        <input type="button" value="1" className="btn" onClick={clickHandler}></input>
        <input type="button" value="0" className="btn" onClick={clickHandler}></input>
        <input type="button" value="." className="btn" onClick={clickHandler}></input>
        <input type="button" value="+" className="btn" onClick={clickHandler}></input>
        <input type="button" value="-" className="btn" onClick={clickHandler}></input>
        <input type="button" value="*" className="btn" onClick={clickHandler}></input>
        <input type="button" value="/" className="btn" onClick={clickHandler}></input>
        <input type="button" value="%" className="btn" onClick={clickHandler}></input>
        <input type="button" value="Clear" className="btn  btn1" onClick={clearDisplay}></input>
        <input type="button" value="X" className="btn" onClick={del}></input>
        <input type="button" value="=" className="btn" onClick={calculate}></input>
    </div>
  );
}

export default App;
