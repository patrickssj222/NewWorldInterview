import React from 'react';
import logo from './logo.svg';
import './App.css';
import {StringMask} from "./component/StringMask/StringMask";

function App() {
  return (
    <div className="App">
      <StringMask input={'F3f213h82r3'}/>
    </div>
  );
}

export default App;
