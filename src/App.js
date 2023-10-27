import logo from './logo.svg';
import './App.css';
import TwoWayDataBinding from './components/TwoWayDataBinding';
import { useState } from 'react';
import Billboard from './components/Billboard';

function App() {
  return (
    <div className="App">
      
      <TwoWayDataBinding />

      <br /><hr/>
      <Billboard />
    </div>
  );
}

export default App;
