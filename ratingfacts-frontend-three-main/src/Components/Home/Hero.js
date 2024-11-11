import React from 'react';
import Image from "next/image";
import banner from "@/assets/images/banner.jpg";

const Hero = () => {
    return (
        <section className={'hero'}>
            <div className="overly"></div>
            <Image src={banner} alt={'banner'}/>
            <div className="content">
                <h1>Make confident technology decisions</h1>
                <p className={'mt-4'}>Over 12 million buyers trust us to find the right tech annually</p>
                <div className="input-group justify-content-lg-start justify-content-center mt-4">
                    <input type="search" placeholder="Search"/>
                    <span className="input-group-text"><i className="fa-solid fa-magnifying-glass"></i></span>
                </div>
            </div>
        </section>
    );
};

export default Hero;
