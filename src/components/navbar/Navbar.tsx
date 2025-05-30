import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <Box sx={{
        height: '80px',
        px: 4,
        backgroundColor: '#222',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    }}>
        <Typography component={Link} to="/" sx={{ color: '#fff', textDecoration: 'none', fontWeight: 600 }}>
            Home
        </Typography>

        <Stack direction="row" spacing={4}>
            <Typography component={Link} to="/register" sx={{ color: '#fff', textDecoration: 'none' }}>
                Register
            </Typography>
            <Typography component={Link} to="/login" sx={{ color: '#fff', textDecoration: 'none' }}>
                Login
            </Typography>
        </Stack>
    </Box>
  );
};

export default Navbar;
