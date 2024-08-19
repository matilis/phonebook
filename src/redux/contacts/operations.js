import { createAsyncThunk } from '@reduxjs/toolkit';

// Helper functions for LocalStorage
const getContactsFromLocalStorage = () => {
  const contacts = localStorage.getItem('contacts');
  return contacts ? JSON.parse(contacts) : [];
};

const saveContactsToLocalStorage = contacts => {
  localStorage.setItem('contacts', JSON.stringify(contacts));
};

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkApi) => {
    try {
      const contacts = getContactsFromLocalStorage();
      return contacts;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const contacts = getContactsFromLocalStorage();
      contacts.push(contact);
      saveContactsToLocalStorage(contacts);
      return contact;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      let contacts = getContactsFromLocalStorage();
      contacts = contacts.filter(contact => contact.id !== id);
      saveContactsToLocalStorage(contacts);
      return { id };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editContact = createAsyncThunk(
  'contacts/editContact',
  async ({ id, name, number }, thunkAPI) => {
    try {
      const contacts = getContactsFromLocalStorage();
      const index = contacts.findIndex(contact => contact.id === id);
      if (index !== -1) {
        contacts[index] = { id, name, number };
        saveContactsToLocalStorage(contacts);
        return contacts[index];
      }
      return thunkAPI.rejectWithValue('Contact not found');
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
