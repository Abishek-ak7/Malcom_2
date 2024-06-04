import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';
import Contact from './Contact'

export default function Footer(){
    return(
        <div>
        <div className=" hidden font-arial text-white lg:hidden md:block sm:hidden">
                <div className="md:flex-col">
                    <div className="md:flex justify-around">
                        <div className="flex flex-col">
                            <h1 className="m-2">PRODUCTS</h1>
                            <div className="flex flex-col">
                            <h2 className="m-2">Data security</h2>
                        <h2 className="m-2">Mobile security</h2>
                        <h2 className="m-2">Fraud detection</h2>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="m-2">COMPANY</h1>
                            <div>
                                <h2 className="m-2">About</h2>
                                <h2 className="m-2">Careers</h2>
                                <h2 className="m-2">Security</h2>
                                <h2 className="m-2">Terms</h2>
                                <h2 className="m-2">Privacy</h2>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="m-2">RESOURCES</h1>
                            <div>
                                <h2 className="m-2">Blog</h2>
                                <h2 className="m-2">Customers</h2>
                                <h2 className="m-2">Events</h2>
                                <h2 className="m-2">Open Datasets</h2>
                                <h2 className="m-2">Documentation</h2>
                                <h2 className="m-2">Guides</h2>
                                <h2 className="m-2">Community</h2>
                                <h2 className="m-2">All Readliness Report 2023</h2>
                            </div>
                        </div>
                    </div>
                    <div className="md:flex md:justify-around mt-6">
                        <div className="flex flex-col">
                            <h1>CONTACT</h1>
                            <div>
                                <h2 className="m-2">product@malcom.com</h2>
                                <h2 className="m-2">support@malcom.com</h2>
                                <h2 className="m-2">careers@malcom.com</h2>
                                <h2 className="m-2">about@malcom.com</h2>
                            </div>
                            <div className="flex justify-around m-2">
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faXTwitter} size="2x" /></a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faFacebook} size="2x" /></a>
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <Contact/>
                        </div>
                    </div>
                </div>
        </div>
        <div className=" hidden font-arial text-white lg:block md:hidden sm:hidden">
                <div className="flex justify-around">
                        <div className="flex flex-col ">
                            <h1 className="m-2">PRODUCTS</h1>
                            <div className="flex flex-col">
                            <h2 className="m-2">Data security</h2>
                           <h2 className="m-2">Mobile security</h2>
                            <h2 className="m-2">Fraud detection</h2>
                            </div>
                        </div>
                        <div className="flex flex-col ">
                            <h1 className="m-2">COMPANY</h1>
                            <div>
                                <h2 className="m-2">About</h2>
                                <h2 className="m-2">Careers</h2>
                                <h2 className="m-2">Security</h2>
                                <h2 className="m-2">Terms</h2>
                                <h2 className="m-2">Privacy</h2>
                            </div>
                        </div>
                        <div className="flex flex-col ">
                            <h1 className="m-2">RESOURCES</h1>
                            <div>
                                <h2 className="m-2">Blog</h2>
                                <h2 className="m-2">Customers</h2>
                                <h2 className="m-2">Events</h2>
                                <h2 className="m-2">Open Datasets</h2>
                                <h2 className="m-2">Documentation</h2>
                                <h2 className="m-2">Guides</h2>
                                <h2 className="m-2">Community</h2>
                                <h2 className="m-2">All Readliness Report 2023</h2>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <h1>CONTACT</h1>
                            <div>
                                <h2 className="m-2">product@malcom.com</h2>
                                <h2 className="m-2">support@malcom.com</h2>
                                <h2 className="m-2">careers@malcom.com</h2>
                                <h2 className="m-2">about@malcom.com</h2>
                            </div>
                            <div className="flex m-2">
                                <a href="https://twitter.com" target="_blank" className="m-3" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faXTwitter} size="2x"  /></a>
                                <a href="https://linkedin.com" target="_blank" className="m-3" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
                                <a href="https://facebook.com" target="_blank" className="m-3" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faFacebook} size="2x" /></a>
                            </div>
                        </div>
            
                        <div className="w-1/3">
                            <Contact/>
                        </div>
                </div>
        </div>
            <div className="flex-col font-arial text-white block lg:hidden md:hidden sm:block">
                <div className="flex flex-col justify-center items-center text-xl">
                    <h1 className="m-2 text-2xl font-bold mt-6">PRODUCTS</h1>
                    
                        <h2 className="m-2">Data security</h2>
                        <h2 className="m-2">Mobile security</h2>
                        <h2 className="m-2">Fraud detection</h2>
            
                </div>
                <div className="flex flex-col justify-center items-center text-xl">
                    <h1 className="m-2 text-2xl font-bold mt-6">COMPANY</h1>
                    
                        <h2 className="m-2">About</h2>
                        <h2 className="m-2">Careers</h2>
                        <h2 className="m-2">Security</h2>
                        <h2 className="m-2">Terms & policies</h2>
                        
                
                </div>
                <div className="flex flex-col justify-center items-center text-xl">
                    <h1 className="m-2 text-2xl font-bold mt-6">RESOURCES</h1>
                
                        <h2 className="m-2">Blog</h2>
                        <h2 className="m-2">Customers</h2>
                        <h2 className="m-2">Events</h2>
                        <h2 className="m-2">Open Datasets</h2>
                        <h2 className="m-2">Documentation</h2>
                        <h2 className="m-2">Guides</h2>
                        <h2 className="m-2">Community</h2>
                        <h2 className="m-2">All Readliness Report 2023</h2>
                
                </div>
                <div className="flex flex-col justify-center items-center text-xl">
                    <h1 className="m-2 text-2xl font-bold mt-6">CONTACT</h1>
                  
                        <h2 className="m-2">product@malcom.com</h2>
                        <h2 className="m-2">support@malcom.com</h2>
                        <h2 className="m-2">careers@malcom.com</h2>
                        <h2 className="m-2">about@malcom.com</h2>
                  
                    <div className="flex m-2">
                        <a href="https://twitter.com" target="_blank" className="m-2" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faXTwitter} size="2x" /></a>
                        <a href="https://linkedin.com" target="_blank" className="m-2" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
                        <a href="https://facebook.com" target="_blank" className="m-2" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook} size="2x" /></a>
                    </div>
                </div>
                <div className="w-full">
                   <Contact/>
                </div>
            </div>
            <div className="border-t-2 border-dashed p-2 mx-2 border-gray-900 "></div>
            <div className="flex text-white p-3 ">
                <h3 className="flex justify-start">Copyright&copy; 2024 Malcom Company. All rights reserved.</h3>
                <h3 className="ml-auto">Terms of Use & Privacy Policy</h3>
            </div>
        </div>
        
    );
}