import React from 'react';
import { Box, Stack, Button, useMediaQuery } from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { clearUser, selectIsAuth } from '../../redux/slices/userSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import Logo from '../../images/logo/Logo.png'

const Navbar: React.FC = () => {
    const dispatch = useAppDispatch();
    const isAuth = useAppSelector(selectIsAuth);
    const isMobile = useMediaQuery('(max-width:600px)');
    const handleNavigate = useNavigate();
    const location = useLocation(); 

    const handleLogout = () => {
        dispatch(clearUser());
    };

    const handleLoginClick = () => {
        handleNavigate('/login');
    };

    const handleRegisterClick = () => {
        handleNavigate('/register');
    };

    const handleHomeClick = (e: React.MouseEvent) => {
        if (e.button === 1) return;
        e.preventDefault();
        handleNavigate('');
    };


  return (
    <Box sx={{
        height: '80px',
        px: isMobile ? 2 : 4,
        backgroundColor: '#222',
        color: '#fff',
        display: 'flex',
        borderRadius: '32px',
        alignItems: 'center',
        justifyContent: 'space-between',
    }}>
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height:'100%',
        }}>
            <Box
                component="a"
                href={`/${location.pathname.split('/')[1] || 'en'}`}
                onMouseDown={handleHomeClick}
                onClick={handleHomeClick}
                draggable={false}  
                sx={{
                    height: 'clamp(40px, 4vw, 55px)',
                    width: 'auto',
                    cursor: 'pointer',
                    transition: 'all 0.55s ease-in-out',
                    userSelect: 'none',
                }}
            >
                <Box
                    onClick={handleHomeClick}
                    component="img"
                    src={Logo}
                    alt="Logo"
                    sx={{
                        height: 'clamp(40px, 4vw, 55px)',
                        m: 'auto',
                        width: 'auto',
                        cursor: 'pointer',
                        transition: 'all 0.55s ease-in-out',
                    }}
                />
            </Box>
        </Box>

        {isAuth ? (
            <Stack direction="row" spacing={isMobile ? 1 : 2}>
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
            <Stack direction="row" spacing={isMobile ? 1 : 2}>
                <Button
                    onClick={handleRegisterClick}
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
                    onClick={handleLoginClick}
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
