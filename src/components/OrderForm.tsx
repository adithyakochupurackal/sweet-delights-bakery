import { Box, Typography, Container, TextField, Button } from '@mui/material';

const orderTypes = [
  'Cake',
  'Cupcake',
  'Cookie',
  'Pastry',
  'Specialty',
  'Bread',
];
const dietaryOptions = ['Gluten-Free', 'Vegan', 'Nut-Free'];

const initialState = {
  name: '',
  email: '',
  phone: '',
  orderType: '',
  quantity: '',
  date: '',
  dietary: [] as string[],
  message: '',
};

const OrderForm = () => {
  return (
    <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
      <Container maxWidth="sm">
        <Typography variant="h4" component="h2" align="center" color="primary" gutterBottom>
          Place an Order
        </Typography>
        <Box component="form" sx={{ mt: 4 }}>
          <TextField
            fullWidth
            label="Name"
            variant="outlined"
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
            required
            type="email"
          />
          <TextField
            fullWidth
            label="Phone"
            variant="outlined"
            margin="normal"
            required
            type="tel"
          />
          <TextField
            fullWidth
            label="Order Details"
            variant="outlined"
            margin="normal"
            required
            multiline
            rows={4}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Submit Order
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default OrderForm; 