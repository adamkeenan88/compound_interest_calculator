import React, { Component } from "react";
//will need a starting value, rate of return, and duration to see how much an investment will grow

function Compint(int, val, invest, duration) {
  const [Total, setTotal] = useState("");
  console.log(int, val, invest, duration);
  let total = 0;
  let x = val + invest;
  for (var index = 0; index < duration; index++) {
    total = x + x * int;
    console.log(total);
    x = total + invest;
  }
  return (
    <div>
      <p>{x}</p>
    </div>
  );
}

export default Compint;



<form onSubmit={Compint}>
        <input name="int" type="text" onChange={(e) => setInt(e.target.value)}>
          Interest
        </input>
        <input name="val" type="text" onChange={(e) => setVal(e.target.value)}>
          Initial Value
        </input>
        <input
          name="invest"
          type="text"
          onChange={(e) => setInvest(e.target.value)}
        >
          Annual Investment
        </input>
        <input
          name="duration"
          type="text"
          onChange={(e) => setDuration(e.target.value)}
        >
          Duration of Investment
        </input>
        <input type="submit">Calculate</input>
      </form>
      <p>{Total}</p>