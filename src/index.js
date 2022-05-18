import React from 'react'
import ReactDOM from 'react-dom/client'
import MyRouter from './utils/Router'
import './styles/bootstrap.min.css'
import './styles/style.css'
import { store } from './store/store'
import { Provider } from 'react-redux'
// Background picture infos
// The .avif format is available on all plateforms but needs to be activated in prefs in some older browsers.
// Size comparisons :
//    PNG  : 3.3 MB (Lighthouse doesn't like it !)
//    WebP : 2.2 MB
//    Avif :   193 KB
import Background from './medias/hr2.avif' 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <div className="d-lg-flex half">
        <div className="bg order-1 order-md-2" style={{ backgroundImage: `url(${Background})`}}></div>
        <div className="contents order-2 order-md-1">
          <MyRouter/>
        </div>
      </div>
    </React.StrictMode>
  </Provider>
)