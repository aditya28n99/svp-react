
import './Styles/App.css';
import Topbar from './Components/Topbar';
// import Navbar from './Components/Navbar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import School from './Pages/School';
import JrCollege from './Pages/JrCollege';
import Gallery from './Pages/Gallery';
import ResponceData from './Components/ResponceData';

function App() {

  const animateData =() => {

    const observer = new IntersectionObserver((all_entries) => {

        all_entries.forEach((each_entry) => {

            if (each_entry.intersectionRatio > 0) {
                each_entry.target.classList.add("show");
            }
        })
    });
    const animate = document.querySelectorAll(".animate")
    animate.forEach((el) => observer.observe(el));
}

  return (
    <>
    <Router>
    <section onMouseOver={animateData}>
    <Topbar></Topbar>
    {/* <Navbar heading="Vidya Pratishthan, Maharashtra"/> */}
    <Routes>
      <Route path='/' Component={Home}/>
      <Route path='/school' Component={School}/>
      <Route path='/jrcollege' Component={JrCollege}/>
      <Route path='/gallery' Component={Gallery}/>
      <Route path='/responce' Component={ResponceData}/>
    </Routes>
    </section>
    </Router>
    </>
  );
};

export default App;
