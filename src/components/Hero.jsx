import { Link } from 'react-router-dom';
import styles from './Hero.module.css'
import useGoogleAuth from './useGoogleAuth';
const Hero=()=>{
    const {handleGoogleLogin}=useGoogleAuth();

    return <>
        <section className={`clearfix ${styles.hero}`}>
            <div className="container d-flex h-100">
                <div className="row justify-content-center align-self-center" data-aos="fade-up">
                    <div className="col-lg-6 intro-info order-lg-first order-last" data-aos="zoom-in" data-aos-delay="100">
                        <h2>Break barriers:<br />Email-to-WhatsApp <br /><span style={{ color:"#2fb7de"}}>connection in a single click.</span></h2>
                        <div>
                            <Link  className="btn  scrollto" style={{ fontSize: "13px", fontWeight: "600", textTransform: "uppercase", padding: "10px 32px", backgroundColor:"rgb(27 177 220)", color:"white"}} onClick={handleGoogleLogin}>Get Started</Link>
                        </div>
                    </div>

                    <div className="col-lg-6 intro-img order-lg-last order-first" data-aos="zoom-out" data-aos-delay="200">
                        <img src="./intro-img.svg" alt="" className="img-fluid"/>
                    </div>
                </div>

            </div>
        </section>
    </>
}
export default Hero;