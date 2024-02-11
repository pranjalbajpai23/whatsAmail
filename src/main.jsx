import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Landing from './routes/Landing.jsx'
import Mainpage from './routes/Mainpage.jsx'
import { Provider } from 'react-redux'
import siteStore from './store/index.js'
// import { MsalProvider } from '@azure/msal-react';
// import pca from './authConfig';
const router = createBrowserRouter([{
  path:'/',
  element:<App/>,
  children:[
    {
      path:'/',
      element:<Landing/>
    },

    {
      path:'/main',
      element:<Mainpage/>
    }
  ]
}])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <MsalProvider instance={pca}> */}
      <Provider store={siteStore}>
        <RouterProvider router={router}/>
      </Provider>
    {/* </MsalProvider> */}
  </React.StrictMode>,
)
