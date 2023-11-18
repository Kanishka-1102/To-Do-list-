import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import CssBaseline from "@mui/material/CssBaseline";
import Todo from './todo';
function App() {
  const [count, setCount] = useState(0)

  return (
     <div>
      <CssBaseline/>
      <h1> Todo List </h1>
      <Todo/>
    </div>
  )
}

export default App
