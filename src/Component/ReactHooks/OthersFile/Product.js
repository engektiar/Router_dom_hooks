import React from 'react'
import {  Link, Route, Routes } from 'react-router-dom'
import Homes from './Homes'
import NextPage from './NextPage'

const Product = () => {
  return (
    <div>
   
    <h3>This is product Parts </h3>
    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) </p>
    
    <button><Link to={"/nextpage"}> Next page </Link></button>
    <button><Link to={"/homepage"}>Home  page </Link></button>


//   <Routes>
//  <Route path='/'exact element={<Product/>}/>
//  <Route path="/homepage" exact element={<Homes/>}/>
//  <Route path="/nextpage" exact element={<NextPage/>}/>
  
// </Routes>
    </div>
  )
}

export default Product