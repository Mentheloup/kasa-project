import App from './App.jsx'
import About from '../pages/About.jsx'
import Error from '../pages/Error.jsx'
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
        {path:'/', element: <App />},
        {path:'/about', element: <About/>},
        {path:'*', element: <Error/>},
    ]);