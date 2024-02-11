import { createSlice } from "@reduxjs/toolkit";

const emails_Google = createSlice({
  name: "mails_Google",
  initialState:[],
  reducers:{
        addInitialItems:(state,action)=>{
            return action.payload;
        }
  }
});
export const gmailsAction=emails_Google.actions;
export default emails_Google;

export const sendEmailToWp=async (email)=>{
    const response = await fetch('', {
      method: 'POST',
      body: JSON.stringify(email),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if(response.ok) {
      console.log("send to wp");
    }
    else {
      console.log("error in sending to wp");
    }
}
