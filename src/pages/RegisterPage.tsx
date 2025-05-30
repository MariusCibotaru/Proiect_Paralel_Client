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
import { registerUser, selectIsAuth, selectIsLoading, selectUserError } from '../redux/slices/userSlice';
import { useNavigate } from 'react-router-dom';

const RegisterPage: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const isAuth = useAppSelector(selectIsAuth);
    const isLoading = useAppSelector(selectIsLoading);
    const isError = useAppSelector(selectUserError);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
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
            disabled={isLoading}
            sx={{ fontSize: '18px', height: 45, position: 'relative' }}
            >
            {isLoading ? (
                <CircularProgress size={24} sx={{ color: 'white' }} />
            ) : (
                'Register'
            )}
            </Button>

            <Snackbar
            open={openSnackbar}
            autoHideDuration={4000}
            onClose={() => setOpenSnackbar(false)}
            message={isError || 'Registration failed'}
            />
        </Box>
    </Box>
  );
};

export default RegisterPage;
