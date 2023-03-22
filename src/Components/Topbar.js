import React from 'react';
import '../Styles/Topbar.css'

function Topbar(){
    return(
        <header id="topbar">
        <ul id="topbar-ul">
            <li><a href="mailto:vidyapratishthanm@gmail.com"><i className="fa fa-envelope" aria-hidden="true"></i>
                    vidyapratishthan.demo@gmail.com</a></li>
            <li><i className="fa fa-phone" aria-hidden="true"></i> +91 20 2547**** / +91 20 2547****</li>
            <li><i className="fa fa-clock-o" aria-hidden="true"></i> Mon-Fri 10:30am - 5:00pm</li>
        </ul>
        </header>
    );
}
export default Topbar;

