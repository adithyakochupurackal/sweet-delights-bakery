import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { Cake as CakeIcon } from '@mui/icons-material';

const Hero = () => {
  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, rgba(24,26,27,0.95) 0%, rgba(24,26,27,0.85) 100%)',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(0,255,240,0.1) 0%, rgba(255,0,200,0.1) 100%)',
          zIndex: 1,
        },
      }}
    >
      {/* Animated background elements */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflow: 'hidden',
          zIndex: 0,
        }}
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              background: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.1)`,
              borderRadius: '50%',
              filter: 'blur(20px)',
            }}
            animate={{
              x: [Math.random() * 1000, Math.random() * 1000],
              y: [Math.random() * 1000, Math.random() * 1000],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </Box>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '3rem', md: '4.5rem' },
                  fontWeight: 900,
                  mb: 2,
                  background: 'linear-gradient(90deg, #00FFF0 0%, #FF00C8 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 0 20px rgba(0,255,240,0.3)',
                }}
              >
                Artisanal
                <br />
                Bakery
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  mb: 4,
                  color: 'text.secondary',
                  fontWeight: 500,
                  letterSpacing: '0.05em',
                }}
              >
                Crafting Sweet Memories
                <br />
                Since 2010
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="contained"
                    size="large"
                    startIcon={<CakeIcon />}
                    sx={{
                      px: 4,
                      py: 1.5,
                      fontSize: '1.1rem',
                      background: 'linear-gradient(90deg, #00FFF0 0%, #FF00C8 100%)',
                      boxShadow: '0 0 20px rgba(0,255,240,0.3)',
                      '&:hover': {
                        background: 'linear-gradient(90deg, #00FFF0 0%, #FF00C8 100%)',
                        boxShadow: '0 0 30px rgba(0,255,240,0.5)',
                      },
                    }}
                  >
                    Order Now
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{
                      px: 4,
                      py: 1.5,
                      fontSize: '1.1rem',
                      border: '2px solid #00FFF0',
                      color: '#00FFF0',
                      '&:hover': {
                        border: '2px solid #FF00C8',
                        color: '#FF00C8',
                        boxShadow: '0 0 20px rgba(255,0,200,0.3)',
                      },
                    }}
                  >
                    View Menu
                  </Button>
                </motion.div>
              </Box>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                minHeight: '400px',
              }}
            >
              <Box
                component="img"
                src="/hero-cake.jpg"
                alt="Artisanal Cake"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '32px',
                  boxShadow: '0 0 40px rgba(0,255,240,0.2)',
                  border: '2px solid rgba(0,255,240,0.1)',
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(135deg, rgba(0,255,240,0.1) 0%, rgba(255,0,200,0.1) 100%)',
                  borderRadius: '32px',
                  backdropFilter: 'blur(5px)',
                }}
              />
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero; 