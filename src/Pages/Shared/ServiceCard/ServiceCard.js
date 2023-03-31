import React from "react";
import toast from "react-hot-toast";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";


const ServiceCard = ({ service }) => {
  const { _id, title, img, price, description } = service;
  return (
    <div className="flex flex-col max-w-lg p-6 my-5 space-y-6 overflow-hidden rounded-lg shadow-md bg-gray-200">
      <div>
        <h2 className="mb-1 text-xl font-semibold">{title}</h2>
      </div>

      <div>
        <PhotoProvider>
          <PhotoView src={img}><img
            src={img}
            alt=""
            className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500"
          /></PhotoView>
        </PhotoProvider>
        <h3>Price: ${price}</h3>
        <p className="text-md my-3 dark:text-gray-400">
          {description?.length > 100
            ? description.slice(0, 100) + `.....`
            : description}
        </p>
        <Link to={`/services/${_id}`}>
          <button className="btn btn-outline w-full btn-secondary">
            show more
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
