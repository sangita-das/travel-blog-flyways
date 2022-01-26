import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import BlogHome from '../BlogHome/BlogHome';
import HomeBanner from '../HomeBanner/HomeBanner';
import MidBanner from '../MidBanner/MidBanner';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';


const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <HomeBanner></HomeBanner>
            <BlogHome></BlogHome>
            <MidBanner></MidBanner>
            <Services></Services>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </div>
    );
};

export default Home;