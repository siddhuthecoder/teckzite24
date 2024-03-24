import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUser = createAsyncThunk("/user", async (token) => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data.user;
  } catch (error) {
    console.log(error);
    throw new Error(error?.response?.data.message || "Internal Server error");
  }
});

const userSlice = createSlice({
  name: "user",
  initialState: { data: null, status: "idle", error: null },
  reducers: {
    setUser: (state, action) => {
      state.data = action.payload;
      state.status = "loaded";
      state.error = null;
    },
    removeUser: (state, action) => {
      state.data = null;
    },
    addEvent: (state, action) => {
      state.data.regEvents.push(action.payload);
    },
  },

  extraReducers: (builders) => {
    builders.addCase(fetchUser.pending, (state, action) => {
      state.status = "loading";
    });
    builders.addCase(fetchUser.rejected, (state, action) => {
      state.status = "loaded";
      state.error = action.error.message;
      state.data = null;
    });
    builders.addCase(fetchUser.fulfilled, (state, action) => {
      state.status = "loaded";
      state.error = null;
      state.data = action.payload;
    });
  },
});

export default userSlice;
export const userActions = userSlice.actions;
