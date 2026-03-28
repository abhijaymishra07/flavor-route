import { useState } from "react";

function BillCalculator() {
  const [people, setPeople] = useState("");
  const [price, setPrice] = useState("");
  const [total, setTotal] = useState(0);

  const calculate = () => {
    if (!people || !price) return alert("Enter values");

    let sum = 0;
    let i = 0;

    while (i < people) {
      sum += Number(price);
      i++;
    }

    setTotal(sum);
  };

  return (
    <div className="calc">
      <h2>Bill Calculator</h2>

      <input placeholder="People" onChange={(e) => setPeople(e.target.value)} />
      <input placeholder="Cost per person" onChange={(e) => setPrice(e.target.value)} />

      <button onClick={calculate}>Calculate</button>

      {total > 0 && (
        <>
          <h3>Total ₹{total}</h3>
          <p>Per person ₹{total / people}</p>
        </>
      )}
    </div>
  );
}

export default BillCalculator;