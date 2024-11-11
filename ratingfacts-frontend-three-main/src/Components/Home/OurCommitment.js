import React from 'react';

const OurCommitment = ({commitments}) => {
    return (
        <section className={'our-commitment-to-truth section-gap-padding mb-5'}>
            <div className="container">
                <div className="row">
                    <div className="col-12 mb-4">
                        <h2>Our Commitment To Truth</h2>
                        <p className={'mb-4 mt-2 lead'}>Get the product information and user feedback to choose a
                            technology right for your business. Our promise to you
                        </p>
                    </div>
                    {commitments.map((commitment, index) => (<div className="col-lg-3 col-6 mb-4 mb-lg-0" key={index}>
                        <div className="commitment-card">
                            <i className={`fa-solid ${commitment.icon}`}></i>
                            <h4 className={'my-3'}>{commitment.title}</h4>
                            <p>{commitment.text}</p>
                        </div>
                    </div>))}
                </div>
            </div>
        </section>
    );
};

export default OurCommitment;
