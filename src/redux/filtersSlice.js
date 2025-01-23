import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  searchType: 'name', // По умолчанию ищем по имени
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
    changeSearchType(state, action) {
      state.searchType = action.payload;
    },
  },
});

export const { changeFilter, changeSearchType } = filtersSlice.actions;

export default filtersSlice.reducer;
