import React from "react";
import '../Styles/JrCollege.css'
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer"
import ScrollBtn from "../Components/ScrollBtn";

function JrCollege() {

    const links = {
        heading: "Vidya Pratishthan, Maharashtra",
        path1: "/",
        link1: "Home",
        path2: "#code-of-cunduct",
        link2: "Code of Cunduct",
        path3: "/school",
        link3: "School",
        path4: "/jrcollege",
        link4: "Jr College",
        path5: "/gallery",
        link5: "Gallery",
        path6: "",
        link6: "",
        path7: "",
        link7: "",
    }

    return (
        <>
            <div className='CollegeBody'>
                <Navbar links={links} />
                <section className="sections" id="welcome-section">
                    <div id="welcome-heading">
                        <h1 className="element-white fade-effect">Shri Saraswati Vidya Mandir & Junior College</h1>
                        <div className="fade-effect" id="wh-div1">
                            <i className="fa fa-arrow-right" aria-hidden="true"></i>
                            <Link to="#">About Us</Link></div>
                    </div>
                </section>
                <main>
                    <article className="back-width" id="admission-proc">
                        <br />
                        <h1 className="animate">Procedure for Admission to Jr College:</h1>
                        <p className="animate"> Students who have passed S.S.C. Examination or ICSE / CBSE are eligible for admission. The admissions are governed by the centralised admission procedure and seat allocation as per merit list.</p>
                        <p className="animate">2. All the admission are subject to availability of seats and directions are fixed by Deputy Director of Education and their rules prescribed.</p>

                        <h3 className="animate">Subject to fulfilment of following:</h3>
                        <ol className="animate">I. Admission form acccompanied by original documents and two attensted copies of - <br />
                            <li>Statment of marks SSC or equivalent</li>
                            <li>Original School Leaving Certificate</li>
                            <li>Two recent passport size photographs</li>
                            <li>Caste Certificate / Validity / Creamy layer Certificate (if applicable)</li>
                            <li>Photocopy of Aadhar Card</li>
                            <li>Eligibility Certificate (if neccessary)</li>
                        </ol>
                        <p className="animate">II. Fees as notified by the authority will be displayed on the notice board.</p>
                    </article>

                    <article className="back-width" id="admission-12">
                        <h1 className="animate">Admission for S.Y.J.C. (Std. XII):</h1>
                        <p className="animate">Students who have passed XI Commerce / Science Examination are eligible to get admission for XII Commerce.</p>
                        <h3 className="animate">Document to be submitted:</h3>
                        <ol className="animate">
                            <li>Mark List of Std. XI</li>
                            <li>Passing Certificate of SSC</li>
                            <li>School Leaving Certificate</li>
                            <li>Caste Certificate (if necessary)</li>
                            <li>Eligibility Certificate (if neccessary)</li>
                        </ol>
                    </article>

                    <article className="back-width" id="Curriculum">
                        <h1 className="animate">Curriculum:</h1>
                        <h3 className="animate">As per the prescribed structure of Maharashtra State Board. The subjects offered:</h3>
                        <table className="animate">
                            <tr>
                                <td>English</td>
                                <td>Marathi</td>
                            </tr>
                            <tr>
                                <td>Book Keeping & Accountancy</td>
                                <td>Economics</td>
                            </tr>
                            <tr>
                                <td>Organisation of Commerce & Management</td>
                                <td>Secretarial Practices</td>
                            </tr>
                            <tr>
                                <td>Environment Education</td>
                                <td>Physical Education</td>
                            </tr>
                        </table>
                    </article>

                    <article className="back-width" id="examination">
                        <h1 className="animate">Examination:</h1>
                        <p className="animate">Annual examination for std XI is conducted by the Jr. College.</p>
                        <h3 className="animate">Following examinations and tests are conducted by the college during the academic year:</h3>
                        <br />
                        <ol className="animate">
                            <li>Mid-term / Unit Test of 25 marks of eacch subject in each term</li>
                            <li>Terminal Examination (Term End Examination) of 50 marks of each subject.</li>
                            <li>Annual Examination of 100 marks of each subject.</li>
                            <li>Examination pattern of Physical Education and Environment Education will be informed to the students by their respective teachers.</li>
                            <li>An average of all the tests / exams is taken for prommoting the students to std. XII.</li>
                            <li>35% marks are required in each subject to promote to std. XII.</li>
                        </ol>
                    </article>
                    <article className="back-width">
                        <h1 className="animate">Timing:</h1>
                        <table className="animate">
                            <tr>
                                <td><h4>Office:</h4></td>
                                <td><h4>11:30 AM - 5:30 PM</h4></td>
                            </tr>
                            <tr>
                                <td><h4>Jr. College:</h4></td>
                                <td><h4>12:00 PM - 5:00 PM</h4></td>
                            </tr>
                        </table>
                    </article>

                    <section className="sections background-pink">
                        <div className="back-width" id="cunduct-code">

                            <h1 className="animate">Code Of Conduct (Discipline & Rules)</h1>
                            <ol className="animate" id="cocdr">
                                <li> Students must attend lectures, practicals, test & examinations as per schedule.</li>
                                <li>75% attendance for all subjects is compulsory. If the atttendance is not satisfactory, he/she wil not be allowed to appear for final examination.</li>
                                <li>Students will get Identity Card from the college authority. It is mandatory to wear neat and clean college uniform along with I-card.</li>
                                <li>ON the loss of I-card, a student should seek duplicate ccard immediately from the Jr. college authority by paying necessary fees and fine.</li>
                                <li>It is expected that the Jr. College students observe proper manners and discipline inside and outside the college premises.</li>
                                <li>All the students should strictly follow the rules and instructions of HSC Board, Departmentt of Education, Principal, Teachers and other administrative officials.</li>
                                <li>Students should be meticulous about filling the examination and eligibility forms, if any, on or before the stipulated datae declared. In case of failure to fill these forms, the student will be solely held responsible and will have to bear the consequences.</li>
                                <li>Stern action will be taken against the students in case of undisciplined behavior, disobeying of rules and orders.</li>
                                <li>Authorities have full right to modify the rules whenver necessary and following of such modified rules is obligatory for the students.</li>
                                <li>In case of any dispute, the decision of the Principal & college authorites will be final.</li>
                            </ol>
                            <h4 className="animate" id="notice">Notice:</h4>
                            <p className="animate">All the concerned students and parents should note "if any incident of ragging comes to the noticce of the authorities, the concerned students shall be given liberty to explain and if his/her explanation is not found satisfactory, the college authorites would expel himm/her from the Jr. College."</p>
                        </div>
                    </section>
                </main>
                <Footer/>
                <ScrollBtn/>
            </div>
        </>
    );

};
export default JrCollege;