import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from '../../utils/axios';

export interface User {
  email: string;
  firstName: string;
  lastName: string;
}

interface UserState {
  user: User | null;
  token: string | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  isAuth: boolean;
}

const initialState: UserState = {
  user: null,
  token: null,
  status: 'idle', 
  error: null,
  isAuth: false,
};

export const registerUser = createAsyncThunk<
  { token: string; user: User },
  { email: string; password: string; firstName: string; lastName: string },
  { rejectValue: string }
>('user/registerUser', async (data, thunkAPI) => {
  try {
    const response = await axios.post('/auth/register', {
      email: data.email,
      password: data.password,
      firstName: data.firstName,
      lastName: data.lastName,
    });

    const { token, email, firstName, lastName } = response.data;
    localStorage.setItem('token', token);

    return {
      token,
      user: {
        email,
        firstName,
        lastName,
      },
    };
  } catch (error: any) {
    const message = error.response?.data?.message || 'Registration failed';
    return thunkAPI.rejectWithValue(message);
  }
});

export const loginUser = createAsyncThunk<
  { token: string; user: User },
  { email: string; password: string },
  { rejectValue: string }
>('user/loginUser', async (data, thunkAPI) => {
  try {
    const response = await axios.post('/auth/login', {
      email: data.email,
      password: data.password,
    });

    const { token, user } = response.data;
    localStorage.setItem('token', token);

    return { token, user };
  } catch (error: any) {
    const message = error.response?.data?.message || 'Login failed';
    return thunkAPI.rejectWithValue(message);
  }
});

export const fetchUser = createAsyncThunk<
  User,
  void,
  { rejectValue: string }
>('user/fetchUser', async (_, thunkAPI) => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get('/auth/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data.user;
  } catch (error: any) {
    const message = error.response?.data?.message || 'Failed to fetch user';
    return thunkAPI.rejectWithValue(message);
  }
});



const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearUser(state) {
      state.user = null;
      state.token = null;
      state.error = null;
      state.isAuth = false;
      localStorage.removeItem('token');
    },
  },
    extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Unknown error';
      })

      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isAuth = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Unknown error';
        state.isAuth = false;
      })

      .addCase(fetchUser.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
        state.isAuth = true;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Unknown error';
        state.user = null;
        state.token = null;
        state.isAuth = false;
        localStorage.removeItem('token');
      });
    }
});

export const selectUser = (state: { user: UserState }) => state.user.user;
export const selectIsAuth = (state: { user: UserState }) => state.user.isAuth;
export const selectIsLoading = (state: { user: UserState }) => state.user.status === 'loading';
export const selectUserStatus = (state: { user: UserState }) => state.user.status;
export const selectUserError = (state: { user: UserState }) => state.user.error;

export const { clearUser } = userSlice.actions;
export default userSlice.reducer;
