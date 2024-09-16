import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClientProvider, QueryClient } from 'react-query'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
<QueryClientProvider client={new QueryClient}>
<App />
</QueryClientProvider>
  </StrictMode>,
)
