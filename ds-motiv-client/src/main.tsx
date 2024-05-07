import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import ViewPage from './components/pages/viewPage.tsx'
import { ApiProvider } from './contexts/ApiContext.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App /> ,
  },
  {
    path: "/view",
    element: <ViewPage />
  }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <ApiProvider>
        <RouterProvider router={router} />
      </ApiProvider>
  </ React.StrictMode>
)
