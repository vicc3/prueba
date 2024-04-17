import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Grid from './Register'
import reportWebVitals from './reportWebVitals'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Grid/>
  </React.StrictMode>,
)

reportWebVitals();