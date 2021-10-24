import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type User = {
  id: number | null;
  name: string | null;
  age: number | null;
};

const initialState: User = {
  id: null,
  name: null,
  age: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      return action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export const userReducer = userSlice.reducer;
