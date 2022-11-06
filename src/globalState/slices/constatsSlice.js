import { createSlice } from '@reduxjs/toolkit';


const contacts = [];

export const contactsSlice = createSlice({
  // 1 робить action (дія)
  name: 'contacts',
  initialState: contacts,
  // 2 робить reduser щоб обробляти action
  reducers: {
    addContact(state, action) {
      state.push(action.payload);
    },
    removeContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
  },
});



export const getContacts = state => state.contacts;

export const { addContact, removeContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;

