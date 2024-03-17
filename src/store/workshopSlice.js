import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchWorkshops = createAsyncThunk("/user/workshops", async () => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/workshops/all-workshops`
    );
    return res.data;
  } catch (error) {
    console.log(error);
    throw new Error(error?.response?.data.message || "Internal Server error");
  }
});

const workshopSlice = createSlice({
  name: "workshop",
  initialState: { data: null, error: null, status: "idle" },
  extraReducers: (builders) => {
    builders.addCase(fetchWorkshops.pending, (state, action) => {
      state.status = "loading";
    });
    builders.addCase(fetchWorkshops.rejected, (state, action) => {
      state.status = "loaded";
      state.error = action.error.message;
      state.data = null;
    });
    builders.addCase(fetchWorkshops.fulfilled, (state, action) => {
      state.status = "loaded";
      state.error = null;
      state.data = action.payload;
    });
  },
});

export default workshopSlice;
export const workshopActions = workshopSlice.actions;
