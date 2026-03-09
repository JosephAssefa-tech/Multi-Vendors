import { Routes, Route } from "react-router-dom"
import Signup from "./components/SignUp"
import Home from "./components/Home"
import Cart from "./components/Cart";
import AdminLayout from "./components/Admin/Layout/AdminLayout";
import Dashboard from "./components/Admin/Pages/Dashboard";
import Products from "./components/Admin/Pages/Products";
import AddProduct from "./components/Admin/Pages/AddProduct"; 
import Orders from "./components/Admin/Pages/Orders"; 

function App() {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />

       <Route path="/admin" element={<AdminLayout />}>

        <Route path="dashboard" element={<Dashboard />} />

        <Route path="products" element={<Products />} />

        <Route path="products/add" element={<AddProduct />} />

        <Route path="orders" element={<Orders />} />

      </Route>

      
    </Routes>
  )
}

export default App