import React from 'react'
import ReactDOM from 'react-dom/client'
import MyRouter from './utils/Router'
import './styles/style.css'
import { store } from './store/store'
import { Provider } from 'react-redux'
import Background from './medias/hr.png'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <div className="d-lg-flex half">
        <div className="bg order-1 order-md-2" style={{ backgroundImage: `url(${Background})` }}></div>
        <div className="contents order-2 order-md-1">
          <MyRouter/>
        </div>
      </div>
    </React.StrictMode>
  </Provider>
)