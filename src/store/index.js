import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import eventSlice from "./eventSlice";
import workshopSlice from "./workshopSlice";
import refSlice from "./refSlice";
import notificationSlice from "./notificationSlice";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    event: eventSlice.reducer,
    workshop: workshopSlice.reducer,
    ref: refSlice.reducer,
    notification: notificationSlice.reducer,
  },
});

export default store;
