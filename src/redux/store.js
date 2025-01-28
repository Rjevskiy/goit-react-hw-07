import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactsSlice';
import filtersReducer from './filtersSlice';

const store = configureStore({
  reducer: {
    contacts: contactsReducer, // Звичайний reducer для контактів
    filters: filtersReducer,  // Звичайний reducer для фільтрів
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Вимикаємо перевірку серіалізації, якщо це потрібно
    }),
  devTools: process.env.NODE_ENV !== 'production', // DevTools тільки в режимі розробки
});

export default store;
