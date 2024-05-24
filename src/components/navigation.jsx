import React from "react";
import '../assets/Navigation.css';
import logo from '../assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faX } from '@fortawesome/free-solid-svg-icons';




function Navigation() {
  return (
  <div>
      <nav className="flex justify-between items-center w-[92%]">
        <div className="flex w-26  p-3">
          <h1 className="ak  text-white font-extrabold font-serif ">MALCOM COMPANY</h1>
        </div>

        <div className="md:static absolute md:bg-black lg:bg-transparent md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5">
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[6vw] gap-6">
            <li><a href="" className="hover:text-purple-300 text-purple-400 text-base hover:underline hover:underline-offset-4 decoration-white decoration-solid ">Product</a></li>
            <li><a href="" className="hover:text-purple-300 text-purple-400 text-base hover:underline hover:underline-offset-4 decoration-white decoration-solid ">Services</a></li>
            <li><a href="" className="hover:text-purple-300 text-purple-400 text-base hover:underline hover:underline-offset-4 decoration-white decoration-solid ">Careers</a></li>
            <li><a href="" className="hover:text-purple-300 text-purple-400 text-base hover:underline hover:underline-offset-4 decoration-white decoration-solid ">About</a></li>
          </ul>
        </div>
        <div>
          <button className=" hover:bg-white text-lg font-bold hover:w-28 w-28 font-Mr  hover:h-7 hover:rounded-2xl hover:text-purple-800 hover:font-bold text-white">Donate Us</button>
        </div>

        <div className=" items-center cursor-pointer md:hidden lg:hidden sm:block ">
        <FontAwesomeIcon icon={faBars} style={{ color: 'white', width:'25px', height: '35px' }} size="6x" />
        <FontAwesomeIcon icon={faX} style={{ color: 'white', width:'25px', height: '35px' }} />
        </div>
      </nav>
    </div>
  );
}

export default Navigation;