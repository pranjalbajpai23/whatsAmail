
import LoginLogout from "./LoginLogout";
const Navbar=()=>{

    return <>
        <div className="container" style={{height:"15vh"}} >
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                    <img src="./logo.png" className="bi me-2" width="60" height="60" alt="logo" />
                    <span className="fs-4">whatsAmail</span>
                </a>

                <ul className="nav nav-pills" style={{alignItems:"center"}}>
                    <li className="nav-item"><a href="#" className="nav-link active" aria-current="page">Home</a></li>
                    <li className="nav-item"><a href="#about" className="nav-link" >About</a></li>
                    <li className="nav-item"><a href="#services" className="nav-link" >Services</a></li>
                    <li className="nav-item"><a href="#portfolio" className="nav-link" >Portfolio</a></li>
                    <li className="nav-item"><a href="#team" className="nav-link" >Team</a></li>
                    <li className="nav-item ">{ <LoginLogout />}</li>
                    
                    <li className="nav-item"><a href="#footer" className="nav-link" >Contact</a></li>
                    
                </ul>
            </header>
        </div>
    </>
}
export default Navbar;