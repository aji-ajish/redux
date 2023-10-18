import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: '1',
    name: "Ajish",
  },
  {
    id: '2',
    name: "Aji",
  },
  {
    id: '3',
    name: "vibin",
  },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;
export default usersSlice.reducer;
