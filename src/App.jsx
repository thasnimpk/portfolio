import { useState } from 'react'
import './App.css'
import Layoutroutes from './Routes/Layoutroutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Layoutroutes/>
    </>
  )
}

export default App
