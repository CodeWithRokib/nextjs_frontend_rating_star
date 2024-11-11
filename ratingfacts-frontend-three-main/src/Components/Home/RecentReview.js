import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Grid, Pagination} from "swiper/modules";

const RecentReview = ({recent_reviews}) => {
    return (<section className={'recent-reviews mb-5'}>
            <div className="container">
                <div className="row">
                    <div className="col-12 mb-4">
                        <h2>Recent reviews</h2>
                    </div>
                    <div className="swiper">
                        <Swiper
                            slidesPerView={3}
                            grid={{
                                rows: 3, fill: 'row',
                            }}
                            spaceBetween={24}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Grid, Pagination]}
                            className="mySwiper"
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                    grid: {
                                        rows: 2, fill: 'row',
                                    }
                                }, 768: {
                                    slidesPerView: 2,
                                    grid: {
                                        rows: 2, fill: 'row',
                                    }
                                }, 1200: {
                                    slidesPerView: 3,
                                },
                            }}
                        >
                            {recent_reviews.map((recent_review, index) => (<div className="col-lg-4 mb-4" key={index}>
                                <SwiperSlide>
                                    <div className="review-card">
                                        <div className="d-flex justify-content-between">
                                            <p><strong>MD. MAINUL HASAN</strong></p>
                                            <p><small>2 days ago</small></p>
                                        </div>
                                        <div className="separator"></div>

                                        <p className={'primary-text company-name'}><strong>Shopping Corner</strong></p>
                                        <div className="stars my-3">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                        <p className={'text-thin'}>Lost over $12500 on this site, Fortunately after reading a review, I found
                                            help from For Help On Refund contact them for assistance. they rescued me</p>
                                    </div>
                                </SwiperSlide>
                            </div>))}
                        </Swiper>
                    </div>
                </div>


            </div>
        </section>);
};

export default RecentReview;
