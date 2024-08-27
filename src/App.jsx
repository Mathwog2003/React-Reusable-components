import { useState } from 'react'

import './App.css'
import CopyText from './Components/CopyText/CopyText'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h5 className="mt-1">meta-llama/<span className="fw-bold">Meta-Llama-3.1-8B-Instruct</span>
        <CopyText text='Meta-Llama-3.1-8B-Instruct' />

      </h5>
    </>
  )
}

export default App
