import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { MyApp } from './MyApp.jsx'
import World from './World.jsx'
import { Myapp2 } from './MyApp2.jsx'
import { Sexto } from './Sexto.jsx'
import { Septimo } from './Septimo.jsx'
import { CounterApp } from './CounterApp/CounterApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CounterApp value = {29} counter = {22}>  </CounterApp>
  </StrictMode>
)
