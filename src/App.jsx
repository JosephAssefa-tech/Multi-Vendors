import { Routes, Route } from "react-router-dom"
import Signup from "./components/SignUp"
import Home from "./components/Home"
import Cart from "./components/Cart";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/home" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  )
}

export default App