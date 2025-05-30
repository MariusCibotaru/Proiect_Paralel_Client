import React from 'react';
import { Box, Button, Stack } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { name: 'Loader', path: '/dashboard/loader' },
  { name: 'Access', path: '/dashboard/access' },
];

const DashNavBar: React.FC = () => {
  const location = useLocation();

  return (
    <Box sx={{
        minHeight: '100%',
        width: '150px',
        backgroundColor: '#222',
        borderRadius: '32px',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        p: 2,
      }}
    >
      <Stack spacing={2} sx={{ flex: 1 }}>
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Button
              key={item.path}
              component={Link}
              to={item.path}
              variant={isActive ? 'contained' : 'outlined'}
              sx={{       
                aspectRatio: '1/0.8',         
                fontSize: '16px',
                fontWeight: 600,
                borderRadius: '12px',
                color: '#fff',
                borderColor: '#3b82f6',
                backgroundColor: isActive ? '#3b82f6' : 'transparent',
                '&:hover': {
                  backgroundColor: isActive ? '#2563eb' : '#1e40af',
                  borderColor: '#2563eb',
                },
              }}
            >
              {item.name}
            </Button>
          );
        })}
      </Stack>
    </Box>
  );
};

export default DashNavBar;
