import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './routes/route.tsx'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from './provider/theme-provider.tsx'

createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
  </ThemeProvider>
)
