import React from 'react';
import Image from "next/image";
import blog_img from "@/assets/images/blog-banner.png";

const BlogCard = () => {
    return (
        <div className="blog-card">
            <Image src={blog_img} alt={'blog banner'}/>
            <div className="p-4">
                <h4 className={'primary-text text-ellipsis my-3'}>Protect Yourself from Gift Protect Yourself from Gift </h4>
                <p className={'mb-3'}><strong><i className="fa-regular fa-clock"></i> January 30, 2022</strong></p>
                <p className={'paragraph-read-more'}>This is a snippet of the actual post or a description of what this
                    article has this is a extra line for lin
                    increase and also it need to balance</p>
            </div>
        </div>
    );
};

export default BlogCard;
