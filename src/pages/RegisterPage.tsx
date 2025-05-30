import React, { useState } from 'react';
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
import { registerUser } from '../redux/slices/userSlice';

const RegisterPage: React.FC = () => {
    const dispatch = useAppDispatch();
    const { loading, error } = useAppSelector(state => state.user);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async () => {
        const resultAction = await dispatch(
            registerUser({
            email: formData.email,
            password: formData.password,
            firstName: formData.firstName,
            lastName: formData.lastName
            })
        );

        if (registerUser.rejected.match(resultAction)) {
            setOpenSnackbar(true);
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
            Welcome
            </Typography>

            <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
            <TextField
                fullWidth
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
            />
            <TextField
                fullWidth
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
            />
            </Stack>

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
            disabled={loading}
            sx={{ fontSize: '18px', height: 45, position: 'relative' }}
            >
            {loading ? (
                <CircularProgress size={24} sx={{ color: 'white' }} />
            ) : (
                'Register'
            )}
            </Button>

            <Snackbar
            open={openSnackbar}
            autoHideDuration={4000}
            onClose={() => setOpenSnackbar(false)}
            message={error || 'Registration failed'}
            />
        </Box>
    </Box>
  );
};

export default RegisterPage;
