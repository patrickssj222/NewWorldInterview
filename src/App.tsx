import React, { useState } from 'react';
import './App.css';
import { StringMask } from "./component/StringMask/StringMask";
import { NumberWeight } from "./component/NumberWeight/NumberWeight";
import { RomanNumeral } from "./component/RomanNumeral/RomanNumeral";

function App() {
  const [stringMaskInput, setStringMaskInput] = useState<string>('')
  const [numberWeightInput, setNumberWeightInput] = useState<string>('')
  const [romanInput, setRomanInput] = useState<string>('')
  return (
    <div className='App'>
      <h1>New World Inc. Interview Exercise - Yun Hao</h1>
      <div className={'main-wrapper'}>
        <div className={'question-wrapper'}>
          <text className={'title-text'}>Exercise #1</text>
          <text className={'description-text'}>
            Create a function that will taken in a random string and mask the last 4 numbers using asterisk (*).
          </text>
          <div className={'input-wrapper'}>
            <text>Enter a string</text>
            <input
              type={'text'}
              name={'string mask input'}
              value={stringMaskInput}
              onChange={(event)=>setStringMaskInput(event.target.value)}
            />
          </div>
          Sample Input: F3f213h82r3
          <StringMask input={stringMaskInput}/>
        </div>
        <div className={'question-wrapper'}>
          <text className={'title-text'}>Exercise #2</text>
          <text className={'description-text'}>
            You are provided a string containing a list of positive integers separated by a space (" ").
            Take each value and calculate the sum of its digits, which we call it's "weight". Then return
            the list in ascending order by weight, as a string joined by a space.
          </text>
          <div className={'input-wrapper'}>
            <text>Enter a string</text>
            <input
              type={'text'}
              name={'number weight input'}
              value={numberWeightInput}
              onChange={(event)=>setNumberWeightInput(event.target.value)}
            />
          </div>
          Sample Input: 56 65 74 100 99 68 86 180 90
          <NumberWeight input={numberWeightInput}/>
        </div>
        <div className={'question-wrapper'}>
          <text className={'title-text'}>Exercise #3</text>
          <text className={'description-text'}>
            Create a function that takes a Roman numeral as its argument and returns its value as a
            numeric decimal integer. You need to validate the form of the Roman numeral.
          </text>
          <div className={'input-wrapper'}>
            <text>Enter a roman numeral</text>
            <input
              type={'text'}
              name={'roman numeral input'}
              value={romanInput}
              onChange={(event)=>setRomanInput(event.target.value)}
            />
          </div>
          Sample Input: MDCLXVI
          <RomanNumeral input={romanInput}/>
        </div>
      </div>
    </div>
  );
}

export default App;
