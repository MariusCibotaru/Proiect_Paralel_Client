import React, { useEffect, useState } from 'react';
import {
  Box,
  TextField,
  Typography,
  Button,
  Stack,
  Snackbar,
  CircularProgress
} from '@mui/material';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { loginUser, selectIsAuth, selectIsLoading, selectUserError } from '../redux/slices/userSlice';
import { useNavigate } from 'react-router-dom';
import { error } from 'console';

const LoginPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isAuth = useAppSelector(selectIsAuth);
  const isLoading = useAppSelector(selectIsLoading);
  const isError = useAppSelector(selectUserError);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);

  useEffect(() => {
      if (isAuth) {
      navigate('/');
      }
  }, [isAuth, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    const resultAction = await dispatch(
      loginUser({
        email: formData.email,
        password: formData.password
      })
    );

    if (loginUser.rejected.match(resultAction)) {
      setOpenSnackbar(true);
    } else {
      navigate('/');
    }
  };

  return (
    <Box sx={{
      flex: 1,
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Box sx={{ width: '100%', maxWidth: 600 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Sign In
        </Typography>

        <TextField
          fullWidth
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          sx={{ mb: 3 }}
        />

        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          disabled={isLoading}
          sx={{ fontSize: '18px', height: 45, position: 'relative' }}
        >
          {isLoading ? (
            <CircularProgress size={24} sx={{ color: 'white' }} />
          ) : (
            'Login'
          )}
        </Button>

        <Snackbar
          open={openSnackbar}
          autoHideDuration={4000}
          onClose={() => setOpenSnackbar(false)}
          message={isError || 'Login failed'}
        />
      </Box>
    </Box>
  );
};

export default LoginPage;
