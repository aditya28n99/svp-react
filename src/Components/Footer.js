import React from "react";
import '../Styles/Footer.css'
import { Link } from "react-router-dom";

function Footer(){

    return(
        <div className="background-pink">
        <div className="back-width background-white" id="tearms-privacy">
            
            <div id="blank2"><Link href="/">Terms of service</Link></div>
            <div id="blank3"><Link href="/">
                    Privacy policy</Link></div>
        </div>

        <footer className="back-width background-pink" id="foot">
            <div className="l-sec">
                <p className="para">All Rights Reserved</p>
                <p className="para">Replicated by <Link href="/">Aditya Wakale</Link></p>
            </div>
            <div className="r-sec">
                <a href="#"><i className="fa fa-facebook-official" aria-hidden="true"></i></a>
                <a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
            </div>
        </footer>
        </div>
    )
};
export default Footer;