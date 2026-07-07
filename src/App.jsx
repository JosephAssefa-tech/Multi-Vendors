import { Routes, Route } from "react-router-dom"
import Signup from "./components/SignUp"
import Home from "./components/Home"
import Cart from "./components/Cart";
import AdminLayout from "./components/Admin/Layout/AdminLayout";
import Dashboard from "./components/Admin/Pages/Dashboard";
import Products from "./components/Admin/Pages/Products";
import AddProduct from "./components/Admin/Pages/AddProduct"; 
import Orders from "./components/Admin/Pages/Orders"; 
import VendorList from "./components/Vendors/VendorList";
import RegisterVendor from "./components/Vendors/RegisterVendor";
import ProductDetail from "./components/ProductDetail";
import Categories from "./components/Admin/Pages/Categories";
import BootstrapProducts from "./components/Admin/Pages/BootstrapProducts";
import ProfileSetting from "./components/Admin/Pages/ProfileSetting";

function App() {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
         <Route path="/admin/profile" element={<ProfileSetting  />} />
      <Route path="/product/:id" element={<ProductDetail />} />

       <Route path="/admin" element={<AdminLayout />}>
    
       {/* <Route path="/admin/profile" element={<ProfileSetting  />} /> */}

        <Route path="dashboard" element={<Dashboard />} />

        <Route path="products" element={<Products />} />

        <Route path="bootstrap-products" element={<BootstrapProducts />} />

        <Route path="/admin/categories" element={<Categories />} />

        <Route path="products/add" element={<AddProduct />} />

        <Route path="orders" element={<Orders />} />

        <Route path="vendors" element={<VendorList />} />

        <Route path="vendors/register" element={<RegisterVendor />} />

        

      </Route>

      
    </Routes>
  )
}

export default App