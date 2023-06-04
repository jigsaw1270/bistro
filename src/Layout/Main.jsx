import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../pages/Shared/Footer';
import Navbar from '../pages/Shared/Navbar';

const Main = () => {
    const location = useLocation();
    console.log(location);
    const noHeaderfooter = location.pathname.includes('login') || location.pathname.includes('signup')
    return (
        <div>
      { noHeaderfooter ||  <Navbar></Navbar>}
            <Outlet></Outlet>
           {
            noHeaderfooter ||  <Footer></Footer>
           }
        </div>
    );
};

export default Main;