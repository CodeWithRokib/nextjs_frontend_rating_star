"use client"
import Image from "next/image";
import logo from '@/assets/images/logo.png'
import banner from '@/assets/images/banner.jpg'
import cat from '@/assets/images/cat.png'
import blog_img from '@/assets/images/blog-banner.png'
import Link from "next/link";
import 'swiper/css/bundle';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Grid} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import Hero from "@/Components/Home/Hero";
import CategorySection from "@/Components/Home/CategorySection";
import TopReviewedProduct from "@/Components/Home/TopReviewedProduct";
import OurCommitment from "@/Components/Home/OurCommitment";
import RecentReview from "@/Components/Home/RecentReview";
import SellAuthentic from "@/Components/Home/SellAuthentic";
import Blog from "@/Components/Home/Blog";
import Jonjal from "@/Components/Home/Jonjal";

export default function Home() {

    const category = [{name: 'Cat one'}, {name: 'Cat two'}, {name: 'Cat three'}, {name: 'Cat four'}]

    const top_reviewed_products = [{name: 'ImplyCart', category: 'Beauty & Well-being'}, {
        name: 'Scatterhitam-slot',
        category: 'All'
    }, {name: 'Heise', category: 'All'}, {name: 'Twolier', category: 'All'}, {name: 'Purerawz', category: 'All'}, {
        name: 'Buildmyplays',
        category: 'All'
    }, {name: 'Eative', category: 'All'}, {name: 'Tilers-world', category: 'All'}, {name: 'Harmonypharm', category: 'All'}, {
        name: 'Simplymac',
        category: 'All'
    }, {name: 'Bywax', category: 'All'}, {name: 'Minedollars', category: 'All'}, {name: 'Tradefx', category: 'All'}, {
        name: 'Burora',
        category: 'All'
    }, {name: 'Batterybuy', category: 'All'}, {name: 'Pearlwax', category: 'All'},]

    const commitments = [{
        icon: 'fa-award',
        title: 'Quality First',
        text: 'Comprehensive content to understand the ins and outs of a product before you buy.'
    }, {
        icon: 'fa-award',
        title: 'Quality First',
        text: 'Comprehensive content to understand the ins and outs of a product before you buy.'
    }, {
        icon: 'fa-award',
        title: 'Quality First',
        text: 'Comprehensive content to understand the ins and outs of a product before you buy.'
    }, {icon: 'fa-award', title: 'Quality First', text: 'Comprehensive content to understand the ins and outs of a product before you buy.'}]

    const recent_reviews = [{name: 'review'}, {name: 'review'}, {name: 'review'}, {name: 'review'}, {name: 'review'}, {name: 'review'}, {name: 'review'}, {name: 'review'}, {name: 'review'}, {name: 'review'}, {name: 'review'}, {name: 'review'}, {name: 'review'}, {name: 'review'}, {name: 'review'}, {name: 'review'}, {name: 'review'}, {name: 'review'}, {name: 'review'}, {name: 'review'}, {name: 'review'}, {name: 'review'}, {name: 'review'}, {name: 'review'}, {name: 'review'}, {name: 'review'}, {name: 'review'},]

    const sell_authentic = [
        {title: ''},
        {title: ''},
        {title: ''},
    ]

    const blogs = [
        {title: ''},
        {title: ''},
        {title: ''},
        {title: ''},
        {title: ''},
        {title: ''},
    ]

    return (<div>
        <Hero/>
        <CategorySection category={category}/>
        <TopReviewedProduct top_reviewed_products={top_reviewed_products}/>
        <OurCommitment commitments={commitments}/>
        <RecentReview recent_reviews={recent_reviews}/>
        <SellAuthentic sell_authentic={sell_authentic}/>
        <Blog blogs={blogs}/>
        <Jonjal/>
    </div>);
}
