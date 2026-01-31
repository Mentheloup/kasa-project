import Home from '../pages/Home.jsx'
import About from '../pages/About.jsx'
import Error from '../pages/Error.jsx'
import Logement from '../pages/Logement.jsx'
import { createBrowserRouter } from "react-router";
import App from './App/App.jsx'

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/logement",
        element: <Logement />,
      },
      { path: "*",
        element: <Error />,
      },
    ],
  },
]);