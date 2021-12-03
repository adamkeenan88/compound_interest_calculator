import { useState } from "react";
// import Compint from "./Components/comp_int_calc";

function App() {
  const [Int, setInt] = useState(0);
  const [Val, setVal] = useState(0);
  const [Invest, setInvest] = useState(0);
  const [Duration, setDuration] = useState(0);
  const [Total, setTotal] = useState(0);

  const Compint = (e) => {
    e.preventDefault();
    console.log(Int, Val, Invest, Duration);
    let total = 0;
    let x = Number(Val);
    let i = 0;
    while (i < Duration) {
      total = Number(x) + Number(x) * Number(Int / 100);
      console.log(total);
      x = total + Number(Invest);
      setTotal(x);
      i++;
    }
    return Total;
  };

  return (
    <div className="App">
      <form onSubmit={Compint}>
        <input
          name="int"
          type="text"
          placeholder="interest rate"
          onChange={(e) => setInt(e.target.value)}
        />
        <input
          name="val"
          type="number"
          placeholder="starting value"
          onChange={(e) => setVal(e.target.value)}
        />
        <input
          name="invest"
          type="number"
          placeholder="annual investment"
          onChange={(e) => setInvest(e.target.value)}
        />
        <input
          name="duration"
          type="number"
          placeholder="duration of investment"
          onChange={(e) => setDuration(e.target.value)}
        />
        <input type="submit" />
      </form>
      <p>Total: {Total.toFixed(2)}</p>
      {/* <div>
        <Compint int={int} val={val} invest={invest} duration={duration} />
      </div> */}
    </div>
  );
}

export default App;
