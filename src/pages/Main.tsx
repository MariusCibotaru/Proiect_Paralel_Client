import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import { Box, CircularProgress, CssBaseline, ThemeProvider } from '@mui/material';
import Navbar from '../components/navbar/Navbar';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { fetchUser, selectIsAuth, selectIsLoading, selectUserStatus } from '../redux/slices/userSlice';
import DashBoard from './DashBoard';
import DashBoardHome from './DashBoardHome';
import UserProfile from './UserProfile';
import { darkTheme } from '../utils/theme';
import DashMultiply from './DashMultiply';

const ProtectedRoute: React.FC = () => {
  const isAuthenticated = useAppSelector(selectIsAuth);
  const fetchUserDataStatus = useAppSelector(selectUserStatus);
  const accessToken = localStorage.getItem('token');
  const isLoading = useAppSelector(selectIsLoading);

  // Если есть токен, но статус еще idle (начальное состояние) или loading
  if (accessToken && (fetchUserDataStatus === 'idle' || isLoading)) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  // Если не авторизован
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  // Если данные успешно загружены и пользователь авторизован
  if (fetchUserDataStatus === 'succeeded' && isAuthenticated) {
    return <Outlet />;
  }

  // Во всех остальных случаях перенаправляем на страницу авторизации
  return <Navigate to="/login" />;
};

const Main: React.FC = () => {
  const dispatch = useAppDispatch();
  const accessToken = localStorage.getItem('token');
  const isAuthorized = useAppSelector(selectIsAuth);
  const isLoading = useAppSelector(selectIsLoading);
  const [theme, setTheme] = useState(darkTheme);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(fetchUser());
    }
  }, [dispatch]);

  if (isLoading && (accessToken || isAuthorized)) {
      return (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh', 
          }}
        >
          <CircularProgress /> 
        </Box>
      );
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        minHeight: '100dvh',
        height: '100%' 
      }}>
        
        <Box sx={{ p: '1vh', pb: 0, }}>
          <Navbar/>
        </Box>

        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          flex: 1, 
          height: '100%',
          minHeight: '0', 
          boxSizing: 'border-box', 
          p: '1vh', 
        }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            <Route element={<ProtectedRoute />}>
              <Route path="DashBoard" element={<DashBoard />}>
                <Route index element={<Navigate to="loader" />} />
                <Route path="loader" element={<DashBoardHome />} />
                <Route path="multiply" element={<DashMultiply />} />
                <Route path="access" element={<UserProfile />} />
              </Route>
            </Route>

          </Routes>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Main;
