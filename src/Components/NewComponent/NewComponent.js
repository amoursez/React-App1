import React from 'react';
import Navbar from  '../Navbar/Navbar.jsx'
import Footer from '../Footer/Footer.jsx'
import Section from '../Section/Section.jsx'


const NewComponent = () => {
    let arr = ["Bengal","Brazilian Shorthair","British Longhair"]
    return (
        <div>
            <Navbar />
            <Section/>
            <Footer  arr={arr}/>
        </div>
    );
};

export default NewComponent;