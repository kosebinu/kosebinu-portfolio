import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import KosebinuPortfolio from './KosebinuPortfolio'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <KosebinuPortfolio />
  </StrictMode>,
)
