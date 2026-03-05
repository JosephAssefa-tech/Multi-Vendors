import React, { useState, useEffect } from "react"

import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Badge,
  Box
} from "@mui/material"
import { ShoppingCart } from "@mui/icons-material"
import ImageCarousel from "./ImageCarousel"
import { useNavigate } from "react-router-dom"
import Cards from "../elements/cards"
import {useCartStore} from "../store/cartStore"
import Cart from "../components/Cart";

function Home(){
 const navigate = useNavigate()
    const[category, setCategory] = useState("All")
    const [query, setQuery] = useState("")
    // const [cartCount, setCartCount] = useState(2)
    //  const cartCount = useCartStore((state) => state.cartCount());
const cart = useCartStore((state) => state.cart);
const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
     const categories = ["All", "Electronics", "Clothing", "Books", "Home & Kitchen","Toys", "Sports", "Beauty"]
     
     const langs = ["English", "French", "Spanish", "German", "Chinese", "Japanese"]
     const products = [
  {
    id: 1,
    title: "iPhone 15",
    description: "Latest Apple smartphone",
    price: 1200,
    image: "./src/assets/ipad2.jpg"
  },
  {
    id: 2,
    title: "Nike Shoes",
    description: "Comfortable running shoes",
    price: 150,
    image: "./src/assets/ipad.jpg"
  }
  ,
  {
    id: 3,
    title: "Nike Shoes",
    description: "Comfortable running shoes",
    price: 350,
    image: "./src/assets/ipad2.jpg"
  }
  ,
  {
    id: 4,
    title: "Nike Shoes",
    description: "Comfortable running shoes",
    price: 250,
    image: "./src/assets/ipad.jpg"
  }
  ,
  {
    id: 5,
    title: "Nike Shoes",
    description: "Comfortable running shoes",
    price: 10,
    image: "./src/assets/ipad2.jpg"
  }
  ,
  {
    id: 6,
    title: "Nike Shoes",
    description: "Comfortable running shoes",
    price: 100,
    image: "./src/assets/ipad.jpg"
  }
  ,
  {
    id: 7,
    title: "Nike Shoes",
    description: "Comfortable running shoes",
    price: 10,
    image: "./src/assets/ipad2.jpg"
  }
  ,
  {
    id: 8,
    title: "Nike Shoes",
    description: "Comfortable running shoes",
    price: 50,
    image: "./src/assets/ipad.jpg"
  }
];


const handleSignin = () => {
  navigate('/')
}
  const handleSearch = () => {
    console.log(`Searching for "${query}" in category "${category}"`)
  }
      const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };



    return(<>

<div className="w-full relative bg-green-100 z-50 relative">
  <div className="flex flex-col md:flex-row md:items-center md:justify-between px-4 py-3 gap-3">
 
    <div className="flex items-center space-x-2">
      <img src="./src/assets/logo.png" alt="multi-vendor" className="w-20 h-16 md:w-32 md:h-24 object-contain" />
      <h3 className="text-2xl font-bold">Deliver to</h3>
    </div>

    <div className="flex flex-wrap md:flex-nowrap flex-1 mx-4 gap-2">
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search products"
        className="flex-1 px-3 py-2 border-t border-b border-gray-300 focus:outline-none w-full"
      />



      <button
        onClick={handleSearch}
        className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-r-lg font-semibold"
      >
        Search
      </button>

                  <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {langs.map((lang) => (
          <option key={lang} value={lang}>{lang}</option>
        ))}
      </select>
    </div>

    <div className="flex items-center space-x-4">
      <button
      onClick={handleSignin}
        className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-lg font-semibold"
      >
        Signin
      </button>

<Badge badgeContent={cartCount} color="error">
  <ShoppingCart sx={{ fontSize: 32, cursor: "pointer" }}
   onClick={() => navigate("/Cart")} />
</Badge>
    </div>
  </div>
</div>

<div className="w-full bg-orange-100 h-full">
  <div className="flex items-center justify-between px-4 py-3">
<ImageCarousel />
  </div>
</div>

<div  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 p-1 lg:p-4 lg:gap-4">
  {products.map((product) => (
    // <Cards
    //   key={index}
    //   title={cat}
    //   description={`Browse ${cat} products`}
    //   image="./src/assets/logo.png"
    // />
    <Cards
key={product.id} product={product}
/>
  ))}
</div>
        
    </>)
}
export default Home