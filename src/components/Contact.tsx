import { Box, Typography, Container, Grid, TextField, Button, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const Contact = () => {
  return (
    <Box id="contact" sx={{ bgcolor: 'background.paper', py: 8 }}>
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
            Contact Us
          </Typography>
        </motion.div>

        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: '100%',
                  bgcolor: 'background.default',
                  borderRadius: 2,
                }}
              >
                <Typography variant="h5" color="primary" gutterBottom sx={{ mb: 4, fontWeight: 600 }}>
                  Get in Touch
                </Typography>
                <Box sx={{ mb: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <LocationOnIcon color="primary" sx={{ mr: 2 }} />
                    <Typography>
                      123 Bakery Street, Sweet City, SC 12345
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <PhoneIcon color="primary" sx={{ mr: 2 }} />
                    <Typography>(555) 123-4567</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <EmailIcon color="primary" sx={{ mr: 2 }} />
                    <Typography>hello@sweetdelights.com</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <AccessTimeIcon color="primary" sx={{ mr: 2 }} />
                    <Typography>
                      Mon-Sat: 8am - 8pm<br />
                      Sunday: 9am - 6pm
                    </Typography>
                  </Box>
                </Box>
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1556911220-bda9f7f7597e?q=80&w=800"
                  alt="Bakery Interior"
                  sx={{
                    width: '100%',
                    height: 300,
                    objectFit: 'cover',
                    borderRadius: 2,
                  }}
                />
              </Paper>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: '100%',
                  bgcolor: 'background.default',
                  borderRadius: 2,
                }}
              >
                <Typography variant="h5" color="primary" gutterBottom sx={{ mb: 4, fontWeight: 600 }}>
                  Send us a Message
                </Typography>
                <Box component="form" noValidate autoComplete="off">
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Name"
                        variant="outlined"
                        sx={{ mb: 2 }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Email"
                        variant="outlined"
                        sx={{ mb: 2 }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Subject"
                        variant="outlined"
                        sx={{ mb: 2 }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Message"
                        variant="outlined"
                        multiline
                        rows={4}
                        sx={{ mb: 3 }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        variant="contained"
                        size="large"
                        fullWidth
                        sx={{
                          py: 1.5,
                          bgcolor: 'primary.main',
                          '&:hover': {
                            bgcolor: 'primary.dark',
                          },
                        }}
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact; 