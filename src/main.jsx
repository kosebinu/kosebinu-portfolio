import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NewspaperPortfolio from './NewspaperPorfolio'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NewspaperPortfolio />
  </StrictMode>,
)
