
import React, { useState, useEffect } from 'react';

function Effect() {
  const [text, setText] = useState('');


  const textUpdate = (e) => {
    setText(e.target.value);
  };


  useEffect(() => {
    console.log()
  }, [text]) 


  return (
    
    <div>
    <h1>useEffect</h1>
    <h2>Text<input type='text' value={text} onChange={textUpdate}></input>
    </h2></div>
  );
}

export default Effect;