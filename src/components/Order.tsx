import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  Snackbar,
  Alert,
  SelectChangeEvent,
} from '@mui/material';
import { motion } from 'framer-motion';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

interface FormData {
  name: string;
  email: string;
  phone: string;
  cakeType: string;
  cakeSize: string;
  deliveryDate: Date | null;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  cakeType?: string;
  cakeSize?: string;
  deliveryDate?: string;
}

const cakeTypes = [
  'Wedding Cake',
  'Birthday Cake',
  'Anniversary Cake',
  'Custom Design',
  'Cupcakes',
  'Cookies',
  'Pastries',
];

const cakeSizes = [
  '6" Round (6-8 servings)',
  '8" Round (10-12 servings)',
  '10" Round (16-20 servings)',
  '12" Round (24-30 servings)',
  'Sheet Cake (24-48 servings)',
  'Custom Size',
];

const Order = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    cakeType: '',
    cakeSize: '',
    deliveryDate: null,
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name as string]: value,
    }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name as string]: undefined,
      }));
    }
  };

  const handleDateChange = (date: Date | null) => {
    setFormData(prev => ({
      ...prev,
      deliveryDate: date,
    }));
    if (errors.deliveryDate) {
      setErrors(prev => ({
        ...prev,
        deliveryDate: undefined,
      }));
    }
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.cakeType) newErrors.cakeType = 'Please select a cake type';
    if (!formData.cakeSize) newErrors.cakeSize = 'Please select a cake size';
    if (!formData.deliveryDate) newErrors.deliveryDate = 'Please select a delivery date';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Here you would typically send the order to your backend
      console.log('Order submitted:', formData);
      setSnackbar({
        open: true,
        message: 'Order submitted successfully! We will contact you shortly.',
        severity: 'success',
      });
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        cakeType: '',
        cakeSize: '',
        deliveryDate: null,
        message: '',
      });
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  return (
    <Box id="order" sx={{ bgcolor: 'background.paper', py: 8 }}>
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
            Place Your Order
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
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
                  Order Information
                </Typography>
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        error={!!errors.name}
                        helperText={errors.name}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '&:hover fieldset': {
                              borderColor: 'primary.main',
                            },
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        error={!!errors.email}
                        helperText={errors.email}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '&:hover fieldset': {
                              borderColor: 'primary.main',
                            },
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        error={!!errors.phone}
                        helperText={errors.phone}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '&:hover fieldset': {
                              borderColor: 'primary.main',
                            },
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth error={!!errors.cakeType}>
                        <InputLabel>Cake Type</InputLabel>
                        <Select
                          name="cakeType"
                          value={formData.cakeType}
                          onChange={handleChange}
                          label="Cake Type"
                        >
                          {cakeTypes.map((type) => (
                            <MenuItem key={type} value={type}>
                              {type}
                            </MenuItem>
                          ))}
                        </Select>
                        {errors.cakeType && <FormHelperText>{errors.cakeType}</FormHelperText>}
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth error={!!errors.cakeSize}>
                        <InputLabel>Cake Size</InputLabel>
                        <Select
                          name="cakeSize"
                          value={formData.cakeSize}
                          onChange={handleChange}
                          label="Cake Size"
                        >
                          {cakeSizes.map((size) => (
                            <MenuItem key={size} value={size}>
                              {size}
                            </MenuItem>
                          ))}
                        </Select>
                        {errors.cakeSize && <FormHelperText>{errors.cakeSize}</FormHelperText>}
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                          label="Delivery Date"
                          value={formData.deliveryDate}
                          onChange={handleDateChange}
                          slotProps={{
                            textField: {
                              fullWidth: true,
                              error: !!errors.deliveryDate,
                              helperText: errors.deliveryDate,
                            },
                          }}
                        />
                      </LocalizationProvider>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Special Instructions"
                        name="message"
                        multiline
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '&:hover fieldset': {
                              borderColor: 'primary.main',
                            },
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        fullWidth
                        sx={{
                          py: 1.5,
                          background: 'linear-gradient(45deg, #FF6B6B 30%, #4ECDC4 90%)',
                          color: 'white',
                          '&:hover': {
                            background: 'linear-gradient(45deg, #FF5252 30%, #45B7AF 90%)',
                          },
                        }}
                      >
                        Place Order
                      </Button>
                    </Grid>
                  </Grid>
                </form>
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
                  Ordering Information
                </Typography>
                <Box sx={{ mb: 4 }}>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    How to Order
                  </Typography>
                  <Typography paragraph>
                    1. Fill out the order form with your details and preferences
                  </Typography>
                  <Typography paragraph>
                    2. Select your desired cake type and size
                  </Typography>
                  <Typography paragraph>
                    3. Choose your preferred delivery date
                  </Typography>
                  <Typography paragraph>
                    4. Add any special instructions or dietary requirements
                  </Typography>
                  <Typography paragraph>
                    5. Submit your order and we'll contact you to confirm
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    Important Notes
                  </Typography>
                  <Typography paragraph>
                    • Please place orders at least 48 hours in advance
                  </Typography>
                  <Typography paragraph>
                    • Custom designs may require additional consultation
                  </Typography>
                  <Typography paragraph>
                    • We accommodate dietary restrictions and allergies
                  </Typography>
                  <Typography paragraph>
                    • Delivery is available within our service area
                  </Typography>
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Order;
