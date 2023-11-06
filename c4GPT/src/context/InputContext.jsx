// InputContext.js
import React, { createContext, useContext, useState } from 'react';

// Create a context
const InputContext = createContext();

// Create a custom hook for using the context
export const useInput = () => {
  return useContext(InputContext);
};

// Create a provider component
export const InputProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState('');

  const setInput = (value) => {
    setInputValue(value);
  };

  return (
    <InputContext.Provider value={{ inputValue, setInput }}>
      {children}
    </InputContext.Provider>
  );
};
