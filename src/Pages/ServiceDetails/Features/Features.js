import React from 'react';

const Features = ({facil}) => {
    const {name, details} = facil; 
    return (
        <div className='bg-purple-200 rounded p-5 '>
            <h2 className='capitalize text-center text-2xl font-semibold'>{name}</h2>
            <p className='text-center'>{details}</p>
        </div>
    );
};

export default Features;