import React from 'react';
import { InputProvider } from './context/InputContext';
import InputSetter from './components/InputSetter';
import InputDisplay from './components/InputDisplay';

function App() {
  return (
    <InputProvider>
      <div>
        <InputSetter />
        <InputDisplay />
      </div>
    </InputProvider>
  );
}

export default App;
