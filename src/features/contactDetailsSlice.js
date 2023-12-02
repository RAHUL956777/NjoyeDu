import { createSlice } from "@reduxjs/toolkit";

export const contactDetailsSlice = createSlice({
  name: "contactDetails",
  initialState: {
    name: "",
    email: "",
    higesteducation: "",
    interest: "",
    gender: "",
    loading: false,
    error: null,
  },

  reducers: {
    contactdetails: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.higesteducation = action.payload.higesteducation;
      state.interest = action.payload.interest;
      state.gender = action.payload.gender;
    },
  },
});
