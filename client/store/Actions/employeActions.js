import axios from "@/utils/axios";
import {
  addemploye,
  addjobs,
  addinternships,
  removeemploye,
  iserror,
  removeerror,
} from "../Reducers/employeReducer";
import { toast } from "react-toastify";

export const asynccurrentemploye = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/employe/current");
   dispatch(addemploye(data.employe)); 
    
  } catch (error) {
    dispatch(iserror(error.response.data));
    
  }
 
};

export const asyncsignupemploye = (employe) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/employe/signup",employe);
    dispatch(asynccurrentemploye());


    
  } catch (error) {
    dispatch(iserror(error.response.data));

    
  }
  
};

export const asyncsigninemploye = (employe) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/employe/signin",employe);
  // console.log(data);
  dispatch(asynccurrentemploye());


    
  } catch (error) {
    dispatch(iserror(error.response.data));
    
  }
  
};

export const asyncsignoutemploye = (employe) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get("/employe/signout");
  // console.log(data);
  dispatch(removeemploye());
    
  } catch (error) {
    dispatch(iserror(error.response.data));
    
  }
  
};


export const asyncupdateemploye = (employe) => async (dispatch, getState) => {
  try {

    const {_id} = getState().employeReducer.employe;
    const { data } = await axios.post("/employe/update/"+_id,employe);
  // console.log(data);
  dispatch(asynccurrentemploye());

    
  } catch (error) {
    dispatch(iserror(error.response.data));
    
  }
  
};

export const asyncavataremploye = (avatar) => async (dispatch, getState) => {
  try {

    const {_id} = getState().employeReducer.employe;
    const { data } = await axios.post("/employe/avatar/"+_id,avatar);
  // console.log(data);
  dispatch(asynccurrentemploye());

    
  } catch (error) {
    dispatch(iserror(error.response.data));
    
  }
  
};


export const asyncresetpasswordemploye = (password) => async (dispatch, getState) => {
  try {

    const {_id} = getState().employeReducer.employe;
    const { data } = await axios.post("/employe/reset-password/"+_id,password);
  // console.log(data);
  dispatch(asynccurrentemploye());


    
  } catch (error) {
    dispatch(iserror(error.response.data));
    
  }
  
};


export const asyncforgetpasswordemploye = (email) => async (dispatch, getState) => {
  try {

    const { data } = await axios.post("/employe/send-mail/",email);
  dispatch(asynccurrentemploye());


    
  } catch (error) {
    dispatch(iserror(error.response.data));
    
  }
  
};

export const asyncotppasswordemploye = (pwd) => async (dispatch, getState) => {
  try {

    const { data } = await axios.post("/employe/forget-link/",pwd);
  dispatch(asynccurrentemploye());


    
  } catch (error) {
    dispatch(iserror(error.response.data));
    
  }
  
};



export const asynccreatejobemploye = (job) => async (dispatch, getState) => {
  try {

    const { data } = await axios.post("/employe/job/create",job);
  dispatch(asynccurrentemploye());


    
  } catch (error) {
    dispatch(iserror(error.response.data));
    
  }
  
};


export const asynccreateinternshipemploye = (internship) => async (dispatch, getState) => {
  try {

    const { data } = await axios.post("/employe/internship/create",internship);
  dispatch(asynccurrentemploye());


    
  } catch (error) {
    dispatch(iserror(error.response.data));
    
  }
  
};

