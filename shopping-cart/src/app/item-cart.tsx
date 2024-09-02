"use client";

import React from "react";
import { Card, CardContent, CardMedia, Typography, Stack, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";

export default function ItemCart({
  item,
  onQuantityChange,
  onRemoveItem
}: {
  item: { id: number, name: string, price: number, quantity: number, image: string };
  onQuantityChange: (id: number, newQuantity: number) => void;
  onRemoveItem: (id: number) => void;
}) {
  const handleAddClick = () => {
    onQuantityChange(item.id, item.quantity + 1);
  };

  const handleRemoveClick = () => {
    onQuantityChange(item.id, item.quantity - 1);
  };

  return (
    <Card>
      <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
        <CardMedia
          component="img"
          image={item.image}
          alt={item.name}
          sx={{ width: 150, height: 150, objectFit: "cover" }}
        />
        <CardContent sx={{ flex: 1 }}>
          <Typography variant="h6">{item.name}</Typography>
          <Typography variant="body2" color="text.secondary">
            {item.price.toLocaleString("th-TH")} บาท
          </Typography>
          <Stack direction="row" alignItems="center" spacing={1} mt={2}>
            <IconButton onClick={handleRemoveClick} disabled={item.quantity <= 0}>
              <RemoveIcon />
            </IconButton>
            <Typography>{item.quantity}</Typography>
            <IconButton onClick={handleAddClick}>
              <AddIcon />
            </IconButton>
            <IconButton onClick={() => onRemoveItem(item.id)} sx={{ ml: 2 }}>
              <DeleteIcon />
            </IconButton>
            <Typography sx={{ ml: "auto" }}>
              {(item.price * item.quantity).toLocaleString("th-TH")} บาท
            </Typography>
          </Stack>
        </CardContent>
      </Stack>
    </Card>
  );
}
