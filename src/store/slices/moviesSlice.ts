import { db } from '@/firebase';
import { type Movie } from '@/types';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { collection, getDocs } from 'firebase/firestore';

const initialState: Movie[] = [];

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
  const movies: Movie[] = [];

  const querySnapshot = await getDocs(collection(db, 'movies'));
  querySnapshot.forEach((doc) => {
    const movie = doc.data() as Movie;
    movies.push({ ...movie, id: doc.id });
  });

  return movies;
});

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
