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
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  user: null,
  token: null,
  loading: false,
  error: null,
};

// 👇 Асинхронный thunk
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

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearUser(state) {
        state.user = null;
        state.token = null;
        state.error = null;
        localStorage.removeItem('token');
    },
  },
    extraReducers: (builder) => {
    builder
        .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        })
        .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.user = action.payload.user;
        })
        .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Unknown error';
        });
    }
});

export const { clearUser } = userSlice.actions;
export default userSlice.reducer;
