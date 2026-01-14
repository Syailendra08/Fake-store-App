import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/index.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Router Provider : pembungkus untuk memunculkan 
    element sensuai path yg diminta, router = : memberikan daftar
     routing yg ada di routes/index.jsx  */}
    <RouterProvider router={router} />
  </StrictMode>,
)
