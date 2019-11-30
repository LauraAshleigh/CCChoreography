import React from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import NavigationBar from './Navigation/NavigationBar'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavigationBar />
      </div>
    </BrowserRouter>
  )
}

export default App;
