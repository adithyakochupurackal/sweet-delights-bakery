import { useState } from 'react';
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
  Alert,
  CircularProgress,
  Tabs,
  Tab,
  Divider,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { useCart } from '../context/CartContext';

interface ShippingData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
}

interface CardData {
  cardNumber: string;
  cardName: string;
  expiryDate: string;
  cvv: string;
}

interface UPIData {
  upiId: string;
}

interface NetBankingData {
  bankName: string;
  accountNumber: string;
}

interface WalletData {
  walletType: string;
  walletId: string;
}

const steps = ['Shipping', 'Payment', 'Review'];

const Checkout = ({ onClose }: { onClose: () => void }) => {
  const { cart, clearCart } = useCart();
  const [activeStep, setActiveStep] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [shippingData, setShippingData] = useState<ShippingData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
  });

  const [cardData, setCardData] = useState<CardData>({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
  });

  const [upiData, setUpiData] = useState<UPIData>({
    upiId: '',
  });

  const [netBankingData, setNetBankingData] = useState<NetBankingData>({
    bankName: '',
    accountNumber: '',
  });

  const [walletData, setWalletData] = useState<WalletData>({
    walletType: '',
    walletId: '',
  });

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handlePaymentTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setPaymentMethod(newValue);
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError('');

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Clear cart and close checkout
      clearCart();
      onClose();
    } catch (err) {
      setError('Payment failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const renderShippingForm = () => (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          fullWidth
          label="First Name"
          value={shippingData.firstName}
          onChange={(e) => setShippingData({ ...shippingData, firstName: e.target.value })}
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
          label="Phone"
          value={shippingData.phone}
          onChange={(e) => setShippingData({ ...shippingData, phone: e.target.value })}
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
      <Grid item xs={12}>
        <TextField
          required
          fullWidth
          label="ZIP Code"
          value={shippingData.zipCode}
          onChange={(e) => setShippingData({ ...shippingData, zipCode: e.target.value })}
        />
      </Grid>
    </Grid>
  );

  const renderPaymentForm = () => (
    <Box>
      <Tabs
        value={paymentMethod}
        onChange={handlePaymentTabChange}
        variant="fullWidth"
        sx={{ mb: 3 }}
      >
        <Tab label="Credit/Debit Card" />
        <Tab label="UPI" />
        <Tab label="Net Banking" />
        <Tab label="Wallets" />
      </Tabs>

      {paymentMethod === 0 && (
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              label="Card Number"
              value={cardData.cardNumber}
              onChange={(e) => setCardData({ ...cardData, cardNumber: e.target.value })}
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
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="CVV"
              value={cardData.cvv}
              onChange={(e) => setCardData({ ...cardData, cvv: e.target.value })}
            />
          </Grid>
        </Grid>
      )}

      {paymentMethod === 1 && (
        <TextField
          required
          fullWidth
          label="UPI ID"
          value={upiData.upiId}
          onChange={(e) => setUpiData({ ...upiData, upiId: e.target.value })}
        />
      )}

      {paymentMethod === 2 && (
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              label="Bank Name"
              value={netBankingData.bankName}
              onChange={(e) => setNetBankingData({ ...netBankingData, bankName: e.target.value })}
            />
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
        </Grid>
      )}

      {paymentMethod === 3 && (
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              label="Wallet Type"
              value={walletData.walletType}
              onChange={(e) => setWalletData({ ...walletData, walletType: e.target.value })}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              label="Wallet ID"
              value={walletData.walletId}
              onChange={(e) => setWalletData({ ...walletData, walletId: e.target.value })}
            />
          </Grid>
        </Grid>
      )}
    </Box>
  );

  const renderReview = () => (
    <Box>
      <Typography variant="h6" gutterBottom>
        Order Summary
      </Typography>
      {cart.map((item) => (
        <Box key={item.id} sx={{ mb: 2 }}>
          <Typography>
            {item.name} x {item.quantity}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ${item.price * item.quantity}
          </Typography>
        </Box>
      ))}
      <Divider sx={{ my: 2 }} />
      <Typography variant="h6">
        Total: ${cart.reduce((total, item) => total + item.price * item.quantity, 0)}
      </Typography>
    </Box>
  );

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return renderShippingForm();
      case 1:
        return renderPaymentForm();
      case 2:
        return renderReview();
      default:
        return 'Unknown step';
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Checkout
        </Typography>

        <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        {activeStep === steps.length ? (
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h5" gutterBottom>
              Thank you for your order!
            </Typography>
            <Typography variant="subtitle1">
              Your order number is #2001539. We have emailed your order confirmation.
            </Typography>
          </Box>
        ) : (
          <>
            {getStepContent(activeStep)}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
              {activeStep !== 0 && (
                <Button onClick={handleBack} sx={{ mr: 1 }}>
                  Back
                </Button>
              )}
              <Button
                variant="contained"
                onClick={activeStep === steps.length - 1 ? handleSubmit : handleNext}
                disabled={loading}
              >
                {loading ? (
                  <CircularProgress size={24} />
                ) : activeStep === steps.length - 1 ? (
                  'Place Order'
                ) : (
                  'Next'
                )}
              </Button>
            </Box>
          </>
        )}
      </Paper>
    </Container>
  );
};

export default Checkout;
