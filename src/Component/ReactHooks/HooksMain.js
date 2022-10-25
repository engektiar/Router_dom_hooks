import React from 'react'
import { Route, Routes } from 'react-router-dom' 
import Homes from './OthersFile/Homes'
import Abouts from './OthersFile/Abouts'
import { BrowserRouter } from 'react-router-dom';
import HeaderNavbar from './HeaderNavbar';
import Contact from './OthersFile/Contact';
import Product from './OthersFile/Product';
import NextPage from './OthersFile/NextPage';
const HooksMain = () => {
  return (
    <div>
    <BrowserRouter>
    <HeaderNavbar/>
    <Routes>
    <Route path="/" element={<Homes />} />
    <Route path="/About" element={<Abouts />} />
    <Route path="/Contacts" element={<Contact />} />
    <Route path="/Products" element={<Product />} />
    <Route path="/nextpage" element={<NextPage />} />
  </Routes>
  </BrowserRouter>
    </div>
  )
}

export default HooksMain