import { createTheme } from '@mui/material';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#ffffff',
    },
    primary: {
      main: '#1976d2',
    },
    text: {
      primary: '#000000',
    },
  },
  typography: {
    fontFamily: ["Nova, sans-serif"].join(","), 
    fontSize: 18,
    h1: {
      fontFamily: ["Nova", "sans-serif"].join(","),
      fontSize: 42,
      fontWeight: 500,
    },
    h2: {
      fontFamily: ["Nova", "sans-serif"].join(","),
      fontSize: 38,
      fontWeight: 500,
    },
    h3: {
      fontFamily: ["Nova", "sans-serif"].join(","),
      fontSize: 32,
      fontWeight: 500,
    },
    h4: {
      fontFamily: ["Nova", "sans-serif"].join(","),
      fontSize: 28,
      fontWeight: 500,
    },
    h5: {
      fontFamily: ["Nova", "sans-serif"].join(","),
      fontSize: 22,
      fontWeight: 500,
    },
    h6: {
      fontFamily: ["Nova", "sans-serif"].join(","),
      fontSize: 18,
      fontWeight: 500,
    },
    body1: {
      fontFamily: ["Nova", "sans-serif"].join(","),
      fontSize: 16,
      fontWeight: 500,
    },
    body2: {
      fontFamily: ["Nova", "sans-serif"].join(","),
      fontSize: 14,
      fontWeight: 500,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: 'Nova, sans-serif',
          background: 'linear-gradient(147deg, #f9fcff 0%, #dee4ea 74%)',
        },
        '*::-webkit-scrollbar': {
          width: '8px',
          height: '8px',
        },
        '*::-webkit-scrollbar-thumb': {
          backgroundColor: '#888',
          borderRadius: '8px',
        },
        '*::-webkit-scrollbar-thumb:hover': {
          backgroundColor: '#555',
        },
        '*::-webkit-scrollbar-track': {
          backgroundColor: '#f1f1f1',
        },
      },
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#080808',
    },
    primary: {
      main: '#bb86fc',
    },
    secondary: {
      main: '#d29891',
    },
    text: {
      primary: '#ffffff',
    },
  },
  typography: {
    fontFamily: ["Nova", "sans-serif"].join(","),
    fontSize: 18,
    h1: {
      fontFamily: ["Nova", "sans-serif"].join(","),
      fontSize: 42,
      fontWeight: 500,
    },
    h2: {
      fontFamily: ["Nova", "sans-serif"].join(","),
      fontSize: 38,
      fontWeight: 500,
    },
    h3: {
      fontFamily: ["Nova", "sans-serif"].join(","),
      fontSize: 32,
      fontWeight: 500,
    },
    h4: {
      fontFamily: ["Nova", "sans-serif"].join(","),
      fontSize: 28,
      fontWeight: 500,
    },
    h5: {
      fontFamily: ["Nova", "sans-serif"].join(","),
      fontSize: 22,
      fontWeight: 500,
    },
    h6: {
      fontFamily: ["Nova", "sans-serif"].join(","),
      fontSize: 18,
      fontWeight: 500,
    },
    body1: {
      fontFamily: ["Nova", "sans-serif"].join(","),
      fontSize: 16,
      fontWeight: 500,
    },
    body2: {
      fontFamily: ["Nova",  "sans-serif"].join(","),
      fontSize: 14,
      fontWeight: 500,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
             
        html: {
          backgroundColor: '#080808', 
        },
        body: {
          fontFamily: 'Nova, sans-serif',
          background: '#080808',
        },
        '*::-webkit-scrollbar': {
          width: '8px',
          height: '8px',
        },
        '*::-webkit-scrollbar-thumb': {
          backgroundColor: '#2F2F2F',
          borderRadius: '8px',
        },
        '*::-webkit-scrollbar-thumb:hover': {
          backgroundColor: '#434343',
        },
        '*::-webkit-scrollbar-track': {
          backgroundColor: '#191919',
        },
      },
    },
  },
});
