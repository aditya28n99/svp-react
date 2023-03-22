import React from "react";

function ContactForm(){
    
    function validateForm(){
        let name = document.forms["contactForm"]["name"];
        let email = document.forms["contactForm"]["email"];
        let subject = document.forms["contactForm"]["subject"];
        
        localStorage.setItem("name",name.value);
        localStorage.setItem("email",email.value);

        if(name.value !== ""){
            // name.classList.toggle("border-red");
            name.className = "";
            name.placeholder = "Name";
            // name.value = "";
        }else{
            name.className = "border-red";
            name.placeholder = "Please Enter Your Name Here";
        }
        if(email.value !== ""){
            email.className="";
            email.placeholder = "Email";
            // email.value = "";
        }else{
            email.className="border-red";
            email.placeholder = "Please Enter Your Valid Email";
        }
        if(subject.value !== ""){
            subject.className="";
            subject.placeholder = "Email";
            // email.value = "";
        }else{
            subject.className="border-red";
            subject.placeholder = "Please Enter Your subject herre";
        }
        if(subject.value !== ""){
            subject.className="";
            subject.placeholder = "Subject";
            // email.value = "";
        }else{
            subject.className="border-red";
            subject.placeholder = "Please Enter Your subject herre";
        }
        if(name.value !== "" && email.value !== "" && subject.value !== ""){
            name.value = "";
            email.value = "";
            subject.value = "";
            alert("Thank you for your responce.");
        }
        else{
            alert("Please Enter Valid data");
        }
        // 
            // alert("Thank you for your responce.");  email.value = "";
    }

    return(<>
            <section className="sections background-pink" id="contact">
                <div className="back-width" id="contact-us-heading">
                    <h1 className="align-center animate">Contact Us</h1>
                    <p className="align-center animate">Please contact us if you want to know more. We would be happy to assist
                        you further.</p>
                    <div className="animate" id="contact-boxes">
                        <div className="cb" id="cb1">
                            <h1 className="small-font weight-bold">Our Address</h1>
                            <p>Sr.No. 11/2, Shahu Colony, Lane No. 01, Near Cummins Eng. College, Karve Nagar, Pune - 411052
                            </p>
                        </div>
                        <div className="cb" id="cb2">
                            <h1 className="small-font weight-bold">Email Us</h1>
                            <p>vidyapratishthanm@gmail.com</p>
                        </div>
                        <div className="cb" id="cb3">
                            <h1 className="small-font weight-bold">Call Us</h1>
                            <p>+91 20 25471977 <br /> +91 20 25470414</p>
                        </div>
                    </div>
                </div>
                <div className="back-width animate ">
                    <form className="form-back animate" name='contactForm' method='post' >

                        <input  type="text" name="name" id="input1" placeholder="Name" />
                        
                        <input type="email" name='email' id="input2" placeholder="Email" />
                        <input type="text" name='subject' placeholder="subject" id="input3" />

                        <textarea name="Message" id="input4" rows="5" placeholder="Message"></textarea>
                        <div id="send-massage" onClick={validateForm}>Send Message</div>
                    </form>
                </div>
            </section>
    </>);

};

export default ContactForm;