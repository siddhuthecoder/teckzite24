import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRefs = createAsyncThunk("/user/refs", async () => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/user/refs/top`
    );
    return res.data.leaderboard;
  } catch (error) {
    console.log(error);
    throw new Error(error?.response?.data.message || "Internal Server error");
  }
});

const refSlice = createSlice({
  name: "event",
  initialState: { data: null, error: null, status: "idle" },
  extraReducers: (builders) => {
    builders.addCase(fetchRefs.pending, (state, action) => {
      state.status = "loading";
    });
    builders.addCase(fetchRefs.rejected, (state, action) => {
      state.status = "loaded";
      state.error = action.error.message;
      state.data = null;
    });
    builders.addCase(fetchRefs.fulfilled, (state, action) => {
      state.status = "loaded";
      state.error = null;
      state.data = action.payload;
    });
  },
});

export default refSlice;
export const refActions = refSlice.actions;
