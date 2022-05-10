import React from 'react'
import ReactDOM from 'react-dom/client'
import EnTete from "../src/composants/EnTete"
import MyRouter from './utils/Router'
import './styles/style.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="container">
      <EnTete />
      <MyRouter/>
    </div>
  </React.StrictMode>
)