import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../Hooks/useTitle";
import ServiceCard from "../Shared/ServiceCard/ServiceCard";

const Services = () => {
  const services = useLoaderData();
  useTitle(`services`);
  return (
    <div className="my-12">
      <h2 className="text-5xl text-center capitalize font-bold">
        Our most popular services
      </h2>
      <p className="mx-auto my-5 w-4/6">
      You are planning a laid-back wedding, with a big emphasis on fun and all the things that make you happy. And you want to enjoy every moment of that, safe in the knowledge it’s all being documented by a pro.
      </p> 
      <div className="grid md:grid-cols-2 md:gap-10 md:my-10">
        {services.map((service) => (
          <ServiceCard service={service} key={service._id}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
