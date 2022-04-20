import React, {useState} from 'react';
import './App.css';
import {StringMask} from "./component/StringMask/StringMask";
import {NumberWeight} from "./component/NumberWeight/NumberWeight";
import {RomanNumeral} from "./component/RomanNumeral/RomanNumeral";

function App() {
  const [stringMaskInput, setStringMaskInput] = useState<string>('')
  const [numberWeightInput, setNumberWeightInput] = useState<string>('')
  const [romanInput, setRomanInput] = useState<string>('')
  return (
    <div className="App">
      <div>
        <div>
          <input
            type={'text'}
            name={'string mask input'}
            value={stringMaskInput}
            onChange={(event)=>setStringMaskInput(event.target.value)}
          />
          <StringMask input={stringMaskInput}/>
          Sample Input: F3f213h82r3
        </div>
        <div>
          <input
            type={'text'}
            name={'number weight input'}
            value={numberWeightInput}
            onChange={(event)=>setNumberWeightInput(event.target.value)}
          />
          <NumberWeight input={numberWeightInput}/>
          Sample Input: 56 65 74 100 99 68 86 180 90
        </div>
        <div>
          <input
            type={'text'}
            name={'roman numeral input'}
            value={romanInput}
            onChange={(event)=>setRomanInput(event.target.value)}
          />
          <RomanNumeral input={romanInput}/>
          Sample Input: MDCLXVI
        </div>
      </div>
    </div>
  );
}

export default App;
