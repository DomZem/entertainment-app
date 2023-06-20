import { db } from '@/firebase';
import { type Movie } from '@/types';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import 'firebase/compat/firestore';
import {
  arrayRemove,
  arrayUnion,
  collection,
  doc,
  getDocs,
  updateDoc,
} from 'firebase/firestore';
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

export const bookmarkMovie = createAsyncThunk(
  'movies/bookmarkMovie',
  async (movieId: string, { getState }) => {
    const { auth } = getState() as { auth: AuthState };
    const userId = auth.user?.uid;

    const movieRef = doc(db, 'movies', movieId);

    await updateDoc(movieRef, {
      favouriteUsers: arrayUnion(userId),
    });

    return movieId;
  }
);

export const unbookmarkMovie = createAsyncThunk(
  'movies/unbookmarkMovie',
  async (movieId: string, { getState }) => {
    const { auth } = getState() as { auth: AuthState };
    const userId = auth.user?.uid;

    const movieRef = doc(db, 'movies', movieId);

    await updateDoc(movieRef, {
      favouriteUsers: arrayRemove(userId),
    });

    return movieId;
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
    builder.addCase(bookmarkMovie.fulfilled, (state, action) => {
      const movieId = action.payload;
      const movie = state.find((movie) => movie.id === movieId);
      if (movie) {
        movie.isBookmarked = true;
      }
    });
    builder.addCase(unbookmarkMovie.fulfilled, (state, action) => {
      const movieId = action.payload;
      const movie = state.find((movie) => movie.id === movieId);
      if (movie) {
        movie.isBookmarked = false;
      }
    });
  },
});

export default moviesSlice.reducer;
