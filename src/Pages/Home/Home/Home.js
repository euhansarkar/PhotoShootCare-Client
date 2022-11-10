import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';
import Banner from '../Banner/Banner';
import Services from './Services/Services';
import Works from './Works/Works';

const Home = () => {
    const services = useLoaderData();
    useTitle(`home`);
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Works></Works>
        </div>
    );
};

export default Home;