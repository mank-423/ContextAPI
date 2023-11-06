import React from 'react';
import { useInput } from '../context/InputContext';

const InputDisplay = () => {
  const { inputValue } = useInput();

  return (
    <div>
      <h2>Input Value:</h2>
      <p>{inputValue}</p>
    </div>
  );
};

export default InputDisplay;
