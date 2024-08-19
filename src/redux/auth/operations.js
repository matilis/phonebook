import { createAsyncThunk } from '@reduxjs/toolkit';

const setLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getLocalStorage = key => {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
};

const removeLocalStorage = key => {
  localStorage.removeItem(key);
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const user = {
        name: credentials.name,
        email: credentials.email,
      };
      const token = 'fakeToken123';
      setLocalStorage('user', user);
      setLocalStorage('token', token);

      return { user, token };
    } catch (error) {
      return thunkAPI.rejectWithValue('Registration failed');
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const user = getLocalStorage('user');
      const token = getLocalStorage('token');

      if (user && token) {
        return { user, token };
      } else {
        return thunkAPI.rejectWithValue('Invalid credentials');
      }
    } catch (error) {
      return thunkAPI.rejectWithValue('Login failed');
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    removeLocalStorage('user');
    removeLocalStorage('token');
  } catch (error) {
    return thunkAPI.rejectWithValue('Logout failed');
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    try {
      const token = getLocalStorage('token');
      const user = getLocalStorage('user');

      if (!token || !user) {
        return thunkAPI.rejectWithValue('Unable to fetch user');
      }

      return user;
    } catch (error) {
      return thunkAPI.rejectWithValue('Refresh failed');
    }
  }
);
