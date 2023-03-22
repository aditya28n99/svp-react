import React from "react";
import '../Styles/ScrollBtn.css'

function ScrollBtn(){

    const scrollToTop = () => {
        console.log("Scolling to Top");
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    window.addEventListener("scroll", () => {
        let topUp = document.getElementById("topup");
        // console.log(topUp);
        if (window.pageYOffset > 100) {
            topUp.classList.remove("fadedIn");
        } else {
            topUp.classList.add("fadedIn");
        }
    });
    return(
        <button onClick={scrollToTop} id="topup">
            <i className="fa fa-chevron-up" aria-hidden="true"></i>
        </button>
    );

};
export default ScrollBtn;