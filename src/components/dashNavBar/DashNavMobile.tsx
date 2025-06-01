import React, { useState } from 'react';
import { Box, Button, Drawer, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { name: 'Matrici', path: '/dashboard/loader' },
  { name: 'Multiplicare', path: '/dashboard/multiply' },
  { name: 'Access', path: '/dashboard/access' },
];

const DashNavMobile: React.FC = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', p: 1 }}>
      <IconButton onClick={() => setOpen(true)} sx={{ color: '#fff' }}>
        <MenuIcon fontSize="medium" />
      </IconButton>

      <Drawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            backgroundColor: '#111827',
            color: '#fff',
            width: '240px',
            p: 2,
          },
        }}
      >
        <Typography variant="h6" sx={{ mb: 2, px: 1 }}>
          Navigare
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
          }}
        >
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Button
                key={item.path}
                component={Link}
                to={item.path}
                onClick={() => setOpen(false)}
                variant={isActive ? 'contained' : 'outlined'}
                sx={{
                  textTransform: 'none',
                  fontSize: '16px',
                  fontWeight: 600,
                  borderRadius: '24px',
                  color: '#fff',
                  borderColor: '#3b82f6',
                  backgroundColor: isActive ? '#3b82f6' : 'transparent',
                  whiteSpace: 'nowrap',
                  px: 3,
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
        </Box>
      </Drawer>
    </Box>
  );
};

export default DashNavMobile;
