import { db } from '@/firebase';
import { type Movie } from '@/types';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { collection, getDocs } from 'firebase/firestore';
import { type AuthState } from './authSlice';

const initialState: Movie[] = [];

export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async (_, { getState }) => {
    const { auth } = getState() as { auth: AuthState };
    const userId = auth.user?.uid;
    const movies: Movie[] = [];
    const querySnapshot = await getDocs(collection(db, 'movies'));

    querySnapshot.forEach((doc) => {
      const movie = doc.data() as Movie;
      const isBookmarked = userId
        ? movie.favouriteUsers.includes(userId)
        : false;
      movies.push({ ...movie, id: doc.id, isBookmarked, favouriteUsers: [] });
    });

    return movies;
  }
);

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default moviesSlice.reducer;
