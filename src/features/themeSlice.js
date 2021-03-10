import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    theme: null,
  },
  reducers: {
    modeSelected: (state,action) => {
      state.theme = action.payload;
    },
  },
});

export const { modeSelected } = themeSlice.actions;

export const selectTheme = state => state.theme.theme;

export default themeSlice.reducer;