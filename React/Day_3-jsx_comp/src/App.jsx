import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
function App({children}) {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Hello</h1>
      <h2>byeee</h2>
      <h3>Vapas aoooo</h3>
      {children}
    </div>
  )
}

export default App
