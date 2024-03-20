import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './pages/About.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Resume from './pages/Resume.jsx'
import Contact from './pages/Contact.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1>Oops! Error occured.</h1>,
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        path: 'portfolio',
        element: < Portfolio />,
      },
      {
        path: 'contact',
        element: < Contact />
      },
      {
        path: 'resume',
        element: < Resume />,
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)

// StrictMode is for stress testing