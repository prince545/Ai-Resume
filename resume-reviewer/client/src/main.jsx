import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// ClerkProvider moved inside App.jsx so we can use React Router's useNavigate 
// inside Clerk if needed later, and keeps auth logic centralized.

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
