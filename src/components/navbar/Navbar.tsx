import React from 'react';
import { Box, Typography, Stack, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { clearUser, selectIsAuth } from '../../redux/slices/userSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

const Navbar: React.FC = () => {
    const dispatch = useAppDispatch();
    const isAuth = useAppSelector(selectIsAuth);

    const handleLogout = () => {
        dispatch(clearUser());
    };

  return (
    <Box sx={{
        height: '80px',
        px: 4,
        backgroundColor: '#222',
        color: '#fff',
        display: 'flex',
        borderRadius: '32px',
        alignItems: 'center',
        justifyContent: 'space-between',
    }}>
        <Typography component={Link} to="/" sx={{ 
            color: '#fff', 
            fontSize: '28px',
            textDecoration: 'none', 
            fontWeight: 700 
        }}>
            Home
        </Typography>

        {isAuth ? (
            <Stack direction="row" spacing={2}>
                <Button
                    component={Link}
                    to="/dashboard"
                    sx={{
                        textTransform: 'none',
                        fontSize: '16px',
                        borderRadius: '12px',
                        backgroundColor: '#22c55e',
                        color: '#fff',
                        border: '1px solid #22c55e',
                        px: 2,
                        py: 1,
                        fontWeight: 700,
                        '&:hover': {
                            backgroundColor: '#16a34a',
                            borderColor: '#16a34a',
                        },
                    }}
                >
                    Dashboard
                </Button>
                <Button
                    onClick={handleLogout}
                    sx={{
                        textTransform: 'none',
                        fontSize: '16px',
                        borderRadius: '12px',
                        backgroundColor: '#3b82f6',
                        color: '#fff',
                        border: '1px solid #3b82f6',
                        px: 2,
                        py: 1,
                        fontWeight: 700,
                        '&:hover': {
                            backgroundColor: '#2563eb',
                            borderColor: '#2563eb',
                        },
                    }}
                >
                    Log out
                </Button>
            </Stack>
        ) : (
            <Stack direction="row" spacing={2}>
                <Button
                    component={Link}
                    to="/register"
                    sx={{
                        textTransform: 'none',
                        fontSize: '16px',
                        borderRadius: '12px',
                        backgroundColor: '#3b82f6',
                        color: '#fff',
                        border: '1px solid #3b82f6',
                        px: 2,
                        py: 1,
                        fontWeight: 700,
                        '&:hover': {
                            backgroundColor: '#2563eb',
                            borderColor: '#2563eb',
                        },
                    }}
                >
                    Register
                </Button>
                <Button
                    component={Link}
                    to="/login"
                    sx={{
                        textTransform: 'none',
                        fontSize: '16px',
                        borderRadius: '12px',
                        backgroundColor: '#3b82f6',
                        color: '#fff',
                        border: '1px solid #3b82f6',
                        px: 2,
                        py: 1,
                        fontWeight: 700,
                        '&:hover': {
                            backgroundColor: '#2563eb',
                            borderColor: '#2563eb',
                        },
                    }}
                >
                    Login
                </Button>
            </Stack>
        )}

    </Box>
  );
};

export default Navbar;
