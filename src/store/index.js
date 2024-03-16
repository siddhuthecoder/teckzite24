import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import eventSlice from "./eventSlice";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    event: eventSlice.reducer,
  },
});

export default store;
