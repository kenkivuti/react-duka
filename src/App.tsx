import { Routes,Route } from "react-router-dom";
import Layout from "./Component/Layout";
import HomePage from "./Pages/Home.tsx";
import Login from "./Pages/Login.tsx"; 
import Products from  "./Pages/Products.tsx";
import ProtectedRoute from "./Component/ProtectedRoute.tsx";
import Dashboard from "./Pages/Dashboard.tsx";
import Sales from "./Pages/Sales.tsx";
import Register from "./Pages/Register.tsx";
import './App.css'

function App() {
  

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/Sales" element={<Sales />} />
          </Route>
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
