import { useState } from 'react'
import './App.css'
import {PropBasics} from './components/P1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    < PropBasics/>
    </>
  )
}

export default App
