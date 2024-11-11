import React from 'react';

const SellAuthentic = ({sell_authentic}) => {
    return (
        <section className={'sell_authentically'}>
            <div className="container">
                <div className="row">
                    <div className="col-12 mb-4">
                        <h2>Sell Authentically</h2>
                        <p className={'default-text lead text-center text-lg-start'}>We also help tech vendors </p>
                    </div>
                    {sell_authentic.map((item, index) => (
                        <div className="col-lg-4 mb-4 mb-lg-0" key={index}>
                            <div className="authentic-card">
                                <i className="fa-regular fa-message"></i>
                                <h4 className={'py-3'}>Customer Voice at Scale</h4>
                                <p>The Trust Radius TRUTH Awards Ceremony is an annual
                                    company tradition highlighting the people that embody
                                    our core values. Award recipients are nominated</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="row justify-content-between align-items-center my-4">
                    <div className="col-lg-7">
                        <h4 className={'default-text get-start-today-title text-center text-lg-start'}>Buyers want to hear from peers they can trust</h4>
                    </div>
                    <div className="col-lg-3 d-lg-block d-none">
                        <div className="arrow mt-1">
                            <div className="arrow-line"></div>
                            <i className="fa-solid fa-arrow-right default-text"></i>
                        </div>
                    </div>
                    <div className="col-lg-2 text-center text-lg-end mt-4 mt-lg-0">
                        <button className={'secondary-button ms-4'}>Get Start Today</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SellAuthentic;
