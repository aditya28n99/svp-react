import React from 'react';
import '../Styles/Navbar.css';
import { Link } from 'react-router-dom';

function Navbar(props) {

    
    function toggleSideBar() {
        // let sidebutton = document.getElementById("sidebutton");
        let sidebars = document.getElementById("smn");
        sidebars.classList.toggle("showSidebar");
    }
    return (<>
        <nav className="navbar">
            <div className="back-width" id="nav-back">
                <div className="logo">
                    <span>
                        <h3>{props.links.heading}</h3>

                    </span>
                </div>
                <ul id="nav-list">
                    <li ><Link className='active' to={props.links.path1}>{props.links.link1}</Link></li>
                    <li><Link to={props.links.path2} >{props.links.link2}</Link></li>
                    <li><Link to={props.links.path3}>{props.links.link3}</Link></li>
                    <li><Link to={props.links.path4}>{props.links.link4}</Link></li>
                    <li><Link to={props.links.path5}>{props.links.link5}</Link></li>
                    <li><Link to={props.links.path6}>{props.links.link6}</Link></li>
                    <li><Link to={props.links.path7}>{props.links.link7}</Link></li>
                    
                </ul>
                <aside id="nav-sidebar">
                    <i id="sidebutton" className="fa fa-bars" aria-hidden="true" onClick={toggleSideBar}></i>
                </aside>
            </div>
        </nav>
        <div className="sidebar" id="smn">
            <ul className="side-nav-list">
                <li><Link to={props.links.path1}>{props.links.link1}</Link></li>
                <li><Link to={props.links.path2}>{props.links.link2}</Link></li>
                <li><Link to={props.links.path3}>{props.links.link3}</Link></li>
                <li><Link to={props.links.path4}>{props.links.link4}</Link></li>
                <li><Link to={props.links.path5}>{props.links.link5}</Link></li>
                <li><Link to={props.links.path6}>{props.links.link6}</Link></li>
                <li><Link to={props.links.path7}>{props.links.link7}</Link></li>
            </ul>
        </div>
    </>);
};
export default Navbar;