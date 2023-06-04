import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HelmetProvider } from 'react-helmet-async';

import {
 
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes.jsx';
import Authprovider from './providers/Authprovider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

<Authprovider>
<HelmetProvider>
  <div className='max-w-screen-xl mx-auto'>
  <RouterProvider router={router} />
  </div>
  </HelmetProvider>
</Authprovider>

  </React.StrictMode>,
)
