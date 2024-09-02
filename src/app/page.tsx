"use client";

import React, { useState } from "react";
import { Container, Typography, Stack } from "@mui/material";
import ItemCart from "./item-cart";

export default function Home() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "iPhone 15 Pro", price: 41900, quantity: 0, image: "/iphone15pro.jpg" },
    { id: 2, name: "iPhone 15", price: 32900, quantity: 0, image: "/iphone15.jpg" },
    { id: 3, name: "iPad Pro", price: 39900, quantity: 0, image: "/ipadpro.jpg" },
    { id: 4, name: "iPad Air", price: 23900, quantity: 0, image: "/ipadair.jpg" },
    { id: 5, name: "iPad", price: 13900, quantity: 0, image: "/ipad.jpg" }, 
    { id: 6, name: "iPad mini", price: 19900, quantity: 0, image: "/ipadmini.jpg" }, 
    { id: 7, name: "Macbook Air", price: 39900, quantity: 0, image: "/macbookair.jpg" }, 
    { id: 8, name: "Macbook Pro", price: 59900, quantity: 0, image: "/macbookpro.jpg" }, 
    { id: 9, name: "iMac", price: 49900, quantity: 0, image: "/imac.jpg" }, 
    { id: 10, name: "Mac mini", price: 20900, quantity: 0, image: "/macmini.jpg" }, 
    { id: 11, name: "Mac Studio", price: 74900, quantity: 0, image: "/macstudio.jpg" }, 
    { id: 12, name: "Mac Pro", price: 249900, quantity: 0, image: "/macpro.jpg" }, 
  ]);

  const handleQuantityChange = (id: number, newQuantity: number) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (id: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Shopping Cart
      </Typography>
      <Stack spacing={2}>
        {cartItems.map(item => (
          <ItemCart
            key={item.id}
            item={item}
            onQuantityChange={handleQuantityChange}
            onRemoveItem={handleRemoveItem}
          />
        ))}
      </Stack>
      <Typography variant="h4" sx={{ mt: 4 }}>
        Total: {total.toLocaleString("th-TH")} บาท
      </Typography>
    </Container>
  );
}
