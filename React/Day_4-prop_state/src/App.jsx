import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  
  let [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count is - {count}</h1>

      <button onClick={() => {
        setCount(count + 1);
      }}>Increment</button>
    </div>
  )
}

export default App
