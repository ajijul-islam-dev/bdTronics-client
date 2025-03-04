import React from 'react'
import {Routes,Route} from 'react-router'
import Layout from './Layouts/Layout.jsx'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import ProductDetails from './Pages/ProductDetails.jsx'
import DashboardLayout from './Layouts/DashboardLayout.jsx'
import DashboardHome from './Pages/Dashboard/DashboardHome.jsx'
import Setting from './Pages/Dashboard/Setting.jsx'

const App = () => {
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>} />
        <Route path='product/:id' element={<ProductDetails/>}/>
      </Route>
      <Route path='dashboard' element={<DashboardLayout/>}>
        <Route index element={<DashboardHome/>}/>
        <Route path='setting' element={<Setting/>}/>
      </Route>
      <Route path='*' element={<div>Error</div>}/>
    </Routes>
  )
}

export default App