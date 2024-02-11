
import pca from "../authConfig";

const MicrosoftLogin = () => {
    let accessToken='';
    const handleLogin = async () => {
        try {
            const loginRequest = {
                scopes: ['openid', 'profile', 'User.Read'],
                // Add the clientId explicitly in the request
                clientId: "4ea552cc-cb1f-4552-8259-6b35c174db93",
            };
            const loginResponse = await pca.loginPopup(loginRequest);
            console.log('Login successful:', loginResponse);
            accessToken=loginResponse;

        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    const handleLogout = () => {
        try {
            pca.logout();
            console.log('Logout successful');
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };


    const getEmails = async (accessToken) => {
        console.log(accessToken);

            const graphResponse = await fetch('https://graph.microsoft.com/v1.0/me/messages', {
                headers: {
                    Authorization: `Bearer ${accessToken.accessToken}`,
                },
            });
            console.log(graphResponse);
        // try {


        //     if (!graphResponse.ok) {
        //         throw new Error('Failed to fetch emails');
        //     }

        //     const data = await graphResponse.json();
        //     return data.value; // This will contain the list of emails
        // } catch (error) {
        //     console.error('Error fetching emails:', error);
        //     return []; // Return an empty array or handle the error as needed
        // }
    };

    // Usage:
    getEmails(accessToken)
        .then(emails => {
            console.log('Fetched emails:', emails);
            // Do something with the fetched emails
        })
        .catch(error => {
            console.error('Failed to fetch emails:', error);
        });


    return (
        <div>
            <button onClick={handleLogin}>Login with Microsoft</button>
            <button onClick={handleLogout}>Logout</button>
            <button onClick={getEmails}>get mails</button>
        </div>
    );
};

export default MicrosoftLogin;
