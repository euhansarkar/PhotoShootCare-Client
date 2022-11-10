import React, { useEffect, useState } from "react";
import ServiceCard from "../../../Shared/ServiceCard/ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch(`https://service-review-server-five.vercel.app/services`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  });
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
      <div className="grid grid-cols-3 gap-10 my-10">
        {services.map((service) => (
          <ServiceCard service={service} key={service._id}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
