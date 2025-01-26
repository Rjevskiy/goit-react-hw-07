import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    name: '', // Фильтр по имени
    searchType: 'name', // Поиск по имени по умолчанию
  },
  reducers: {
    changeFilter(state, action) {
      const { name, value } = action.payload; // Изменяем фильтр в зависимости от поля
      state[name] = value;
    }
  },
});

export const { changeFilter } = filtersSlice.actions;

export default filtersSlice.reducer;

