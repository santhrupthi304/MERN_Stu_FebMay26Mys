import { useState } from 'react'
import './App.css'
import { FunctionName } from './components/FunctionalCompOne'
import { FunctionalComponentsBasics } from './components/FunctionalComponentsBasics'
import { ClassComponentBasics } from './components/ClassComponentsBasics'
import { FunctionalComp } from './components/FunctionalComponentsAdv'

function App() {
  return (
    // Fragment in react: <> </>
    <>
    {/* Component name */}
     {/* <FunctionName />   */}
    {/* < FunctionalComponentsBasics /> */}
    {/* < ClassComponentBasics/>  */}
    < FunctionalComp/>
    </>
  )
}

export default App
