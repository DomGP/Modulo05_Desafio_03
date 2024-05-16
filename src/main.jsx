import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import PokeProvider from './Context/PokeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <PokeProvider>
        <App />
      </PokeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
