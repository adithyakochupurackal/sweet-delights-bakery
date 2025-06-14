import { Box, Container, Typography, Link, Grid } from '@mui/material';
import { FaInstagram, FaFacebook, FaPinterest } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'primary.main', color: 'white', py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Emma's Home Bakery
            </Typography>
            <Typography variant="body2" paragraph>
              Creating delicious memories, one cake at a time.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Link href="#" color="inherit">
                <FaInstagram size={24} />
              </Link>
              <Link href="#" color="inherit">
                <FaFacebook size={24} />
              </Link>
              <Link href="#" color="inherit">
                <FaPinterest size={24} />
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body2" paragraph>
              Phone: (123) 456-7890
            </Typography>
            <Typography variant="body2" paragraph>
              Email: emma@homebakery.com
            </Typography>
            <Typography variant="body2">
              Address: 123 Bakery Lane, Sweetville, SV 12345
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Link href="#" color="inherit" display="block" sx={{ mb: 1 }}>
              Privacy Policy
            </Link>
            <Link href="#" color="inherit" display="block" sx={{ mb: 1 }}>
              Terms of Service
            </Link>
          </Grid>
        </Grid>
        <Box sx={{ mt: 4, pt: 2, borderTop: 1, borderColor: 'rgba(255, 255, 255, 0.1)' }}>
          <Typography variant="body2" align="center">
            © {new Date().getFullYear()} Emma's Home Bakery. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 