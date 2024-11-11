import React from 'react';
import Image from "next/image";
import blog_img from "@/assets/images/blog-banner.png";
import BlogCard from "@/Components/Global/BlogCard";

const Blog = ({blogs}) => {
    return (
        <section className={'insights section-gap-padding'}>
            <div className="container">
                <div className="row">
                    <div className="col-12 mb-4">
                        <h2>B2B Insights</h2>
                        <p>Information and resources for technology buyers</p>
                    </div>
                    {blogs.map((blog, index) => (
                        <div className="col-lg-4 col-md-6 col-12 mb-4" key={index}>
                            <BlogCard/>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default Blog;
