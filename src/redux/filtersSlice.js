import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    name: '', // Значення для фільтру по імені
    searchType: 'name', // Тип пошуку: 'name' або 'number'
  },
  reducers: {
    // Оновлення фільтру
    changeFilter(state, action) {
      const { name, value } = action.payload;

      // Перевірка, чи поле фільтра існує в стані
      if (Object.prototype.hasOwnProperty.call(state, name)) {
        state[name] = value;
      }
      
    },
  },
});

export const { changeFilter } = filtersSlice.actions;

export default filtersSlice.reducer;
