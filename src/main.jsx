// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Context } from './Components/Context/Context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  //  <React.StrictMode>
  <BrowserRouter basename='/IPSUMcars'>
    <Context>
      <App />
    </Context>
  </BrowserRouter>
  // </React.StrictMode>
  ,
)
