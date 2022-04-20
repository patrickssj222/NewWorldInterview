import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {StringMask} from "./component/StringMask/StringMask";

function App() {
  const [stringMaskInput, setStringMaskInput] = useState<string>('')
  return (
    <div className="App">
      <input
        type={'text'}
        name={'string mask input'}
        value={stringMaskInput}
        onChange={(event)=>setStringMaskInput(event.target.value)}
      />
      <StringMask input={stringMaskInput}/>
      Sample Input: F3f213h82r3
    </div>
  );
}

export default App;
