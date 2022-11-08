import React from "react";
import img1 from '../../../assets/images/banner/img1.jpg'
import img2 from '../../../assets/images/banner/img2.png'
import img3 from '../../../assets/images/banner/img3.jpg'
import img4 from '../../../assets/images/banner/img4.png'
import img5 from '../../../assets/images/banner/img5.jpg'
import img6 from '../../../assets/images/banner/img6.png'

const Banner = () => {
  // const bannerSerial = [
  //     {
  //         image: image1,
  //         prev: 6,
  //         id: 1,
  //         next: 2
  //     },
  //     {
  //         image: image2,
  //         prev: 1,
  //         id: 2,
  //         next: 3
  //     },
  //     {
  //         image: image3,
  //         prev: 2,
  //         id: 3,
  //         next: 4
  //     },
  //     {
  //         image: image4,
  //         prev: 3,
  //         id: 4,
  //         next: 5
  //     },
  //     {
  //         image: image5,
  //         prev: 4,
  //         id: 5,
  //         next: 6
  //     },
  //     {
  //         image: image6,
  //         prev: 5,
  //         id: 6,
  //         next: 1
  //     }
  // ]

  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} alt="" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href={img2} alt="" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src="https://placeimg.com/800/200/arch" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src="https://placeimg.com/800/200/arch" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src="https://placeimg.com/800/200/arch" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
