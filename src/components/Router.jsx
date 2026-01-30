import Home from '../pages/Home.jsx'
import About from '../pages/About.jsx'
import Error from '../pages/Error.jsx'
import Logement from '../pages/Logement.jsx'
import { createBrowserRouter } from "react-router";
import App from './App.jsx'

// export const router = createBrowserRouter([
//         {path:'/', element: <Home />},
//         {path:'/about', element: <About/>},
//         {path:'*', element: <Error/>},
//         {path:'/logement', element: <Logement/>},
//     ]);

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
        path: "/logement/:id",
        element: <Logement />,
      },
      { path: "*",
        element: <Error />,
      },
    ],
  },
]);