import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Child } from './componets/Child'

function App() {
  const [count, setCount] = useState(0)
  const [text,setText]=useState("")

  const handleClick =()=>{
    console.log("A")
  }

  return (
 <>
   <h1>count:{count=0}</h1>
   <button onClick={()=>setCount(count+1)}>Increment</button>
   <input
    type="text"
    value={text}
    onChange={(e)=>setText(e.target.value)}
    />
    <p>{text}</p>

    <Child fun={handleClick}/>
 </>
  )
}

export default App
