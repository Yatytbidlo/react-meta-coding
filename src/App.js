import React from 'react';
import Navbar from "./components/navigationbar/Navbar"
import Aboutme from "./components/aboutme/Aboutme"
import Education from "./components/education/Education"
import Experience from "./components/experience/Experience"
import Footer from "./components/footer/footer";

const App = () => {
    return (
        <div>
            <Navbar />
            <Aboutme />
            <Education />
            <Experience />
            <Footer />
        </div>
    );
};

export default App;