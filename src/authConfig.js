import { PublicClientApplication } from "@azure/msal-browser";

const config = {
  auth: {
    clientId: "4ea552cc-cb1f-4552-8259-6b35c174db93",
    authority:
      "https://login.microsoftonline.com/d33082a4-dff2-4734-b5c3-7623426d092d",
    redirectUri: "http://localhost:5173/",
  },
};

const pca = new PublicClientApplication(config);

export default pca;
