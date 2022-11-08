import React from 'react';
import img1 from '../../../assets/images/banner/img1.jpg';
import img2 from '../../../assets/images/banner/img2.png';
import img3 from '../../../assets/images/banner/img3.jpg';
import img4 from '../../../assets/images/banner/img4.png';
import img5 from '../../../assets/images/banner/img5.jpg';
import img6 from '../../../assets/images/banner/img6.png';
import BannerSlide from './BannerSlide'

const bannerData = [
    {
        image: img1,
        prev: 6,
        id: 1,
        next: 2
    },
    {
        image: img2,
        prev: 1,
        id: 2,
        next: 3
    },
    {
        image: img3,
        prev: 2,
        id: 3,
        next: 4
    },
    {
        image: img4,
        prev: 3,
        id: 4,
        next: 5
    },
    {
        image: img5,
        prev: 4,
        id: 5,
        next: 6
    },
    {
        image: img6,
        prev: 5,
        id: 6,
        next: 1
    }
]

const Banner = () => {
    return (
        <div className="carousel w-full py-10">
            {
              bannerData.map(slider => <BannerSlide key={slider.id} slider={slider}></BannerSlide>)
            }
            
        </div>
    );
};

export default Banner;