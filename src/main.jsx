import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter } from 'react-router-dom'
import { StoreProvider } from './store/StoreContext.jsx';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <StoreProvider>
      <App />
    </StoreProvider>
    </BrowserRouter>
  </StrictMode>,
)
