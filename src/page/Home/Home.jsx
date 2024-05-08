import React from 'react';
import Banner from '../../components/Banner/Banner';
import Products from '../Products/Products';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const allproducts = useLoaderData();
    console.log(allproducts);
    return (
        <div>
            <Banner></Banner>
            <Products allproducts={allproducts}></Products>
        </div>
    );
};

export default Home;