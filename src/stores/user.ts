import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type User = {
  name: string | null;
  age: number | null;
};

const initialState: User = {
  name: null,
  age: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: () => {},
  },
});

export const {} = userSlice.actions;

export const userReducer = userSlice.reducer;
