import React from 'react';
import Home from './Home';
import About from './About';
import Services from './Services';
import Revenues from './Revenues';
import Understanding from './Understanding';
import Members from './Members';
import Review from './Review';
import Footer from './footer';



function Main() {
    return(
        <div className='bg-black'>
            <Home />
            <About />
            <Services />
            <Revenues />
            <Understanding />
            {/* <Members /> */}
            <Review />
            <Footer />
        </div>
    );


}
export default Main;