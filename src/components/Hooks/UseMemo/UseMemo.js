import React, { useState, useMemo } from 'react';

export default function UseMemo(){
  const [number, setNumber] = useState(5);

  const ExpensiveComponent = ({ num }) => {
    const expensiveCalculation = useMemo(() => {
      console.log("Calculating...");
      let result = 0;
      for (let i = 1; i <= num; i++) {
        result += i;
      }
      return result;
    }, [num]);
  
    return (
      <div>
        <p>Number: {num}</p>
        <p>Result of Expensive Calculation: {expensiveCalculation}</p>
      </div>
    );
  };

  return (
    <div>
      <ExpensiveComponent num={number} />
      <button onClick={() => setNumber(number + 1)}>Increment Number</button>
    </div>
  );
};


