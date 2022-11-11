import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from '../../operations';
import {
  fetchContactsReducer,
  addContactReducer,
  deleteContactReducer,
  fulfilledReduser,
  pendingReduser,
  rejectedReduser,
} from './contactsExtraReducers';

const extraActions = [fetchContacts, addContact, deleteContact];
const getActionsWithType = type =>
  extraActions.map(extraAction => extraAction[type]);

const contactsinitialState = {
  contacts: [],
  isLoading: false,
  error: null,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsinitialState,
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, fetchContactsReducer)
      .addCase(addContact.fulfilled, addContactReducer)
      .addCase(deleteContact.fulfilled, deleteContactReducer)
      .addMatcher(isAnyOf(...getActionsWithType('fulfilled')), fulfilledReduser)
      .addMatcher(isAnyOf(...getActionsWithType('pending')), pendingReduser)
      .addMatcher(isAnyOf(...getActionsWithType('rejected')), rejectedReduser),
});

export const contactsReducer = contactsSlice.reducer;
