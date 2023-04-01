import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import Rating from "react-rating";
import { BsStarFill } from "react-icons/bs";
import { useForm } from "react-hook-form";

const AddReview = ({ serviceDetails }) => {
  const [rating, setRating] = useState(4.5);
  const apiKey = process.env.REACT_APP_IMGBB_KEY;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const { _id, title, img, service_id, price, description, facility } =
    serviceDetails;
  const { user } = useContext(AuthContext);

  const handleAddReview = (data) => {
    const { address, email, message, name, phone } = data;
    const image = data.img[0];

    const formData = new FormData();
    formData.append(`image`, image);
    const url = `https://api.imgbb.com/1/upload?key=8fab73a19983cf600537a30569d42841`;

    fetch(url, {
      method: `POST`,
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          console.log(imgData.data.url);

          const review = {
            service: _id,
            service_id,
            serviceName: title,
            reviewer: name,
            email,
            phone,
            address,
            image: imgData.data.url,
            rating,
            reviewText: message,
          };

          fetch(`https://service-review-server-five.vercel.app/reviews`, {
            method: `POST`,
            headers: {
              "Content-Type": `application/json`,
            },
            body: JSON.stringify(review),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.acknowledged) {
                toast(`your review added successfully`);
              }
            })
            .catch((err) => console.error(err));
            reset();
        }
      });
  };

  return (
    <div className="my-7 bg-gray-100 p-10">
      <h2 className="font-bold my-6 text-4xl capitalize text-pink-600 text-center rouonded-md">
        add your review
      </h2>
      <form onSubmit={handleSubmit(handleAddReview)}>
        <div className="grid grid-cols-2 gap-4">
          <div className="form-control">
            <input
              {...register("name", {
                required: `name is required`,
              })}
              type="text"
              placeholder="Full Name"
              className="input input-bordered input-secondary w-full"
            />
            {errors?.name && (
              <p className="text-red-400">{errors?.name?.message}</p>
            )}
          </div>

          <div className="form-control">
            <input
              {...register("address", {
                required: `address is required`,
              })}
              type="text"
              placeholder="Address"
              className="input input-bordered input-secondary w-full"
            />
            {errors?.address && (
              <p className="text-red-400">{errors?.address?.message}</p>
            )}
          </div>

          <div className="form-control">
            <input
              {...register("img", {
                required: `img is required`,
              })}
              type="file"
              placeholder="image"
              className="input input-bordered input-secondary w-full"
            />
            {errors?.img && (
              <p className="text-red-400">{errors?.img?.message}</p>
            )}
          </div>

          <div className="form-control">
            <fieldset disabled>
              <input
                {...register("email", {
                  required: `email is required`,
                })}
                type="email"
                placeholder="email"
                defaultValue={user?.email || `undefined`}
                className="input input-bordered input-secondary w-full"
              />
              {errors?.email && (
                <p className="text-red-400">{errors?.email?.message}</p>
              )}
            </fieldset>
          </div>

          <div className="form-control">
            <input
              {...register("phone", {
                required: `phone number is required`,
              })}
              type="text"
              placeholder="phone"
              className="input input-bordered input-secondary w-full"
            />
            {errors?.phone && (
              <p className="text-red-400">{errors?.phone?.message}</p>
            )}
          </div>
        </div>
        <div>
          <div className="form-control my-4">
            <textarea
              {...register("message", {
                required: `message is required`,
              })}
              type="textarea"
              placeholder="message"
              className="input input-bordered input-secondary w-full"
            />
            {errors?.message && (
              <p className="text-red-400">{errors?.message?.message}</p>
            )}
          </div>
        </div>
        <div className="flex items-center justify-center gap-10">
          <h2 className="font-bold text-2xl capitalize">your rating</h2>
          <Rating
            initialRating={rating}
            emptySymbol={
              <BsStarFill className="text-gray-400 font-bold text-4xl" />
            }
            fullSymbol={
              <BsStarFill className="text-yellow-400 text-4xl font-bold" />
            }
            onChange={handleRatingChange}
          ></Rating>
        </div>
        <div className="mx-auto mt-5 w-30 text-center">
          <button className="btn btn-outline btn-secondary">Add now</button>
        </div>
      </form>
    </div>
  );
};

export default AddReview;
