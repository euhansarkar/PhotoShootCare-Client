import React from "react";

const Works = () => {
  return (
    <section className="p-6">
    <h2 className="font-bold text-center my-10 text-4xl uppercase">our achivements</h2>
      <div className="container bg-slate-100 mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-3">
        <div className="flex text-primary flex-col justify-start m-2 lg:m-6">
          <p className="text-4xl font-bold leading-none lg:text-6xl">50+</p>
          <p className="text-sm sm:text-base">Clients</p>
        </div>
        <div className="flex text-primary flex-col justify-start m-2 lg:m-6">
          <p className="text-4xl font-bold leading-none lg:text-6xl">89K</p>
          <p className="text-sm sm:text-base">Followers on social media</p>
        </div>
        <div className="flex text-primary flex-col justify-start m-2 lg:m-6">
          <p className="text-4xl font-bold leading-none lg:text-6xl">3</p>
          <p className="text-sm sm:text-base">Published books</p>
        </div>
        <div className="flex text-primary flex-col justify-start m-2 lg:m-6">
          <p className="text-4xl font-bold leading-none lg:text-6xl">800000+</p>
          <p className="text-sm sm:text-base">photos taken</p>
        </div>
        <div className="flex text-primary flex-col justify-start m-2 lg:m-6">
          <p className="text-4xl font-bold leading-none lg:text-6xl">22</p>
          <p className="text-sm sm:text-base">Years of experience</p>
        </div>
        <div className="flex text-primary flex-col justify-start m-2 lg:m-6">
          <p className="text-4xl font-bold leading-none lg:text-6xl">10+</p>
          <p className="text-sm sm:text-base">Workshops</p>
        </div>
      </div>
    </section>
  );
};

export default Works;
