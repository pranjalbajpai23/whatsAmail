

/* eslint-disable react/prop-types */
const Display = ({ from, subject, message ,date,id})=>{
    // console.log(typeof(from));
    let matches='';
    if (from !=''){
        matches =from.match(/^([^<]+)\s<([^>]+)>$/);
        // console.log(matches);
    }

    return<>
        <tr style={{cursor:"pointer"}} onClick={() =>  {window.open(`https://mail.google.com/mail/u/3/#inbox/${id}`,'_blank')}}>
            <td>{matches && matches[1] ? matches[1] : from}</td>
            <td>{subject}</td>
            <td>{message}</td>
            <td>{date}</td>
        </tr>
        </>
}
export default Display;