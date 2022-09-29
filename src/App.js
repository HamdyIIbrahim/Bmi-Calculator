import { useState } from "react";
import "./App.css";

function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmiCalc,setBmiCalc]=useState('');
  const [message,setMessage]=useState('');
  

  const handleSubmit = (e) => {
    e.preventDefault();
    let bmiCalc =(weight / (height * height) *703);
    setBmiCalc(bmiCalc.toFixed(1));
    if(bmiCalc < 25){
      setMessage('You are skinny')
      
    }else if(bmiCalc >=25 && bmiCalc<30){
      setMessage('You are prefect and healthy')
    }else{
      setMessage('You are fat')
    }
  };

  const handleReset=()=>{
    window.location.reload();
  }

  let image;
  if(bmiCalc <1){
    image=require("../src/assets/Avatar_Thinking_6-512.webp");
  }else{
    if(bmiCalc < 2.5){
      image = require("../src/assets/skinny.png")
    }else if(bmiCalc >=2.5 && bmiCalc<3){
      image = require("../src/assets/normal.jpg")
    }else{
      image = require("../src/assets/fat.png")
    }
  }

  return (
    <div className="app">
      <div className="container">
        <h2>Bmi calculator</h2>
        <form onSubmit={handleSubmit}>
          <div className="dataInp">
            <div className="left side">
              <label>Weight :</label>
              <input
                className="data"
                type="text"
                placeholder="enter your weight..."
                value={weight}
                onChange={(e)=>setWeight(e.target.value)}
              ></input>
            </div>
            <div className="right side">
              <label>Height :</label>
              <input
                className="data"
                type="text"
                placeholder="enter your height..."
                value={height}
                onChange={(e)=>setHeight(e.target.value)}
              ></input>
            </div>
          </div>
          <div className="btns">
            <button
              className="btn btn_first"
              type="submit"
            >
              Submit
            </button>
            <button className="btn btn_second" onClick={handleReset}>Reset</button>
          </div>
        </form>
        <div className="showRes">
          <h2>Your Bmi : {bmiCalc}</h2>
          <p>{message}</p>
          <div className="image">
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
