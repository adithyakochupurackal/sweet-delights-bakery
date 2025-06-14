import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  IconButton,
  useTheme,
  useMediaQuery,
  Snackbar,
  Alert,
} from '@mui/material';
import { ShoppingCart as CartIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';

const categories = [
  { name: 'Cakes', key: 'cakes' },
  { name: 'Cupcakes', key: 'cupcakes' },
  { name: 'Cookies', key: 'cookies' },
  { name: 'Pastries', key: 'pastries' },
  { name: 'Specialty', key: 'specialty' },
  { name: 'Bread', key: 'bread' },
];

const dietaryOptions = ['Gluten-Free', 'Vegan'];

const products = [
  {
    name: 'Red Velvet Cake',
    category: 'cakes',
    description: 'Classic red velvet with cream cheese frosting.',
    price: 'Starting at $30',
    image: 'https://images.unsplash.com/photo-1505250469679-203ad9ced0cb?auto=format&fit=crop&w=400&q=80',
    dietary: [],
  },
  {
    name: 'Vegan Chocolate Cupcakes',
    category: 'cupcakes',
    description: 'Rich chocolate cupcakes, 100% vegan.',
    price: 'Starting at $18/dozen',
    image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80',
    dietary: ['Vegan'],
  },
  {
    name: 'Gluten-Free Sugar Cookies',
    category: 'cookies',
    description: 'Decorated sugar cookies, gluten-free and delicious.',
    price: 'Starting at $15/dozen',
    image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80',
    dietary: ['Gluten-Free'],
  },
  {
    name: 'Croissants',
    category: 'pastries',
    description: 'Flaky, buttery croissants made fresh daily.',
    price: 'Starting at $12/half dozen',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
    dietary: [],
  },
  {
    name: 'Keto Brownies',
    category: 'specialty',
    description: 'Low-carb, keto-friendly chocolate brownies.',
    price: 'Starting at $20/dozen',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
    dietary: [],
  },
  {
    name: 'Sourdough Bread',
    category: 'bread',
    description: 'Artisan sourdough with a crisp crust and chewy crumb.',
    price: 'Starting at $8/loaf',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
    dietary: [],
  },
  // Add more products as needed
];

const menuItems = [
  {
    id: 1,
    name: 'Classic Chocolate Cake',
    description: 'Rich chocolate layers with ganache frosting',
    price: 45.99,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hvY29sYXRlJTIwY2FrZXxlbnwwfHwwfHx8MA%3D%3D',
    category: 'Cakes',
  },
  {
    id: 2,
    name: 'Red Velvet Cake',
    description: 'Classic red velvet with cream cheese frosting',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVkJTIwdmVsdmV0JTIwY2FrZXxlbnwwfHwwfHx8MA%3D%3D',
    category: 'Cakes',
  },
  {
    id: 3,
    name: 'Carrot Cake',
    description: 'Spiced carrot cake with walnuts and cream cheese frosting',
    price: 42.99,
    image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fycm90JTIwY2FrZXxlbnwwfHwwfHx8MA%3D%3D',
    category: 'Cakes',
  },
  {
    id: 4,
    name: 'Tiramisu',
    description: 'Classic Italian dessert with coffee-soaked ladyfingers',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGlyYW1pc3V8ZW58MHx8MHx8fDA%3D',
    category: 'Desserts',
  },
  {
    id: 5,
    name: 'Cheesecake',
    description: 'New York style cheesecake with berry compote',
    price: 44.99,
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlZXNlY2FrZXxlbnwwfHwwfHx8MA%3D%3D',
    category: 'Desserts',
  },
  {
    id: 6,
    name: 'Macarons Box',
    description: 'Assorted French macarons in a gift box',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjYXJvbnN8ZW58MHx8MHx8fDA%3D',
    category: 'Desserts',
  },
];

const Menu: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { addToCart } = useCart();
  const [snackbar, setSnackbar] = useState({ open: false, message: '' });

  const handleAddToCart = (item: typeof menuItems[0]) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
    });
    setSnackbar({
      open: true,
      message: `${item.name} added to cart!`,
    });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Box
      id="menu"
      sx={{
        py: 8,
        background: 'linear-gradient(180deg, #F7F7F7 0%, #FFFFFF 100%)',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h2"
            component="h2"
            align="center"
            sx={{
              mb: 1,
              fontWeight: 700,
              background: 'linear-gradient(45deg, #FF6B6B 30%, #4ECDC4 90%)',
              backgroundClip: 'text',
              textFillColor: 'transparent',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Our Menu
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            sx={{ mb: 6 }}
          >
            Discover our delicious selection of cakes and desserts
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {menuItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 4,
                    overflow: 'hidden',
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 24px rgba(0,0,0,0.1)',
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="240"
                    image={item.image}
                    alt={item.name}
                    sx={{
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'scale(1.05)',
                      },
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h3"
                      sx={{ fontWeight: 600 }}
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 2 }}
                    >
                      {item.description}
                    </Typography>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        mt: 'auto',
                      }}
                    >
                      <Typography
                        variant="h6"
                        color="primary"
                        sx={{ fontWeight: 600 }}
                      >
                        ${item.price.toFixed(2)}
                      </Typography>
                      <Button
                        variant="contained"
                        color="primary"
                        startIcon={<CartIcon />}
                        onClick={() => handleAddToCart(item)}
                        sx={{
                          borderRadius: 2,
                          px: 2,
                          py: 1,
                          fontWeight: 600,
                        }}
                      >
                        Add to Cart
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Menu; 