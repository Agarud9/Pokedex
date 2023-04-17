import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createHashRouter} from "react-router-dom"
import './index.css';
import Index from './routes/Index';
import PokemonDetailed from './routes/PokemonDetails';
import About from './routes/About';
import Header from './components/Header';
import Root from './routes/Root';

const router = createHashRouter([
  {
      path: "/",
      element: <Root/>,
      children: [
        {
          path: "/",
          element: <Index />,
      },
      {
          path: "/about",
          element: <About />,
      },
      {
        path: "/pokemon/:id",
        element: <PokemonDetailed />,
      }
  ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

