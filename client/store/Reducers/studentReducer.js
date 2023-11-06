import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  student: null,
  jobs:null,
  internships:null,
  errors: [],
  isAuthenticated: false,
};

export const studentReducer = createSlice({
  name: "student",
  initialState,
  reducers: {
    addstudent: (state, action) => {
      state.student = action.payload;
      state.isAuthenticated = true;
    },
    addjobs: (state, action) => {
      state.jobs = action.payload;
    },
    addinternships: (state, action) => {
      state.internships = action.payload;
    }, 
    removestudent : (state, action) => {
      state.student = null;
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
export const {addstudent,addjobs,addinternships,removestudent,iserror,removeerror} = studentReducer.actions;

export default studentReducer.reducer;
