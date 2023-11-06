import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employe: null,
  jobs:null,
  internships:null,
  errors: [],
  isAuthenticated: false,
};

export const employeReducer = createSlice({
  name: "employe",
  initialState,
  reducers: {
    addemploye: (state, action) => {
      state.employe = action.payload;
      state.isAuthenticated = true;
    },
    addjobs: (state, action) => {
      state.jobs = action.payload;
    },
    addinternships: (state, action) => {
      state.internships = action.payload;
    },
    removeemploye : (state, action) => {
      state.employe = null;
      state.isAuthenticated = false;
      state.errors = [];

    },
    iserror : (state,action)=>{

      state.errors.push(action.payload)

    },
    removeerror : (state,action)=>{

      state.errors=[];

    },


  },
});

// Action creators are generated for each case reducer function
export const {addemploye,addjobs,addinternships,removeemploye,iserror,removeerror} = employeReducer.actions;

export default employeReducer.reducer;
