
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';
import  Malcom from '../assets/images/Malcom2.png'

export default function Footer(){
    return(
        <div className="flex-col pt-20">
            <div className="flex font-arial text-white justify-around">
                <div className="flex flex-col">
                    <h1 className="m-2">PRODUCTS</h1>
                    <div className="flex flex-col">
                        <h2 className="m-2">product 1</h2>
                        <h2 className="m-2">product 2</h2>
                        <h2 className="m-2">prodcut 3</h2>
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
                <div>
                    <img src={Malcom}></img>
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