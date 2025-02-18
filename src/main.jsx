import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { MyApp } from './MyApp.jsx'
import World from './World.jsx'
import { Myapp2 } from './MyApp2.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <World></World>
    <MyApp></MyApp>
    <Myapp2></Myapp2>
  </StrictMode>,
)
