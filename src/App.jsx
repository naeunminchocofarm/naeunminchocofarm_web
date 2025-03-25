import { BrowserRouter } from 'react-router-dom'
import Router from "./Router";
import './App.css'
import Temperature from './temperature/temperature';

function App() {
  return (
    <BrowserRouter>
      <Temperature/>
      <Router/>
    </BrowserRouter>
  )
}

export default App
