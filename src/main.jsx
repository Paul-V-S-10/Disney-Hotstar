import React from 'react'
import ReactDOM from 'react-dom/client'
import { router } from './Router.jsx'
import { RouterProvider } from 'react-router-dom'
import './main.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)