import { Routes, Route } from "react-router-dom"
import Signup from "./components/SignUp"
import Home from "./components/Home"
import Cart from "./components/Cart";
import Admin from "./components/Admin/Admin";

function App() {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  )
}

export default App