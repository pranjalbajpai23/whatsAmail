import { createSlice } from "@reduxjs/toolkit";
const access__Token = createSlice({
  name: "access__Token",
  initialState:{token:''},
  reducers:{
    setAccessToken:(state,action)=>{
        state.token=action.payload;
    }
  }
});
export const accessActions = access__Token.actions;
export default access__Token;