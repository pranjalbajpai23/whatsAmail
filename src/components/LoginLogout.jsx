/* eslint-disable react/prop-types */

import { GoogleLoginButton } from "react-social-login-buttons";
import useGoogleAuth from "./useGoogleAuth";
import { Link } from "react-router-dom";

const LoginLogout = () => {
   const {token,handleGoogleLogin,handleGoogleLogout}=useGoogleAuth();
    return <>
         { 
            token != '' ? <Link to='/'> <GoogleLoginButton onClick={handleGoogleLogout}>Logout</GoogleLoginButton></Link> :  <GoogleLoginButton onClick={handleGoogleLogin}>Login with Google</GoogleLoginButton>
        }   
    </>

};

export default LoginLogout;
