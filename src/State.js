import React, { useState } from 'react';

function State() {
  const [number, setNumber] = useState(0);

	
  const onIncrease = () => {
    setNumber(number + 1);
  }
	
  return (
    <div>
      <h1>useState</h1>
      <h2>Total{number}</h2>
      <button onClick={onIncrease}>Increase</button>
      
    </div>
  );
}

export default State;