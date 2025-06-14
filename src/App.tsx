import { useState } from 'react';
import { Box, CssBaseline, ThemeProvider, Dialog } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import theme from './theme';
import Navbar from './components/Navbar';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import { CartProvider } from './context/CartContext';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <CartProvider>
          <CssBaseline />
          <Box
            sx={{
              minHeight: '100vh',
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: 'url("/images/background.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.15,
                zIndex: -2,
              },
              '&::after': {
                content: '""',
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)',
                zIndex: -1,
              },
            }}
          >
            <Navbar onCartClick={() => setIsCartOpen(true)} />
            <About />
            <Menu />
            <Gallery />
            <Testimonials />
            <Contact />
            <Footer />
            
            <Cart 
              open={isCartOpen} 
              onClose={() => setIsCartOpen(false)}
              onCheckout={() => {
                setIsCartOpen(false);
                setIsCheckoutOpen(true);
              }}
            />
            
            <Dialog
              open={isCheckoutOpen}
              onClose={() => setIsCheckoutOpen(false)}
              maxWidth="md"
              fullWidth
            >
              <Checkout onClose={() => setIsCheckoutOpen(false)} />
            </Dialog>
          </Box>
        </CartProvider>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
