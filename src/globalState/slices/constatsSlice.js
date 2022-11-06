import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsinitialState = {
  contacts: [],
};

export const contactsSlice = createSlice({
  // 1 робить action (дія)
  name: 'contacts',
  initialState: contactsinitialState,
  // 2 робить reduser щоб обробляти action
  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload);
    },
    removeContact(state, action) {
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload
      );
      state.contacts.splice(index, 1);
    },
  },
});

const persisteConfig = {
  key: 'contacts',
  storage,
};

export const getContacts = state => state.contacts.contacts;

export const { addContact, removeContact } = contactsSlice.actions;

export const contactsReducer = persistReducer(
  persisteConfig,
  contactsSlice.reducer
);
