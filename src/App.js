import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { APP_ROUTER } from './router';

function App() {
  return (
    <RouterProvider router={APP_ROUTER}/>
  )
}

export default App