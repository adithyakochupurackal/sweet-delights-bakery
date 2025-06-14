import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Alert,
  CircularProgress,
  Divider,
  Tabs,
  Tab,
  Card,
  CardContent,
  InputAdornment,
  IconButton,
} from '@mui/material';
import {
  CreditCard as CreditCardIcon,
  AccountBalance as BankIcon,
  PhoneAndroid as UpiIcon,
  AccountBalanceWallet as WalletIcon,
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
} from '@mui/icons-material';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`payment-tabpanel-${index}`}
      aria-labelledby={`payment-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ 
          p: 3,
          bgcolor: 'white',
          borderRadius: 2,
          boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
        }}>
          {children}
        </Box>
      )}
    </div>
  );
}

interface CheckoutProps {
  onClose: () => void;
}

const steps = ['Shipping', 'Payment', 'Confirmation'];

const Checkout: React.FC<CheckoutProps> = ({ onClose }) => {
  const { items, total, clearCart } = useCart();
  const [activeStep, setActiveStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [paymentTab, setPaymentTab] = useState(0);
  const [showPassword, setShowPassword] = useState(false);

  const [shippingData, setShippingData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    phone: '',
  });

  const [cardData, setCardData] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
  });

  const [upiData, setUpiData] = useState({
    upiId: '',
  });

  const [netBankingData, setNetBankingData] = useState({
    bank: '',
    accountNumber: '',
    ifscCode: '',
  });

  const [walletData, setWalletData] = useState({
    walletType: '',
    mobileNumber: '',
  });

  const handlePaymentTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setPaymentTab(newValue);
  };

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setActiveStep(1);
  };

  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Simulate successful payment
      setSuccess(true);
      setActiveStep(2);
      clearCart();
    } catch (err) {
      setError('Payment failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const renderStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onSubmit={handleShippingSubmit}
          >
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="First Name"
                  value={shippingData.firstName}
                  onChange={(e) => setShippingData({ ...shippingData, firstName: e.target.value })}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      bgcolor: 'white',
                      '&:hover fieldset': {
                        borderColor: '#D2B48C', // Tan color for hover
                      },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Last Name"
                  value={shippingData.lastName}
                  onChange={(e) => setShippingData({ ...shippingData, lastName: e.target.value })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Email"
                  type="email"
                  value={shippingData.email}
                  onChange={(e) => setShippingData({ ...shippingData, email: e.target.value })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Address"
                  value={shippingData.address}
                  onChange={(e) => setShippingData({ ...shippingData, address: e.target.value })}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="City"
                  value={shippingData.city}
                  onChange={(e) => setShippingData({ ...shippingData, city: e.target.value })}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="State"
                  value={shippingData.state}
                  onChange={(e) => setShippingData({ ...shippingData, state: e.target.value })}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="ZIP Code"
                  value={shippingData.zipCode}
                  onChange={(e) => setShippingData({ ...shippingData, zipCode: e.target.value })}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Phone"
                  value={shippingData.phone}
                  onChange={(e) => setShippingData({ ...shippingData, phone: e.target.value })}
                />
              </Grid>
            </Grid>
            <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                sx={{ 
                  borderRadius: 2, 
                  px: 4,
                  bgcolor: '#D2B48C', // Tan color
                  '&:hover': {
                    bgcolor: '#C4A484', // Darker tan on hover
                  }
                }}
              >
                Continue to Payment
              </Button>
            </Box>
          </motion.form>
        );

      case 1:
        return (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onSubmit={handlePaymentSubmit}
          >
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs
                value={paymentTab}
                onChange={handlePaymentTabChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="payment methods"
              >
                <Tab icon={<CreditCardIcon />} label="Credit/Debit Card" />
                <Tab icon={<UpiIcon />} label="UPI" />
                <Tab icon={<BankIcon />} label="Net Banking" />
                <Tab icon={<WalletIcon />} label="Wallets" />
              </Tabs>
            </Box>

            <TabPanel value={paymentTab} index={0}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Card Number"
                    value={cardData.cardNumber}
                    onChange={(e) => setCardData({ ...cardData, cardNumber: e.target.value })}
                    placeholder="1234 5678 9012 3456"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Name on Card"
                    value={cardData.cardName}
                    onChange={(e) => setCardData({ ...cardData, cardName: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Expiry Date"
                    value={cardData.expiryDate}
                    onChange={(e) => setCardData({ ...cardData, expiryDate: e.target.value })}
                    placeholder="MM/YY"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="CVV"
                    type={showPassword ? 'text' : 'password'}
                    value={cardData.cvv}
                    onChange={(e) => setCardData({ ...cardData, cvv: e.target.value })}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => setShowPassword(!showPassword)}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              </Grid>
            </TabPanel>

            <TabPanel value={paymentTab} index={1}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="UPI ID"
                    value={upiData.upiId}
                    onChange={(e) => setUpiData({ ...upiData, upiId: e.target.value })}
                    placeholder="example@upi"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                    Popular UPI Apps:
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
                    <Card sx={{ 
                      width: 80, 
                      height: 80, 
                      cursor: 'pointer',
                      bgcolor: 'white',
                      '&:hover': {
                        transform: 'scale(1.05)',
                        transition: 'transform 0.2s ease-in-out'
                      }
                    }}>
                      <CardContent sx={{ p: 1, '&:last-child': { pb: 1 } }}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Google_Pay_Logo.svg/1200px-Google_Pay_Logo.svg.png" alt="Google Pay" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                      </CardContent>
                    </Card>
                    <Card sx={{ 
                      width: 80, 
                      height: 80, 
                      cursor: 'pointer',
                      bgcolor: 'white',
                      '&:hover': {
                        transform: 'scale(1.05)',
                        transition: 'transform 0.2s ease-in-out'
                      }
                    }}>
                      <CardContent sx={{ p: 1, '&:last-child': { pb: 1 } }}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/PhonePe_Logo.svg/1200px-PhonePe_Logo.svg.png" alt="PhonePe" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                      </CardContent>
                    </Card>
                    <Card sx={{ 
                      width: 80, 
                      height: 80, 
                      cursor: 'pointer',
                      bgcolor: 'white',
                      '&:hover': {
                        transform: 'scale(1.05)',
                        transition: 'transform 0.2s ease-in-out'
                      }
                    }}>
                      <CardContent sx={{ p: 1, '&:last-child': { pb: 1 } }}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Paytm_Logo_%28standalone%29.svg/1200px-Paytm_Logo_%28standalone%29.svg.png" alt="Paytm" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                      </CardContent>
                    </Card>
                  </Box>
                </Grid>
              </Grid>
            </TabPanel>

            <TabPanel value={paymentTab} index={2}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    select
                    label="Select Bank"
                    value={netBankingData.bank}
                    onChange={(e) => setNetBankingData({ ...netBankingData, bank: e.target.value })}
                    SelectProps={{
                      native: true,
                    }}
                  >
                    <option value="">Select a bank</option>
                    <option value="hdfc">HDFC Bank</option>
                    <option value="icici">ICICI Bank</option>
                    <option value="sbi">State Bank of India</option>
                    <option value="axis">Axis Bank</option>
                    <option value="kotak">Kotak Mahindra Bank</option>
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Account Number"
                    value={netBankingData.accountNumber}
                    onChange={(e) => setNetBankingData({ ...netBankingData, accountNumber: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="IFSC Code"
                    value={netBankingData.ifscCode}
                    onChange={(e) => setNetBankingData({ ...netBankingData, ifscCode: e.target.value })}
                  />
                </Grid>
              </Grid>
            </TabPanel>

            <TabPanel value={paymentTab} index={3}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    select
                    label="Select Wallet"
                    value={walletData.walletType}
                    onChange={(e) => setWalletData({ ...walletData, walletType: e.target.value })}
                    SelectProps={{
                      native: true,
                    }}
                  >
                    <option value="">Select a wallet</option>
                    <option value="paytm">Paytm</option>
                    <option value="amazon">Amazon Pay</option>
                    <option value="mobikwik">MobiKwik</option>
                    <option value="freecharge">Freecharge</option>
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Mobile Number"
                    value={walletData.mobileNumber}
                    onChange={(e) => setWalletData({ ...walletData, mobileNumber: e.target.value })}
                  />
                </Grid>
              </Grid>
            </TabPanel>

            {error && (
              <Alert severity="error" sx={{ mt: 2 }}>
                {error}
              </Alert>
            )}

            <Box sx={{ mt: 3, display: 'flex', justifyContent: 'space-between' }}>
              <Button
                variant="outlined"
                onClick={() => setActiveStep(0)}
                sx={{ 
                  borderRadius: 2,
                  borderColor: '#D2B48C',
                  color: '#D2B48C',
                  '&:hover': {
                    borderColor: '#C4A484',
                    bgcolor: 'rgba(210, 180, 140, 0.1)',
                  }
                }}
              >
                Back
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                disabled={loading}
                sx={{ 
                  borderRadius: 2, 
                  px: 4,
                  bgcolor: '#D2B48C',
                  '&:hover': {
                    bgcolor: '#C4A484',
                  }
                }}
              >
                {loading ? <CircularProgress size={24} /> : 'Complete Payment'}
              </Button>
            </Box>
          </motion.form>
        );

      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Box sx={{ textAlign: 'center', py: 4 }}>
              <Typography variant="h4" color="primary" gutterBottom>
                Thank You for Your Order!
              </Typography>
              <Typography variant="body1" sx={{ mb: 4 }}>
                Your order has been successfully placed. We'll send you an email confirmation shortly.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={onClose}
                sx={{ 
                  borderRadius: 2, 
                  px: 4,
                  bgcolor: '#D2B48C',
                  '&:hover': {
                    bgcolor: '#C4A484',
                  }
                }}
              >
                Continue Shopping
              </Button>
            </Box>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <Container maxWidth="md" sx={{ 
      py: 4,
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Paper 
        sx={{ 
          p: 4, 
          borderRadius: 2,
          bgcolor: '#F5F5DC',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}
      >
        <Box sx={{ mb: 4 }}>
          <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>

        <Box sx={{ 
          flex: 1,
          overflow: 'auto',
          '&::-webkit-scrollbar': {
            width: '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: '#f1f1f1',
            borderRadius: '4px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#888',
            borderRadius: '4px',
            '&:hover': {
              background: '#555',
            },
          },
        }}>
          {renderStepContent(activeStep)}
        </Box>

        {activeStep < 2 && (
          <Box sx={{ 
            mt: 4, 
            p: 2, 
            bgcolor: 'white', 
            borderRadius: 2,
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
            position: 'sticky',
            bottom: 0,
            zIndex: 1
          }}>
            <Typography variant="h6" gutterBottom>
              Order Summary
            </Typography>
            {items.map((item) => (
              <Box
                key={item.id}
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  mb: 1,
                }}
              >
                <Typography>
                  {item.name} x {item.quantity}
                </Typography>
                <Typography>${(item.price * item.quantity).toFixed(2)}</Typography>
              </Box>
            ))}
            <Divider sx={{ my: 2 }} />
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="h6">Total:</Typography>
              <Typography variant="h6" color="primary">
                ${total.toFixed(2)}
              </Typography>
            </Box>
          </Box>
        )}
      </Paper>
    </Container>
  );
};

export default Checkout;
