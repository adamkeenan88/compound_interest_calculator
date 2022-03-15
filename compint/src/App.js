import { useState } from "react";
import "bulma/css/bulma.min.css";
import "./App.css";
// import Compint from "./Components/comp_int_calc";

function App() {
  const [Int, setInt] = useState(0);
  const [Val, setVal] = useState(0);
  const [Invest, setInvest] = useState(0);
  const [Duration, setDuration] = useState(0);
  const [Total, setTotal] = useState(0);
  const [Expenses, setExpenses] = useState(0);

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

  const FIRECalc = (e) => {
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
      <div id="wrapper">
        <div>
          <h1>Compound Interest Calculator</h1>
        </div>
        <form onSubmit={Compint}>
          <div>
            <p>
              Interest Rate:{" "}
              <span>
                <input
                  name="int"
                  type="text"
                  placeholder="interest rate"
                  onChange={(e) => setInt(e.target.value)}
                ></input>
              </span>
            </p>
          </div>
          <div>
            <p>
              Starting Value:{" "}
              <span>
                <input
                  name="val"
                  type="number"
                  placeholder="starting value"
                  onChange={(e) => setVal(e.target.value)}
                />
              </span>
            </p>
          </div>
          <div>
            <p>
              Annual Investment:{" "}
              <span>
                <input
                  name="invest"
                  type="number"
                  placeholder="annual investment"
                  onChange={(e) => setInvest(e.target.value)}
                />
              </span>
            </p>
          </div>
          <div>
            <p>
              Years of Investment:{" "}
              <span>
                <input
                  name="duration"
                  type="number"
                  placeholder="duration of investment"
                  onChange={(e) => setDuration(e.target.value)}
                />
              </span>
            </p>
          </div>
          <input type="submit" value="Calculate" />
          <input type="reset" value="Reset Fields" />
        </form>
        <div>
          <p>
            Total: $
            {Total.toLocaleString(undefined, { maximumFractionDigits: 2 })}
          </p>
        </div>
      </div>
      <div id="wrapper">
        <div>
          <h1>FI/RE Calculator</h1>
        </div>
        <form onSubmit={FIRECalc}>
          <div>
            <p>
              Expected Annual Expenses:{" "}
              <span>
                <input
                  name="expenses"
                  type="text"
                  placeholder="Expected Annual Expenses"
                  onChange={(e) => setExpenses(e.target.value)}
                />
              </span>
            </p>
          </div>
          <p>FI/RE Number: ${(Expenses * 25).toLocaleString()}</p>
          {/* <div>
            <p>
              Current Investment Value:{" "}
              <span>
                <input
                  name="val"
                  type="number"
                  value={Val}
                  placeholder="starting value"
                  onChange={(e) => setVal(e.target.value)}
                />
              </span>
            </p>
          </div> */}
          {/* <div>
            <input
              name="invest"
              type="number"
              placeholder="annual investment"
              onChange={(e) => setInvest(e.target.value)}
            />
          </div>
          <div>
            <input
              name="duration"
              type="number"
              placeholder="duration of investment"
              onChange={(e) => setDuration(e.target.value)}
            />
          </div>
          <input type="submit" value="Calculate" />
          <input type="reset" value="Reset Fields" /> */}
        </form>
        {/* <div>
          <p>Total: ${Total.toFixed(2)}</p>
        </div> */}
      </div>
    </div>
  );
}

export default App;
