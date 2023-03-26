import { createSlice, nanoid } from '@reduxjs/toolkit';
import { fetchContacts } from './operations';

// const initialContacts = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  // reducers: {
  //   addContact: {
  //     reducer(state, action) {
  //       state.contacts.push(action.payload);
  //     },
  //     prepare({ name, number }) {
  //       return {
  //         payload: { name, number, id: nanoid() },
  //       };
  //     },
  //   },
  //   deleteContact(state, action) {
  //     const index = state.contacts.findIndex(
  //       contact => contact.id === action.payload
  //     );
  //     state.contacts.splice(index, 1);
  //   },
  // },
  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

// export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

export const getContacts = state => state.contacts.items;
