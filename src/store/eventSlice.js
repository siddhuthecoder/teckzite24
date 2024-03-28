import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchEvents = createAsyncThunk("/user/events", async () => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/events/all-events`
    );
    return res.data;
  } catch (error) {
    throw new Error(error?.response?.data.message || "Internal Server error");
  }
});

const eventSlice = createSlice({
  name: "event",
  initialState: { data: null, error: null, status: "idle" },
  extraReducers: (builders) => {
    builders.addCase(fetchEvents.pending, (state, action) => {
      state.status = "loading";
    });
    builders.addCase(fetchEvents.rejected, (state, action) => {
      state.status = "loaded";
      state.error = action.error.message;
      state.data = null;
    });
    builders.addCase(fetchEvents.fulfilled, (state, action) => {
      state.status = "loaded";
      state.error = null;
      state.data = action.payload;
    });
  },
});

export default eventSlice;
export const eventActions = eventSlice.actions;
