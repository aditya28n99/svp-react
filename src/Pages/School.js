import React from "react";
import '../Styles/School.css'
import Navbar from "../Components/Navbar";
import Introduction from "../Components/Introduction";
import Footer from "../Components/Footer";
import ScrollBtn from "../Components/ScrollBtn";

function School(){
    const links = {
        heading:"Vidya Pratishthan, Maharashtra",
        path1: "/",
        link1: "Home",
        path2: "#kinder-garten",
        link2: "Kinder Garten", 
        path3: "#primary",
        link3: "Primary", 
        path4: "#secondary",
        link4: "Secondary", 
        path5: "/school",
        link5: "School", 
        path6: "/jrcollege",
        link6: "Jr College", 
        path7: "/gallery",
        link7: "Gallery", 
        path8: "",
        link8: "", 
    }
    return(
        <div className='SchoolBody'>
        <Navbar links={links} />
        <Introduction heading="Welcome to Vidya Pratishthan, Maharashtra" subHeading="Our Students Grow Up - To Become a Nationalist, Well Cultured and Ideal Citizen." />
        <main>
        <section className="sections back-width card-section">
            <div className="animate" id="card1">
                <h1 className="element-white">Why Shri Saraswati Vidya Mandir?</h1>
                <p>Affiliated to Maharashtra State Board of Secondary and Higher Secondary Education, Pune
                </p>
                <div><a href="https://vpmpune.com/img/SchoolResult.jpg" rel="noreferrer" target="_blank">2019-20 Success Stories<i className="fa fa-chevron-right" aria-hidden="true"></i></a>
                </div>
            </div>
            <div className="cards card2 animate">
                <i className="fa fa-user" aria-hidden="true"></i>
                <h3>Staff</h3>
                <p>Qualified and experienced staff / faculty. Motivational Counseling and Guest Lectures. Organization of Sports Activity.</p>
            </div>
            <div className="cards card3 animate">
                <i className="fa fa-building-o" aria-hidden="true"></i>
                <h3>Facility and Infrastructure</h3>
                <p>Digital classrooms / use of Audio-Visual Aids. Rich Library and Reading Room Facility</p>
            </div>
            <div className="cards card4 animate">
                <i className="fa fa-book" aria-hidden="true"></i>
                <h3>Courses</h3>
                <p>Skill Development Courses for Employability Enhancement along with regular courses for XI & XII</p>
            </div>
        </section>
        <section className="sections background-pink">
            <div className="back-width" id="kinder-garten">
                <h1 className="animate">KINDER GARTEN SECTION</h1>
                <p className="animate">Total students : 100</p>
                <ul className="animate">
                    School timings :
                    <li>Nursery: 8:30 am to 11 am.</li>
                    <li>Junior/Senior: 8:30 am to 12 noon.</li>
                </ul>
                <p className="animate">Curriculum of Kindergarten is based on the 5 principles of Vidya Bharti to ensure all round development of Kids.</p>
                <div className="lr-sec animate">

                    <div className="l-sec">
                        <ul>Activities conducted:
                        <li>First day of school</li>
                        <li>Birthday celebration as per Vedic norms</li>
                        <li>Mothers day</li>
                        <li>Vidyarambh Sanskar</li>
                        <li>Baal Melava/Kids festival</li>
                        <li>Camping workshop</li>
                        <li>Kids meeting</li>
                        <li>Study tour</li>
                        </ul>
                    </div>
                    <div className="r-sec">
                        <ul>
                            <li>Toy library</li>
                            <li>Marathi/Science day</li>
                            <li>To ensure Language Proficiency - Reading project run through steps of Listening /reading/writing and communication skills.</li>
                            <li>Sanskrit communication</li>
                            <li>Spoken English</li>
                            <li>Parents school and parents mentoring workshop
                                Parents and teachers picnic and competitions.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section className="sections back-width animate" id="primary-sec">
            <h1 className="animate">PRIMARY SECTION</h1>
            <p className="animate">Shri Saraswati Vidya Mandir Primary is an aided school hosting classes from Standard 1st to 7th in Marathi and Semi English mediums. Year – 2022-23: Total 585 students from Standard 1st to 7th.</p>
            <p className="animate">Standard 1st started in 1988 and got government approval from 21st March 1991. School Authorities including principal, teachers, directors, non-teaching staff are dedicated to cultivate and instil right values in students. School ensures all round development of students through various initiatives supporting academics.</p>
            <div className="lr-sec animate">
                <div className="l-sec">
                    <ul>
                        School specialities:
                        <li>State of the art and spacious building with playground</li>
                        <li>Spacious and bright classrooms with right illumination</li>
                        <li>Skilled Teachers</li>
                        <li>Digital google classroom</li>
                        <li>LCD projector in each classroom</li>
                        <li>Excellent performance in Kho Kho</li>
                        <li>Reading project with door step coaching</li>
                        <li>Brain development through fun activities</li>
                    </ul>
                </div>
                <div className="r-sec">
                    <ul>
                        <li>Seva Sahayog Activities</li>
                        <li>Student counselling</li>
                        <li>Separate computer and Science lab</li>
                        <li>Open Library</li>
                        <li>Provides Various free books and Nutritious food</li>
                        <li>Experimental learning for students.</li>
                        <li>Inculcation of Values through celebration for festivals</li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="sections background-pink">
            <div className="back-width" id="Secondary-sec">
                <h1 className="animate">SECONDARY SECTION</h1>
                <p className="animate">Shri Saraswati Vidya Mandir Secondary is an aided school hosting classes from Standard 8 to 10th. ( Year - 2022-23 : Total 242 students from std 8 to 10th inclusive of 188 technical students ).</p>
                <p className="animate">Std.8 was started in 1995 and government approval for Std 8 was received in 1997.</p>
                <p className="animate">First batch for Standard 10th passed in the year 2000. Though Students in Secondary school come from socially and economically backward class, School management always strives to provide them good standard and quality of teaching.</p>
                <p className="animate">To ensure good results for Std X students as well as to ensure comprehensive or all -around development of students, School also provides skill based learning apart from regular school studies syllabus.</p>
                <p className="animate">School runs various extracurricular activities which helps to mould students as a good citizen inculcating values in them.</p>
                <ul className="animate">
                    School specialities:
                    <li>Consistent result of 99% for SSC boards.</li>
                    <li>Guidance to students based on their grades in studies
                        Arranging subject matter experts or specialist for guidance of students.</li>
                    <li>Extra classed conducted during summer and Diwali vacations.</li>
                </ul>
                <p className="animate">Technical education:<br />School imparts education in Electrical and Mechanical technology subjects under this section and exams for these subjects are conducted under SSC board. Consistent results of 100% achieved under these subjects. Technical subjects facilitate students to enrol for science stream, diploma or ITI streams.</p>
                <p className="animate">Laboratories:<br />School has the state-of-the-art laboratory for various subjects and encourages students to participate in various Science exhibitions, Inspire awards and many more such initiatives.</p>
                <p className="animate">Computer education:<br />School has well equipped computer lab with 15 computers. This lab is also utilised e-learning facility for students.</p>
                <ul className="animate">Sports:
                    <li>Students participate in the district level sports competitions.</li>
                    <li>School also organises inter-school sports competitions.</li>
                    <li>School ensures participation from all students in these sports events.</li>
                </ul>
                <ul className="animate">External exams:
                    <li>Students appear for Scholarship exams / National exam for economically backward students scholarships.</li>
                    <li>Students are also encouraged to participate in external exams, which helps them to get accustomed to competitive exams.</li>
                </ul>
                <ul className="animate">Social Activities:
                    <li className="animate">Students conduct lot of social activities in school as well as they participate in external social activities to help society.</li>
                    <li className="animate">Students volunteer at Blind school for girls.</li>
                    <li className="animate">Students have taken up cleanliness drives, Clean and neat school initiatives as well as they celebrate festivals in environmental friendly way. They have also worked for de-addiction drives.</li>
                    <li className="animate">Various social activities are also conducted in association with Lions and Rotary club, like rotary interact club for students etc.</li>
                </ul>
                <ul className="animate">Library Facility:
                    <li>School and Teachers library has a rich collection of more than 4000 books for reading and references.</li>
                    <li>Library offers facility of lending and borrowing books to students and this is managed by a librarian.</li>
                    <li>This encourages students to develop reading habit.</li>
                </ul>
                <p className="animate">Persistent foundation offers help to conduct classes for students with low grade and intelligent quotient.</p>
                <p className="animate">Students Counselling:<br/>Experience counsellors help students to resolve issues on personal or academic front.</p>
                <ul className="animate">
                    School Nutrition Food Program:
                    <li className="animate">Under this initiative Students are taught importance of good nutrition/food and importance of healthy body and soul through lectures, cooking competitions.</li>
                    <li className="animate">School work is conducted through collaborative working by Parent teachers association, school association adhering to government rules and compliances.</li>
                </ul>    
            </div>
        </section>
        </main>
        <Footer/>
        <ScrollBtn/>
        </div>
        );

};
export default School;