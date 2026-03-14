import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { TranslationProvider } from './presentation/context/TranslationContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TranslationProvider>
          <App />
    </TranslationProvider>
  </StrictMode>,
)
