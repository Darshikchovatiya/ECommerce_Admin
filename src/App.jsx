import React from 'react'
import Header from './component/Header/Header';
import { Route, Routes } from 'react-router-dom/dist';
import Add_products from './component/Add_products/Add_products';
import View_products from './component/View_products/View_products';
import Home from './component/Home/Home';
import Edit_products from './component/Edit_products/Edit_products';



function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add_product' element={<Add_products />} />
        <Route path='/view_product' element={<View_products />} />
        <Route path='/edit_product' element={<Edit_products />} />
      </Routes>
    </>
  )
}

export default App;