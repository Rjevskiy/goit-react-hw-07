import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// Установите базовый URL для axios
axios.defaults.baseURL = "https://67963fb4bedc5d43a6c4ae29.mockapi.io"; // Замените на URL вашего бэкенда

// Операция для получения контактов
export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Операция для добавления нового контакта
export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", contact);
      return response.data; // Бекенд возвращает контакт с уникальным id
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Операция для удаления контакта
export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      await axios.delete(`/contacts/${contactId}`);
      return contactId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
