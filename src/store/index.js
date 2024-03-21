import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import eventSlice from "./eventSlice";
import workshopSlice from "./workshopSlice";
import refSlice from "./refSlice";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    event: eventSlice.reducer,
    workshop: workshopSlice.reducer,
    ref: refSlice.reducer,
  },
});

export default store;
