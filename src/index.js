import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import store from './store'
import Loader from './components/loader/Loader'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <React.StrictMode>
      <BrowserRouter>
         <Provider store={store}>
            <Suspense fallback={<Loader />}>
               <App />
            </Suspense>
         </Provider>
      </BrowserRouter>
   </React.StrictMode>
)
