import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { StrictMode } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/Root';
import Home from './routes/Home';
import About from './routes/About';
import Work from './routes/Work';
import Contact from './routes/Contact';
import Projects from './routes/Projects';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />
  },
  {
    path: "/home",
    element:<Home />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/work",
    element: <Work />
  },
  { path: "/projects",
    element: <Projects />
  },
  {
    path: "/contact",
    element: <Contact /> 
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
  <RouterProvider router={router} />
</StrictMode>
);
