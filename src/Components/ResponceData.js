import React from "react";
import '../Styles/ResponceData.css'
import ScrollBtn from "./ScrollBtn";

function ResponceData(){
        let nameData = localStorage.getItem("name");
        let emailData = localStorage.getItem("email");
        return(
            <>
            <div className="sections background-pink">
                <div className="responce back-width">
                    <div classname="usercard">  
                    <h4>Student Name :- {nameData}</h4>
                    <h4>Student Email :- {emailData}</h4>
                    </div>
                </div>
            </div>
            <ScrollBtn/>
            </>
        );
    };
export default ResponceData;