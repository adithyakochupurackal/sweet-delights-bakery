import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import CakeIcon from '@mui/icons-material/Cake';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import BrushIcon from '@mui/icons-material/Brush';

const features = [
  {
    icon: <CakeIcon sx={{ fontSize: 40 }} />,
    title: 'Handcrafted Excellence',
    description: 'Each cake is meticulously crafted by our expert bakers using only the finest ingredients.',
  },
  {
    icon: <FavoriteIcon sx={{ fontSize: 40 }} />,
    title: 'Made with Love',
    description: 'We pour our passion into every creation, ensuring each cake is made with care and attention.',
  },
  {
    icon: <EmojiEventsIcon sx={{ fontSize: 40 }} />,
    title: 'Award-Winning Recipes',
    description: 'Our signature recipes have won numerous awards and delighted countless customers.',
  },
  {
    icon: <BrushIcon sx={{ fontSize: 40 }} />,
    title: 'Custom Designs',
    description: 'Transform your vision into reality with our custom cake design service.',
  },
];

const About = () => {
  return (
    <Box
      sx={{
        py: 8,
        background: 'linear-gradient(135deg, #F7F7F7 0%, #FFFFFF 100%)',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h2"
            component="h2"
            align="center"
            gutterBottom
            sx={{
              fontWeight: 700,
              color: '#333',
              mb: 2,
              textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
            }}
          >
            Our Story
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            sx={{ mb: 6, maxWidth: '800px', mx: 'auto' }}
          >
            Crafting sweet memories since 2010, we blend traditional baking techniques with innovative designs to create unforgettable experiences.
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: 2,
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      color: 'primary.main',
                      mb: 2,
                      p: 1,
                      borderRadius: '50%',
                      background: 'rgba(255, 107, 107, 0.1)',
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    component="h3"
                    gutterBottom
                    sx={{ fontWeight: 600, color: '#333' }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ lineHeight: 1.6 }}
                  >
                    {feature.description}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default About; 