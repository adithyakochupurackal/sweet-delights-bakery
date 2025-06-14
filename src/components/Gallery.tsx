import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Chip } from '@mui/material';
import { motion } from 'framer-motion';

const galleryImages = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&auto=format&fit=crop&q=60',
    title: 'Wedding Cake',
    description: 'Elegant three-tier wedding cake with floral decorations',
    category: 'Wedding',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1551106652-a5bcf4b29ab6?w=800&auto=format&fit=crop&q=60',
    title: 'Birthday Special',
    description: 'Colorful birthday cake with custom decorations',
    category: 'Birthday',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&auto=format&fit=crop&q=60',
    title: 'Chocolate Delight',
    description: 'Rich chocolate cake with ganache and berries',
    category: 'Chocolate',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1562440499-64c9a111f713?w=800&auto=format&fit=crop&q=60',
    title: 'Cupcake Collection',
    description: 'Assorted cupcakes with various flavors and toppings',
    category: 'Cupcakes',
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800&auto=format&fit=crop&q=60',
    title: 'Pastry Selection',
    description: 'Freshly baked pastries and croissants',
    category: 'Pastries',
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&auto=format&fit=crop&q=60',
    title: 'Custom Design',
    description: 'Bespoke cake design for special occasions',
    category: 'Custom',
  },
];

const Gallery = () => {
  return (
    <Box
      id="gallery"
      sx={{
        py: 12,
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #F7F7F7 0%, #FFFFFF 100%)',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(255,107,107,0.05) 0%, rgba(78,205,196,0.05) 100%)',
          zIndex: 1,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            align="center"
            sx={{
              mb: 2,
              color: 'primary.main',
              fontWeight: 700,
            }}
          >
            Our Gallery
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            sx={{
              mb: 8,
              color: 'text.secondary',
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            Explore our collection of beautifully crafted cakes and pastries
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {galleryImages.map((image, index) => (
            <Grid item xs={12} sm={6} md={4} key={image.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                    },
                  }}
                >
                  <Box sx={{ position: 'relative' }}>
                    <CardMedia
                      component="img"
                      height="240"
                      image={image.url}
                      alt={image.title}
                      sx={{
                        objectFit: 'cover',
                      }}
                    />
                    <Chip
                      label={image.category}
                      size="small"
                      sx={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        background: 'rgba(255,255,255,0.9)',
                        backdropFilter: 'blur(4px)',
                        fontWeight: 600,
                      }}
                    />
                  </Box>
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      sx={{
                        color: 'primary.main',
                        fontWeight: 600,
                        mb: 1,
                      }}
                    >
                      {image.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 2, minHeight: '40px' }}
                    >
                      {image.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Gallery; 