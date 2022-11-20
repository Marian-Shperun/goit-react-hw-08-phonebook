export const fetchAuthUserReducer = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

export const logOutUserReducer = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};
export const refreshUserReducer = (state, action) => {
  state.user = action.payload;
  state.isLoggedIn = true;
};


export const fulfilledReduser = state => {
  state.isLoggedIn = true;
  state.error = null;
};
export const pendingReduser = state => {
  state.isLoggedIn = false;
};

export const rejectedReduser = (state, action) => {
  state.isLoggedIn = false;
  state.error = action.payload;
};
