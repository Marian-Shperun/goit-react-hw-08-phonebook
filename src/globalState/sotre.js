import { configureStore } from '@reduxjs/toolkit';

import { contactsReducer } from './slices/constatsSlice';
import { filterReducer } from './slices/filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
