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
            <h2>this i s my service page</h2>
            <div className='grid grid-cols-3 gap-7'>
                {
                    services.map(service => <ServiceCard service={service} key={service._id}></ServiceCard>)
                }
            </div>
            <AddField></AddField>
        </div>
    );
};

export default MyService;