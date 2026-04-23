import React, { useState } from "react";
// import { useProductStore } from "../store/ProductStore";

import { fetchCategories } from "../services/ProductApi";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../services/ProductApi";
import {
  Box,
  Button,
  Select,
  MenuItem,
  Badge,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  ListItemIcon,
  Divider
} from "@mui/material";
import { ShoppingCart, Menu as MenuIcon } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import Cards from "../elements/cards";
import { useCartStore } from "../store/cartStore";
import ImageCarousel from "./ImageCarousel";
import Footer from "../components/Footer/Footer";
import {
  Inventory,
  Category,
  LocalOffer,
  Person,
  Favorite,
  Settings,
  SupportAgent
} from "@mui/icons-material";
import { Home as HomeIcon } from "@mui/icons-material";
import { useEffect } from "react";


function Home() {
  const navigate = useNavigate();


  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false); 

  const cart = useCartStore((state) => state.cart);
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const langs = ["English", "French", "Spanish", "German", "Chinese", "Japanese"];

    const { data: products, isLoading, error } = useQuery({
  queryKey: ["products"],
  queryFn: fetchProducts
    });

const { data: categories, isLoading: catLoading, error: catError } = useQuery({
  queryKey: ["categories"],
  queryFn: fetchCategories
});



  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
<Box sx={{ width: 260 }} onClick={handleDrawerToggle}>

    {/* <Typography sx={{ p: 2, fontWeight: "bold" }}>
      Main
    </Typography> */}

    <List>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            {/* <Home /> */}
            </ListItemIcon>
          {/* <ListItemText primary="Home" /> */}
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon><Inventory /></ListItemIcon>
          <ListItemText primary="All Products" />
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon><Category /></ListItemIcon>
          <ListItemText primary="Categories" />
        </ListItemButton>
      </ListItem>
    </List>

    <Divider />

    <Typography sx={{ p: 2, fontWeight: "bold" }}>
      Shopping
    </Typography>

    <List>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon><ShoppingCart /></ListItemIcon>
          <ListItemText primary="Cart" />
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon><Favorite /></ListItemIcon>
          <ListItemText primary="Wishlist" />
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon><LocalOffer /></ListItemIcon>
          <ListItemText primary="Deals & Offers" />
        </ListItemButton>
      </ListItem>
    </List>

    <Divider />

    <Typography sx={{ p: 2, fontWeight: "bold" }}>
      Account
    </Typography>

    <List>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon><Person /></ListItemIcon>
          <ListItemText primary="My Account" />
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon><SupportAgent /></ListItemIcon>
          <ListItemText primary="Customer Service" />
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon><Settings /></ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItemButton>
      </ListItem>
    </List>

  </Box>

  );


  const handleSignin = () => navigate("/signup");
  const handleSearch = async () => {
    const res = await fetch(`https://dummyjson.com/products/search?q=${query}`);
    const data = await res.json();

    useProductStore.setState({ products: data.products });
   
  };

  return (
    <Box className="flex flex-col lg:flex-row">
    
      <Drawer
        variant={{ xs: "temporary", lg: "permanent" }}
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          "& .MuiDrawer-paper": {
            width: 250,
            boxSizing: "border-box",
          },
        }}
      >
        {drawer}
      </Drawer>


      <Box className="flex-1">
     
<Box className="w-full relative bg-green-100 z-50">
  <div className="flex flex-col md:flex-row md:items-center md:justify-between px-4 py-3 gap-4">

    <div className="flex items-center justify-between md:justify-start w-full md:w-auto">
      <div className="flex items-center space-x-2">
        <IconButton color="inherit" edge="start" onClick={handleDrawerToggle}>
          <MenuIcon />
        </IconButton>

        <img
          src="./src/assets/logo.png"
          alt="multi-vendor"
          className="w-20 h-16 md:w-32 md:h-24 object-contain"
        />

        <h3 className="text-lg md:text-2xl font-bold hidden sm:block">
          Deliver to
        </h3>
      </div>
    </div>


    <div className="flex flex-col md:flex-row w-full md:flex-1 gap-2">

<Select
  value={category}
  onChange={(e) => setCategory(e.target.value)}
  className="w-full md:w-40"
>
  {catLoading && <MenuItem disabled>Loading...</MenuItem>}

  {catError && <MenuItem disabled>Error loading categories</MenuItem>}

  {categories?.map((cat) => (
    <MenuItem key={cat.slug} value={cat.slug}>
      {cat.name}
    </MenuItem>
  ))}
</Select>

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search products"
        className="flex-1 px-3 py-2 border border-gray-300 rounded w-full"
      />

      <Button
        onClick={handleSearch}
        sx={{
          backgroundColor: "#facc15",
          color: "#000",
          px: 3,
          py: 1,
          "&:hover": { backgroundColor: "#eab308" },
        }}
        className="w-full md:w-auto"
      >
        Search
      </Button>

      <Select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full md:w-32"
      >
        {langs.map((lang) => (
          <MenuItem key={lang} value={lang}>
            {lang}
          </MenuItem>
        ))}
      </Select>

    </div>


    <div className="flex flex-col md:flex-row items-center gap-3 w-full md:w-auto">

      <Button
        onClick={handleSignin}
        sx={{
          backgroundColor: "#facc15",
          color: "#000",
          px: 4,
          py: 1,
          "&:hover": { backgroundColor: "#eab308" },
        }}
        className="w-full md:w-auto"
      >
        Signin
      </Button>

      <Badge badgeContent={cartCount} color="error">
        <ShoppingCart
          sx={{ fontSize: 32, cursor: "pointer" }}
          onClick={() => navigate("/Cart")}
        />
      </Badge>

    </div>

  </div>
</Box>

    
        <Box className="w-full bg-orange-100">
          <ImageCarousel />
        </Box>

   
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">

  {isLoading && <h2>Loading products...</h2>}

  {error && <h2>Something went wrong</h2>}

  {products?.map((product) => (
    <Cards key={product.id} product={product} />
  ))}

</div>

        <Footer />
      </Box>
    </Box>
  );
}

export default Home;