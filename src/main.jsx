import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import PokeProvider from './Context/PokeContext.jsx'
import PikaProvider from './Context/PikachuContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <PokeProvider>
        <PikaProvider>
          <App />
        </PikaProvider>
      </PokeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
