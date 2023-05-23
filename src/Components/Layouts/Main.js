import React from 'react';
import Navbars from '../Pages/Shared/Navbars/Navbars';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Navbars></Navbars>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;