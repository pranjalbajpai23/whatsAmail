import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Display from "./Display";
import { gmailsAction } from "../store/emails";
const MessageDisplay = () => {
    const { token } = useSelector((state) => state.access__Token);
    const  mails  = useSelector((state) => state.emails_Google);
    const [prevMail,setPrevMail]=useState([{
        from:"DEFAULT",
    }]);
    const dispatch=useDispatch();                                     
    useEffect(() => {
        const fetchEmails = async (token) => {
            try {
                const response = await fetch(
                    'https://gmail.googleapis.com/gmail/v1/users/me/messages?maxResults=10',
                    {
                        method: 'GET',
                        headers: new Headers({ Authorization: `Bearer ${token}` }),
                    }
                );

                if (response.ok) {
                    const data = await response.json();
                    const newMessages = [];

                    for (const message of data.messages) {
                        try {
                            const messageResponse = await fetch(
                                `https://gmail.googleapis.com/gmail/v1/users/me/messages/${message.id}`,
                                {
                                    method: 'GET',
                                    headers: new Headers({ Authorization: `Bearer ${token}` }),
                                }
                            );

                            if (messageResponse.ok) {
                                const info = await messageResponse.json();
                                let res = {};
                                Array.from(info.payload.headers).forEach((msg) => {
                                    if (msg.name === 'Date' || msg.name === 'Subject' || msg.name === 'From') {
                                        res[msg.name] = msg.value;
                                    }
                                });

                                res['message'] = info.snippet;
                                res['id'] = message.id;
                                newMessages.push(res);

                            }
                        } catch (error) {
                            console.error('Error fetching individual message:', error);
                        }
                    }
                    const latestMail = newMessages[0];

                    if (JSON.stringify(latestMail) !== JSON.stringify(prevMail) || latestMail.from == "DEFAULT") {
                        setPrevMail(latestMail);
                    }
                    
                    dispatch(gmailsAction.addInitialItems(newMessages));

                }
                else {
                    console.error('Failed to fetch messages');
                }
            } catch (error) {
                console.error('Error fetching emails:', error);
            }
        };
        let intervalId;
        const fetchData = () => {
            intervalId = setInterval(() => {
                if (token) {
                    fetchEmails(token);
                }
            }, 10000); 
        }
        fetchData();
        return  ()=>clearInterval(intervalId);
    }, [token,dispatch,prevMail]);

    useEffect(()=>{
        const sendEmailToWhatsApp = async () => {
            const emailContent = {
                to: '+916386674090',
                from: prevMail.From,
                subject: prevMail.Subject,
                body: prevMail.message,
            };

            try {
                const response = await fetch('http://localhost:3000/getWpMail', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(emailContent),
                });

                if (response.ok) {
                    console.log('Email sent successfully');
                } else {
                    console.error('Failed to send email');
                }
            } catch (error) {
                console.error('Error sending email:', error);
            }
        };
        sendEmailToWhatsApp();
    }, [prevMail])
 
    return <>
        <div style={{width:"80%",overflowY:"auto"}}>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">from</th>
                        <th scope="col">Subject</th>
                        <th scope="col">Message</th>
                        <th scope="col">date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        mails.map((msg)=>{
                            return <Display key={msg.id} id={msg.id} from={msg.From} subject={msg.Subject} message={msg.message} date={msg.Date} />
                        })
                    }                    
                </tbody>
            </table>
        </div>
    </>
}
export default MessageDisplay;