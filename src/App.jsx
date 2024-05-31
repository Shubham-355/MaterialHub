
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MaterialHub from './components/MaterialHub'
import Sem from './components/Sem'

function App() {
  return (
      <BrowserRouter>
        <MaterialHub />
        <Sem />
      </BrowserRouter>
  )
}

export default App