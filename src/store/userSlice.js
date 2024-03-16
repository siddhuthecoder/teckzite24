import { createSlice } from "@reduxjs/toolkit";

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
