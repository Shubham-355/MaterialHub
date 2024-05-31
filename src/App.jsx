
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MaterialHub from './components/MaterialHub'
import Sem from './components/Sem'
import Footer from './components/footer'


function App() {
  return (
      <BrowserRouter>
        <MaterialHub />
        <Sem />
        <Footer />
      </BrowserRouter>
  )
}

export default App