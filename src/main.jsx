import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store/index.js'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { LoginProvider } from './Context/LoginProvider.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoginProvider>
    <BrowserRouter basename='/crisp-shop/'>
    <Provider store={store}>
      <App />
    </Provider>
    </BrowserRouter>
    </LoginProvider>
  </StrictMode>,
)
