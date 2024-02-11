import Sidebar from "../components/Sidebar";
import MessageDisplay from "../components/MessagesDisplay";
const Mainpage = () => {
    const displayStyle={
        display:"flex",
        flexDirection:"row",
        borderRadius:"5%",
        height:"85vh",
    }
    
    return <>
        <div style={displayStyle}>
            <Sidebar />
            <MessageDisplay/>
        </div>
    </>
};

export default Mainpage;
