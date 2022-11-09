import React from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import useTitle from "../Hooks/useTitle";
import Features from "./Features/Features";


const notify = () => toast(`added to cart list`);

const ServiceDetails = () => {
  const serviceDetails = useLoaderData();
  const {_id, title, img, service_id, price, description, facility} = serviceDetails;
  useTitle(`details`);
  return (
    <div className="mt-8 mb-20">
        <div className="card lg:card-side bg-base-100 shadow-xl ">
      <figure className="object-fill">
        <img className="h-full w-96" src={img} alt="Album" />
      </figure>
      <div className="card-body w-3/5">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions flex items-center justify-between">
          <p>price: ${price}</p>
          <button onClick={notify} className="btn btn-primary">
            Checkout Now
          </button>
        </div>
      </div>
    </div>
    <h2 className="capitalize text-center text-4xl font-semibold my-10">what the feature of <span className="text-rose-600">{title}</span> service?</h2>
    <div className="grid grid-cols-2 gap-14">
        {
            facility.map(facil => <Features facil={facil} key={facil.key}></Features>)
        }
    </div>
    </div>
  );
};

export default ServiceDetails;