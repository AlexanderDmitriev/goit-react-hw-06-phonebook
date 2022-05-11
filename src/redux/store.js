import { configureStore, createSlice  } from '@reduxjs/toolkit';

const initialState= JSON.parse(window.localStorage.getItem('contacts')) ?? [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const phoneBookSlice = createSlice(
  {name:"contacts", initialState, reducers:{
    saveContact(state,action){},
    deleteContact(state,action){},
    filterContacts(state,action){},
  }}
);

export const store = configureStore({
  reducer: {contacts:phoneBookSlice.reducer},
});

export const {saveContact,deleteContact,filterContacts} = phoneBookSlice.actions;