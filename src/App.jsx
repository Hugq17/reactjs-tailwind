import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <iframe 
        width="1183" 
        height="674" 
        src="https://www.youtube.com/embed/fRb8Ch6cN_w?list=RDLdd-f7u1nhU" 
        title="LỜI CÓ CÁNH - OSAD | RUNG ĐỘNG EP (Official M/V)" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen>
      </iframe>
    </>
  )
}

export default App
