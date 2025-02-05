import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './main.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
