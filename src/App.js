import React from 'react'
import Cards from './components/Cards'
import './App.css'
import Header from './components/Header'
import Categoria from './components/categoria'


function App() {
  return (
        
    <div className="App">
        <Header/>
        <Categoria/>
        <Cards />
    </div>
    
  )
}

export default App

