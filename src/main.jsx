import './styles/index.css'
import App from './components/App.jsx'
import About from './pages/About.jsx'
import { router } from './components/Router.jsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>
)
