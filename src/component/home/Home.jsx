import React from 'react';
import Header from '../header/Header';
import { Outlet } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
const Home = () => {
    return (
        <div>
            <h3>This is Home Section</h3>
            <Header></Header>
            <Outlet></Outlet>
            <Toaster />
        </div>
    );
};

export default Home;