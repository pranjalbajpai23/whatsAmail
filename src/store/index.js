import { configureStore } from "@reduxjs/toolkit";
import access__Token from "./access__Token";
import emails_Google from "./emails";
const siteStore = configureStore({
  reducer: {
    access__Token: access__Token.reducer,
    emails_Google: emails_Google.reducer,
  },
});
export default siteStore;