import React from 'react';
import Home from './Home';
import About from './About';
import Services from './Services';
import Revenues from './Revenues';
import Understanding from './Understanding';
import Members from './Members';
import Customer from './Customer';



function Main() {
    return(
        <div className='bg-black'>
            <Home />
            <About />
            <Services />
            <Revenues />
            <Understanding />
            <Members />
            <Customer />
        </div>
    );


}
export default Main;