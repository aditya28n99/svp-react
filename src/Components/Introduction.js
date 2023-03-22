import React from 'react';
import '../Styles/Introduction.css';

function Introduction(props){

    const addFadeEffect = () =>{     
        let fades = document.querySelector('.fade-effect');
        fades.classList.add("fade-In");
    }

    return(<>
        <section className="sections" id="welcome-section" onLoad={addFadeEffect}>
        <div id="welcome-heading">
            <h1 className="element-white weight-bold fade-effect">{props.heading}</h1>
            <h3 className="fade-effect element-white">{props.subHeading}
            </h3>
        </div>
        </section>
    </>);
};
export default Introduction;