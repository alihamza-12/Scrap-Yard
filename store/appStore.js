//Using persist

//Simple Redux
import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./apiSlice/userSlice";
import authReducer from "./slices/authSlice";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    auth: authReducer,
  },
  // devTools: process.env.NODE_ENV === "development",

  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    authApi.middleware,
  ],
});
