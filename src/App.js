import React from 'react';
import './App.css';

import NavBar from './components/navbar'
import Banner from './components/banner'
import Cards from './components/cards'
import Footer from './components/footer'

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Banner></Banner>
      <Cards></Cards>
      <Footer></Footer>
    </div>
  );
}

export default App;
