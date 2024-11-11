import React from 'react';

const TopReviewedProduct = ({top_reviewed_products}) => {
    return (
        <section className={'top-reviewed-product section-gap'}>
            <div className="container">
                <div className="row">
                    <div className="col-12 mb-4">
                        <h2>Top Reviewed Product</h2>
                    </div>
                    {top_reviewed_products.map((top_reviewed_product, index) => (<div className="col-lg-3 col-md-4 col-6 mb-4" key={index}>
                        <div className="top-reviewed-card">
                            <p><strong>{top_reviewed_product.name}</strong></p>
                            <p>Categories : {top_reviewed_product.category}</p>
                        </div>
                    </div>))}

                </div>
            </div>
        </section>
    );
};

export default TopReviewedProduct;
