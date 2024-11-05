import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
 
import './index.css'; 
import App from './App.jsx'

// When the project is deployed on the server, the index.html file is loaded first. 
// Then, it invokes main.jsx, which serves as the entry point of the application.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
