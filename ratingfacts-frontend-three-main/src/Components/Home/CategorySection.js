import React from 'react';
import Image from "next/image";
import cat from "@/assets/images/cat.png";

const CategorySection = ({category}) => {
    return (
        <section className={'category-section section-gap-padding'}>
            <div className="container">
                <div className="row justify-content-center">
                    {category.map((item, index) => (<div className="col-md-3 col-6 text-center mb-4 mb-lg-0" key={index}>
                        <div className="category-circle">
                            <Image src={cat} alt={'category'}/>
                            <p className={'default-text mt-3'}>{item.name}</p>
                        </div>
                    </div>))}
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-3 col-8 mt-5">
                        <div className="d-grid">
                            <button className={'primary-button'}>View all category</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CategorySection;
