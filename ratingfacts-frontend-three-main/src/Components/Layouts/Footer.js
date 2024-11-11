import React from 'react';
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import Link from "next/link";

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 mb-4 mb-lg-0 text-center text-lg-start">
                        <Image src={logo} alt="logo" width={200} height={42} priority={true}/>
                        <p className={'py-3 default-text'}>
                            The purpose of a FAQ is generally to provide information on frequent questions or concerns.
                        </p>
                        <div className="social-media">
                            <Link href={''} target={'_blank'}> <i className="fa-brands fa-x-twitter"></i></Link>
                            <Link href={''} target={'_blank'}> <i className="fa-brands fa-facebook-f"></i></Link>
                            <Link href={''} target={'_blank'}> <i className="fa-brands fa-instagram"></i></Link>
                            <Link href={''} target={'_blank'}> <i className="fa-brands fa-github"></i></Link>
                        </div>
                    </div>
                    <div className="col-lg-3 mb-4 mb-lg-0">
                        <h5>Company</h5>
                        <ul>
                            <li><Link href={''}>Service</Link></li>
                            <li><Link href={''}>Resources</Link></li>
                            <li><Link href={''}>About us</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 mb-4 mb-lg-0">
                        <h5>Help</h5>
                        <ul>
                            <li><Link href={''}>Customer Support</Link></li>
                            <li><Link href={''}>Terms & Conditions</Link></li>
                            <li><Link href={''}>Privacy Policy</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 mb-4 mb-lg-0">
                        <h5>Subscribe to Newsletter</h5>
                        <div className="input-group justify-content-center  mt-4">
                            <input type="email" placeholder="Enter email address"/>
                            <span className="input-group-text">Join</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-separator"></div>
            <div className="container footer-credit">
                <div className="row">
                    <div className="col-12 text-center">
                        <p className={'text-center default-text'}>© Copyright 2024, All Rights Reserved by XYZ Company</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
