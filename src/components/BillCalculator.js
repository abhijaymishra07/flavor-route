import { useState } from "react";

function BillCalculator() {
  const [people, setPeople] = useState("");
  const [price, setPrice] = useState("");
  const [total, setTotal] = useState(0);

  const calculate = () => {
    if (people === "" || price === "") {
      alert("Please enter all values");
      return;
    }

    if (people <= 0 || price <= 0) {
      alert("Enter valid numbers");
      return;
    }

    let sum = 0;
    let i = 0;

    // while loop (for syllabus)
    while (i < people) {
      sum += Number(price);
      i++;
    }

    setTotal(sum);
  };

  return (
    <div className="calc">
      <h2>Group Bill Calculator 💰</h2>

      <label>Enter number of people:</label><br />
      <input
        type="number"
        placeholder=""
        value={people}
        onChange={(e) => setPeople(e.target.value)}
      />

      <br /><br />

      <label>Cost per person (₹):</label><br />
      <input
        type="number"
        placeholder=""
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <br /><br />

      <button onClick={calculate}>Calculate Total</button>

      {total > 0 && (
        <>
          <h3>Total Bill: ₹{total}</h3>
          <p>{people} × ₹{price} = ₹{total}</p>
        </>
      )}
    </div>
  );
}

export default BillCalculator;