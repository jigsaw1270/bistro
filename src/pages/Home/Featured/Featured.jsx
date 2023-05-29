import React from 'react';
import Sectionstittle from '../../../components/Sectionstittle';
import featuedimg from  '../../../assets/home/featured.jpg';
import './Featured.css'

const Featured = () => {
    return (
        <div className='pt-8 my-16 text-white bg-fixed featured-item'>
        <Sectionstittle subHeading={"Check it out"}
        heading={'Featured Item'} ></Sectionstittle>
        <div className='items-center justify-center py-8 pb-12 space-x-4 px-36 md:flex'>
            <div>
                <img src={featuedimg} alt="" />
            </div>
            <div>
                <p>Aug 20, 2029</p>
                <p className='uppercase'>Where can i get some?</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium reprehenderit odit, in molestias ratione possimus aspernatur vel neque reiciendis quia maiores, impedit maxime enim, ducimus quam illum minus dolorem consequuntur! Aliquid saepe accusantium sapiente hic.</p>
                <button className="my-4 border-0 border-b-4 btn btn-outline">Order Now</button>
            </div>
        </div>
            
        </div>
    );
};

export default Featured;