import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../Hooks/useTitle";
import ServiceCard from "../Shared/ServiceCard/ServiceCard";

const Services = () => {
  const services = useLoaderData();
  useTitle(`services`);
  return (
    <div>
      <h2 className="text-5xl text-center capitalize font-bold">
        Our most popular services
      </h2>
      <p className="mx-auto my-3 w-4/6">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut unde cum
        aut atque quasi asperiores, sunt, maiores, repudiandae inventore ipsa
        neque corrupti tempora animi.
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
