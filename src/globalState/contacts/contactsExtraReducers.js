export const fetchContactsReducer = (state, action) => {
  state.contacts = action.payload;
};

export const addContactReducer = (state, action) => {
  state.contacts.push(action.payload);
};

export const deleteContactReducer = (state, action) => {

  const index = state.contacts.findIndex(
    contact => contact.id === action.payload.id
  );
  state.contacts.splice(index, 1);
};

export const fulfilledReduser = state => {
  state.isLoading = false;
  state.error = null;
};
export const pendingReduser = state => {
  state.isLoading = true;
};

export const rejectedReduser = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
