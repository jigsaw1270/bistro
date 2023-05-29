import React from 'react';
import Banner from './Banner/Banner';
import Catagory from './Catagories/Catagory';
import Popularmenu from './Catagories/Popularmenu/Popularmenu';
import Featured from '../Featured/Featured';
import Testimonials from '../Testimonial/Testimonials';
import Bistroboss from '../../../components/Bistroboss';


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Catagory></Catagory>
           <Bistroboss></Bistroboss>
           <Popularmenu></Popularmenu>
           <Featured></Featured>
           <Testimonials></Testimonials>
        </div>
    );
};

export default Home;