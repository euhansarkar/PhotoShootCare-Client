import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';
import Banner from '../Banner/Banner';
import Services from './Services/Services';

const Home = () => {
    const services = useLoaderData();
    useTitle(`home`);
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
        </div>
    );
};

export default Home;