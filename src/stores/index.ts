import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { userReducer } from "./user";

const rootReducer = combineReducers({
  userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
