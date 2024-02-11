import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { accessActions } from "../store/access__Token";

const useGoogleAuth=()=>{
    const dispatch = useDispatch();
    const [token, setToken] = useState('');

    const handleGoogleLogin = () => {
        const CLIENT_ID = '491847846565-svuspd923lcrqs30r49ubmcpcqhq83di.apps.googleusercontent.com';
        const REDIRECT_URI = 'http://localhost:5173/main';
        const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?response_type=token&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=https://www.googleapis.com/auth/gmail.readonly&include_granted_scopes=true`;
        window.location.href = authUrl;

    };
    useEffect(() => {
        const url = new URL(window.location.href);
        const receivedToken = url.hash.split('&')[0].split('=')[1];
        if (receivedToken) {
            setToken(receivedToken);
            dispatch(accessActions.setAccessToken(receivedToken));
        }
    }, [dispatch]);

    const handleGoogleLogout = () => {
        dispatch(accessActions.setAccessToken(''));
        setToken('');
    };
    return{
        token,
        handleGoogleLogin,
        handleGoogleLogout
    }
    
}
export default useGoogleAuth;