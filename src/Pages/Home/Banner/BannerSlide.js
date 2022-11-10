import React from 'react';
import { Link } from 'react-router-dom';
import './BannerSlide.css';

const BannerSlide = ({slider}) => {
    const {image, id, prev, next} = slider;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
                <div className='carousel-img'>
                    <img src={image} alt="" className="w-full rounded-xl" />
                </div>
                <div className="absolute text-2xl flex justify-end transform -translate-y-1/2 left-24 top-1/4"> 
                    <h1 className='md:text-6xl font-bold text-white'>
                    When I photograph <br />
                    I make love <br />
             
                    </h1>
                </div>
                <div className="absolute hidden md:block flex justify-end transform -translate-y-1/2 w-2/5 left-24 top-1/2">
                    <p className='text-xl d text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                </div>
                <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-3/4">
                    <Link to={`/services`}>
                    <button className="btn btn-warning mr-5">Get Services</button>
                    </Link>
                </div>
                <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                    <a href={`#slide${next}`} className="btn btn-circle">❯</a>
                </div>
            </div>
    );
};

export default BannerSlide;