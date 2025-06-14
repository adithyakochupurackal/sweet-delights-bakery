import { Box, Typography, Container, Grid, Card, CardContent, Avatar, Rating } from '@mui/material';
import { motion } from 'framer-motion';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Wedding Planner',
    text: "The wedding cake was absolutely stunning and tasted even better than it looked! Our guests couldn't stop raving about it.",
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200'
  },
  {
    name: 'Michael Chen',
    role: 'Regular Customer',
    text: "I've been coming here for years, and their pastries never disappoint. The croissants are the best in town!",
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Event Organizer',
    text: 'We ordered custom cupcakes for our corporate event, and they were a huge hit! The attention to detail was impressive.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200'
  }
];

const Testimonials = () => {
  return (
    <Box id="testimonials" sx={{ bgcolor: 'background.paper', py: 8 }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h4"
            component="h2"
            align="center"
            color="primary"
            gutterBottom
            sx={{ mb: 6, fontWeight: 700 }}
          >
            What Our Customers Say
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={4} key={index}>
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
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 20px rgba(0,0,0,0.1)',
                    },
                  }}
                >
                  <CardContent sx={{ flexGrow: 1, p: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                      <Avatar
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        sx={{ width: 60, height: 60, mr: 2 }}
                      />
                      <Box>
                        <Typography variant="h6" color="primary" sx={{ fontWeight: 600 }}>
                          {testimonial.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {testimonial.role}
                        </Typography>
                      </Box>
                    </Box>
                    <FormatQuoteIcon
                      sx={{
                        color: 'primary.main',
                        opacity: 0.2,
                        fontSize: 40,
                        mb: 2,
                      }}
                    />
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      paragraph
                      sx={{ mb: 2, fontStyle: 'italic' }}
                    >
                      "{testimonial.text}"
                    </Typography>
                    <Rating value={testimonial.rating} readOnly />
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

export default Testimonials; 