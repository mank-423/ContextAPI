import React from 'react';
import { useInput } from '../context/InputContext';

const InputSetter = () => {
  const { inputValue, setInput } = useInput();

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type something..."
      />
    </div>
  );
};

export default InputSetter;
