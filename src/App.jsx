import { useState } from 'react'
import { createBrowserRouter,RouterProvider ,createRoutesFromElements,Route} from 'react-router-dom'

import { Layout } from './components/layout/Layout'
import { Home } from './components/home/Home'
import  ProjectDetails  from './pages/project_details/ProjectDetials'

function App() {
  const route=createBrowserRouter(
    createRoutesFromElements([
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path='/project/:id' element={<ProjectDetails />} />

        </Route>
    ])
  )   


  return (
    
    <div className="app">
         <RouterProvider router={route}/>
    </div>
  )
}

export default App
