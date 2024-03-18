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
  },
});

export default userSlice;
export const userActions = userSlice.actions;
