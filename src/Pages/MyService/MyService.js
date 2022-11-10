import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import ServiceCard from '../Shared/ServiceCard/ServiceCard';
import AddField from './AddField/AddField';

const MyService = () => {

    const [services, setServices] = useState([]);
    const {user} = useContext(AuthContext);

    useEffect(() => {
        fetch(`https://service-review-server-five.vercel.app/reviews?email=${user?.email}`)
          .then((res) => res.json())
          .then((data) => setServices(data));
      }, [user?.email]);


    return (
        <div>
            <h2 className='mt-10 mb-4 text-center font-bold text-5xl'>Your Services</h2>
            <div className='grid md:grid-cols-3 my-5 md:gap-7'>
                {
                    services.map(service => <ServiceCard service={service} key={service._id}></ServiceCard>)
                }
            </div>
            <AddField></AddField>
        </div>
    );
};

export default MyService;