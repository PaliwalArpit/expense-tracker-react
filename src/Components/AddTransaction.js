import React, {useState} from "react";

export const AddTransaction = () => {

const [value, setValue] = useState("");
const [amount, setAmount] = useState(0);

  return (
    <div>
      <h3>Add new transaction</h3>
      <form>
        <div className="form-control">
          <label>Text</label>
          <input type="text" value = {value} onChange={(e)=> setValue(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label>
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input type="number" value = {amount} onChange={(e)=> setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
};
