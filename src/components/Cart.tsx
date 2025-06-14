import React from 'react';
import {
  Box,
  Drawer,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Button,
  Divider,
  TextField,
} from '@mui/material';
import {
  Close as CloseIcon,
  Add as AddIcon,
  Remove as RemoveIcon,
  Delete as DeleteIcon,
} from '@mui/icons-material';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';

interface CartProps {
  open: boolean;
  onClose: () => void;
  onCheckout: () => void;
}

const Cart: React.FC<CartProps> = ({ open, onClose, onCheckout }) => {
  const { items, removeFromCart, updateQuantity, total } = useCart();

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: { xs: '100%', sm: 400 },
          bgcolor: 'background.paper',
          boxShadow: '0 0 20px rgba(0,0,0,0.1)',
        },
      }}
    >
      <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography variant="h6" component="h2" sx={{ fontWeight: 600 }}>
          Your Cart
        </Typography>
        <IconButton onClick={onClose} color="primary">
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />
      <List sx={{ p: 2, flex: 1, overflow: 'auto' }}>
        {items.length === 0 ? (
          <Typography variant="body1" sx={{ textAlign: 'center', py: 4, color: 'text.secondary' }}>
            Your cart is empty
          </Typography>
        ) : (
          items.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <ListItem
                sx={{
                  mb: 2,
                  bgcolor: 'background.default',
                  borderRadius: 2,
                  '&:hover': {
                    bgcolor: 'action.hover',
                  },
                }}
              >
                <ListItemAvatar>
                  <Avatar
                    src={item.image}
                    alt={item.name}
                    variant="rounded"
                    sx={{ width: 60, height: 60, mr: 2 }}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={item.name}
                  secondary={`$${item.price.toFixed(2)}`}
                  primaryTypographyProps={{ fontWeight: 600 }}
                />
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <IconButton
                    size="small"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    <RemoveIcon />
                  </IconButton>
                  <TextField
                    value={item.quantity}
                    onChange={(e) => {
                      const value = parseInt(e.target.value);
                      if (!isNaN(value)) {
                        updateQuantity(item.id, value);
                      }
                    }}
                    type="number"
                    size="small"
                    sx={{ width: 60 }}
                    inputProps={{ min: 1, style: { textAlign: 'center' } }}
                  />
                  <IconButton
                    size="small"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    <AddIcon />
                  </IconButton>
                  <IconButton
                    size="small"
                    color="error"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Box>
              </ListItem>
            </motion.div>
          ))
        )}
      </List>
      <Box sx={{ p: 2, bgcolor: 'background.paper', borderTop: 1, borderColor: 'divider' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <Typography variant="h6">Total:</Typography>
          <Typography variant="h6" color="primary">
            ${total.toFixed(2)}
          </Typography>
        </Box>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          size="large"
          onClick={onCheckout}
          disabled={items.length === 0}
          sx={{
            borderRadius: 2,
            py: 1.5,
            fontWeight: 600,
          }}
        >
          Proceed to Checkout
        </Button>
      </Box>
    </Drawer>
  );
};

export default Cart; 