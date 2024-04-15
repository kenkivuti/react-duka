import { Routes,Route } from "react-router-dom";
import Layout from "./Component/Layout";
import HomePage from "./Pages/index.tsx";
import Login from "./Pages/Login.tsx"; 
import ProductList from  "./Pages/Product.tsx";

import './App.css'

function App() {
  

  return (
    <>
    <Routes>
     <Route path="/Login" element={<Login/>} />

      <Route element={<Layout/>}>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/Product" element={<ProductList/>}/>
      </Route>


    </Routes>
   
    </>
  )
}

export default App
