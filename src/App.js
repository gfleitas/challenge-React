import React from 'react';
import './App.css';

import NavBar from './components/navbar'
import Banner from './components/banner'
import Cards from './components/cards'

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Banner></Banner>
      <Cards></Cards>
    </div>
  );
}

export default App;
