// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HashRouter } from 'react-router-dom'
import { Context } from './Components/Context/Context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
 
    <HashRouter basename='/IPSUMcars'>
      <Context>
        <App />
      </Context>
    </HashRouter>
,
)
