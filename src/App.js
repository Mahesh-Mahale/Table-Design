import React from 'react';
import './App.css';
import AddressComponent from './AddressComponent';

const App = () => {
  return (
    <div>
      <h1>Work Address</h1>
      <AddressComponent isGBAddress={true} />
      <h1>Residential Address</h1>
      <AddressComponent isGBAddress={false} />
    </div>
  );
};

export default App;

