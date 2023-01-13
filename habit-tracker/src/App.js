import React, {useState, useEffect} from 'react'
import './App.css';

import Navigation from './components/Navigation'
import Character from './components/Charater';

function App() {
  return (
    <>
      <Navigation />
      <Character />
    </>
  )
}

export default App;
